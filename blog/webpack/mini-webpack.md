项目：[mini-webpack](https://github.com/cuixiaorui/mini-webpack)

1. 相比`minipack`多实现了`loader`和`plugin`，构建依赖等核心代码基本相同。
2. `loader`的调用发生在将`module`转为`ast`之前，是`source => source`的过程（均为字符串）。
3. `plugin`的机制本质上是观察者模式，每个`plugin`都是一个类，并提供`apply`方法，插件开发者在这个方法内订阅若干事件（声明周期）。在`webpack`初始化`compiler`后立即遍历 `plugins`并调用`apply`。用到了`tapable`库，该库提供插件的多种运行模式。

## 调用

### 1. 配置文件

```js
import jsonLoader from "./loader/json-loader.js";
import repeatGraphWebpackPlugin from "./plugins/repeat-graph-webpack-plugin.js";
const __dirname = path.dirname(Url.fileURLToPath(import.meta.url));

const config = {
  entry: path.resolve(__dirname, "./application/entry.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.json$/,
        loader: jsonLoader,
      },
    ],
  },
  plugins: [new repeatGraphWebpackPlugin()],
};

webpack(config);
```

### 2. json-loader.js

```js
export default function parse(source) {
  console.log("需要json-loader处理的信息", source);
  let code = JSON.parse(source);
  code.forEach((item) => (item.age = 18));
  code = JSON.stringify(code);

  const result = `export default ${code}`;
  return result;
}
```

### 3. repeat-graph-webpack-plugin.js

```js
export default class repeatGraphWebpackPlugin {
  apply(compiler) {
    compiler.hooks.emit.tapAsync("emit-plugin", (compiler) => {
      console.log("compilation", compiler._compilation.graph);
      const map = new Map();
      compiler._compilation.graph.forEach((item) => {
        const { id, code } = item;
        const ids = map.get(code) || [];
        if (ids.length > 0) {
          map.set(code, [...ids, id]);
        } else {
          map.set(code, [id]);
        }
      });
      const repeatGraph = [];
      map.forEach((item) => {
        if (item.length > 1) {
          repeatGraph.push(item);
        }
      });

      console.log("以下生成的依赖图ID：", repeatGraph, "将重复");
    });
  }
}
```

## webpack 源码

`目录结构`

```js
|——bundle.ejs
|——Compilation.js
|——Compiler.js
|——createBundleCode.js
|——index.js
|——parser.js
|——util.js
```

### 1. 入口 index.js

```js
// 步骤
// 读取入口文件
// 分析入口文件，递归的去读取模块所依赖的文件内容，生成AST语法树。
// 根据AST语法树，生成浏览器能够运行的代码

import Compiler from "./Compiler.js";
export function webpack(config) {
  const compiler = new Compiler(config);
  compiler.run();
}
```
### 2. Compiler.js
```js
import { SyncHook, AsyncSeriesHook } from "tapable";
import Compilation from './Compilation.js'
import { createBundleCode } from "./createBundleCode.js";
import fs from 'fs'
import path from 'path'

export default class Compiler {
	constructor(config = {}) {
		const { entry, output, plugins = [], module = {} } = config;
		this._entry = entry;
		this._output = output;
		this._plugins = plugins;
		this._loaders = module.rules || [];
		console.log('this._loaders', this._loaders)

		// 观察者模式，tapable库的tap相当于on，call相当于emit
		this.hooks = {
			run: new SyncHook(["time"]),
			emit: new AsyncSeriesHook(["compiler"]),
		};

		this.initPlugins();
	}

	// 初始化插件，调用插件的apply方法，插件里面是各种hooks.tap，就是订阅消息
	initPlugins() {
		this._plugins.forEach((plugin) => {
			plugin?.apply.call(plugin, this);
		});
	}

	run() {
		console.log('run')
		this.hooks.run.call(Date.now())

		this._compilation = new Compilation({
			entry: this._entry,
			loaders: this._loaders
		})
		this._compilation.make()

		this.hooks.emit.callAsync(this)
		this.emitFiles()
	}

	emitFiles() {
		const modules = this._compilation.graph.reduce((r, m) => {
			r[m.id] = {
				code: m.code,
				mapping: m.mapping
			}
			return r;
		}, {})

		const outputPath = path.join(this._output.path, this._output.filename)
		fs.writeFileSync(outputPath, createBundleCode({ modules }))
	}
}

```

### 3. Compilation.js
```js
import fs from "fs";
import { parse } from "./parser.js";
import path from "path";

let ID = 0;

export default class Compilation {
	constructor({ entry, loaders }) {
		this._entry = entry;
		this._loaders = loaders;
		this.graph = [];
	}

	// 每个文件就是一个module，处理module获取必要信息
	bundleModule(filename) {
		let content = fs.readFileSync(filename, { encoding: "utf-8" });

		// 处理loader
		this._loaders.forEach((rule) => {
			const { test, loader } = rule;
			if (test.test(filename)) {
				content = loader(content);
			}
		});

		const { code, dependencies } = parse(content);

		return {
			filename, // 当前处理的文件名
			dependencies, // 当前文件中存在的依赖项
			code, // 降级后的代码
			mapping: {}, // 以依赖项路径为key, id为值生成对应关系
			id: ID++, // 唯一ID
		};
	}

	// 构建依赖图
	make() {
		const moduleQueue = [];

		const entryModule = this.bundleModule(this._entry);
		moduleQueue.push(entryModule);
		this.graph.push(entryModule);

		for (const currentModule of moduleQueue) {
			currentModule.dependencies.forEach((dependency) => {
				// 拼接依赖项的绝对路径
				const dirname = path.dirname(currentModule.filename);
				const childPath = path.resolve(dirname, dependency);

				const childModule = this.bundleModule(childPath);
				currentModule.mapping[dependency] = childModule.id;
				moduleQueue.push(childModule);
				this.graph.push(childModule);
			});
		}
	}
}

```

### 4. parser.js
```js
import {
	parse as babelParse,
	traverse,
	transformFromAstSync,
} from "@babel/core";

export function parse(content) {
	const dependencies = [];

	// 代码转ast
	const ast = babelParse(content, {
		sourceType: "module",
	});

	// 遍历ast，收集import源路径
	traverse(ast, {
		ImportDeclaration({ node }) {
			dependencies.push(node.source.value);
		},
	});

	// 语法降级
	const { code } = transformFromAstSync(ast, content, {
		presets: ["@babel/preset-env"],
	});

	return { code, dependencies };
}
```

### 5. createBundleCode.js
```js
import fs from "fs";
import { dirname } from "./util.js";
import path from "path";
import ejs from "ejs";

export function createBundleCode({ modules }) {
	const template = fs.readFileSync(path.resolve(dirname(), "bundle.ejs"), {
		encoding: "utf-8",
	});

	const code = ejs.render(template, { modules });
	return code;
}

```

### 6. util.js
```js
import path from "path";
import { fileURLToPath } from "url";

export function dirname() {
  return path.dirname(fileURLToPath(import.meta.url));
}

```

### 7. bundle.ejs
```js

(function (modules) {
	function require(id) {

		const [fn,mapping] = modules[id];

		function localRequire(name){
			// name -> id
			return require(mapping[name])
		}

		const module = { exports: {} };
		fn(localRequire, module, module.exports);
		return module.exports;
	}


require(0);
})({
<% Object.keys(modules).forEach(function(id){ %>
<%=id%> : [
function (require, module, exports){
<%-modules[id].code%>
},
		 <%-JSON.stringify(modules[id].mapping)%>
],
<% }); %>
}
);

```