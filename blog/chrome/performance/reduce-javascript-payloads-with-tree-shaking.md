# 通过摇树减少 JavaScript 有效负载


`metadata:`

**原标题:** Reduce JavaScript payloads with tree shaking

**链接:** https://web.dev/articles/reduce-javascript-payloads-with-tree-shaking

---

Today's web applications can get pretty big, especially the JavaScript part of them. As of mid-2018, HTTP Archive puts the [median transfer size of JavaScript on mobile devices](https://httparchive.org/reports/state-of-javascript#bytesJs) at approximately 350 KB. And this is just transfer size! JavaScript is often compressed when sent over the network, meaning that the _actual_ amount of JavaScript is quite a bit more after the browser decompresses it. That's important to point out, because as far as resource _processing_ is concerned, compression is irrelevant. 900 KB of decompressed JavaScript is still 900 KB to the parser and compiler, even though it may be roughly 300 KB when compressed.  

今天的 Web 应用程序可能会变得非常大，尤其是其中的 JavaScript 部分。截至 2018 年年中，HTTP Archive 将 JavaScript 在移动设备上的传输大小中位数定为约 350 KB。而这只是传输大小！JavaScript 在通过网络发送时通常会被压缩，这意味着在浏览器解压缩后，JavaScript 的实际数量会多得多。需要指出的是，就资源处理而言，压缩是无关紧要的。900 KB 的解压缩 JavaScript 对于解析器和编译器来说仍然是 900 KB，即使压缩后可能大约 300 KB。

![20231116112020](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231116112020.png)
*The process of downloading and running JavaScript. Note that even though the transfer size of the script is 300 KB compressed, it is still 900 KB worth of JavaScript that must be parsed, compiled, and executed.*

*下载和运行 JavaScript 的过程。请注意，即使脚本的传输大小压缩为 300 KB，但仍必须解析、编译和执行 900 KB 的 JavaScript。*

JavaScript is an expensive resource to process. Unlike images which only incur relatively trivial decode time once downloaded, JavaScript must be parsed, compiled, and then finally executed. Byte for byte, this makes JavaScript more expensive than other types of resources.  

JavaScript 是一种昂贵的处理资源。与下载后仅产生相对微不足道的解码时间的图像不同，JavaScript 必须经过解析、编译，然后最终执行。逐字节，这使得 JavaScript 比其他类型的资源更昂贵。

![20231116112125](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231116112125.png)
*The processing cost of parsing/compiling 170 KB of JavaScript vs decode time of an equivalently sized JPEG. ([source](https://medium.com/dev-channel/the-cost-of-javascript-84009f51e99e)).*

*解析/编译 170 KB JavaScript 的处理成本与同等大小的 JPEG 的解码时间之比。（来源）.*

[While improvements are continually being made](https://v8.dev/blog/background-compilation) to [improve the efficiency of JavaScript engines](https://blog.mozilla.org/javascript/2017/12/12/javascript-startup-bytecode-cache/), improving JavaScript performance is—as always—a task for developers.  

虽然不断进行改进以提高 JavaScript 引擎的效率，但提高 JavaScript 性能一如既往地是开发人员的任务。

To that end, there are techniques to improve JavaScript performance. [Code splitting](https://web.dev/articles/reduce-javascript-payloads-with-code-splitting), is one such technique that improves performance by partitioning application JavaScript into chunks, and serving those chunks to only the routes of an application that need them.  

为此，有一些技术可以提高 JavaScript 性能。代码拆分就是这样一种技术，它通过将应用程序 JavaScript 划分为多个块，并将这些块仅提供给需要它们的应用程序的路由来提高性能。

While this technique works, it doesn't address a common problem of JavaScript-heavy applications, which is the inclusion of code that's never used. Tree shaking attempts to solve this problem.  

虽然这种技术有效，但它并没有解决 JavaScript 密集型应用程序的常见问题，即包含从未使用过的代码。摇树试图解决这个问题。

## What is tree shaking?  什么是摇树？

[Tree shaking](https://en.wikipedia.org/wiki/Tree_shaking) is a form of dead code elimination. [The term was popularized by Rollup](https://github.com/rollup/rollup#tree-shaking), but the concept of dead code elimination has existed for some time. The concept has also found purchase in [webpack](https://webpack.js.org/guides/tree-shaking/), which is demonstrated in this article by way of a sample app.  

摇树是消除死代码的一种形式。该术语由 Rollup 推广，但死代码消除的概念已经存在了一段时间。这个概念在 webpack 中也得到了购买，本文通过一个示例应用程序进行了演示。

The term "tree shaking" comes from the mental model of your application and its dependencies as a tree-like structure. Each node in the tree represents a dependency that provides distinct functionality for your app. In modern apps, these dependencies are brought in via [static `import` statements](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/import) like so:  

术语“摇树”来自应用程序的心智模型及其作为树状结构的依赖关系。树中的每个节点都表示一个依赖项，该依赖项为应用提供不同的功能。在现代应用中，这些依赖项是通过静态 `import` 语句引入的，如下所示：

```js
// Import all the array utilities!
import arrayUtils from "array-utils";
```

:::info
**Note:** If you're not sure what ES6 modules are, [this explainer at Pony Foo](https://ponyfoo.com/articles/es6-modules-in-depth) is worth a look. This guide assumes you have working knowledge of how ES6 modules work, so if you don't know anything about them, give that article a read!  

注意：如果您不确定 ES6 模块是什么，Pony Foo 的这个解释器值得一看。本指南假设您对 ES6 模块的工作原理有一定的了解，所以如果你对它们一无所知，请阅读这篇文章！
:::

When an app is young—a sapling, if you will—it may have few dependencies. It's also using most—if not all—the dependencies you add. As your app matures, however, more dependencies can get added. To compound matters, older dependencies fall out of use, but may not get pruned from your codebase. The end result is that an app ends up shipping with a lot of [unused JavaScript](https://web.dev/unused-javascript). Tree shaking addresses this by taking advantage of how static `import` statements pull in specific parts of ES6 modules:  

当一个应用程序还很年轻时（如果你愿意的话，它是一棵树苗），它可能几乎没有依赖关系。它还使用您添加的大多数（如果不是全部）依赖项。但是，随着应用的成熟，可以添加更多依赖项。雪上加霜的是，较旧的依赖项不再使用，但可能不会从代码库中删除。最终结果是，一个应用程序最终会附带大量未使用的 JavaScript。摇树通过利用静态 `import` 语句如何拉入 ES6 模块的特定部分来解决这个问题：

```js
// Import only some of the utilities!
import { unique, implode, explode } from "array-utils";
```

The difference between this `import` example and the previous one is that rather than importing _everything_ from the `"array-utils"` module—which could be a lot of code)—this example imports only specific parts of it. In dev builds, this doesn't change anything, as the entire module gets imported regardless. In production builds, webpack can be configured to "shake" off [exports](https://developer.mozilla.org/docs/web/javascript/reference/statements/export) from ES6 modules that weren't explicitly imported, making those production builds smaller. In this guide, you'll learn how to do just that!  

此示例与上一个示例的区别在于，此 `import` 示例不是从模块中导入所有内容（可能是大量代码），而是仅导入 `"array-utils"` 模块的特定部分。在开发版本中，这不会改变任何事情，因为无论如何都会导入整个模块。在生产版本中，webpack 可以配置为“摆脱”未显式导入的 ES6 模块的导出，从而使这些生产版本更小。在本指南中，您将学习如何做到这一点！

## Finding opportunities to shake a tree  寻找机会摇晃一棵树

For illustrative purposes, [a sample one-page app](https://github.com/malchata/webpack-tree-shaking-example) is available that demonstrates how tree shaking works. You can clone it and follow along if you like, but we'll cover every step of the way together in this guide, so cloning isn't necessary (unless hands-on learning is your thing).  

为了便于说明，提供了一个示例单页应用程序，用于演示摇树的工作原理。如果您愿意，您可以克隆它并跟随它，但我们将在本指南中一起介绍每一步，因此克隆不是必需的（除非您喜欢动手学习）。

The sample app is a searchable database of guitar effect pedals. You enter a query and a list of effect pedals will appear.  

示例应用是吉他效果踏板的可搜索数据库。您输入查询，将出现效果踏板列表。

![20231116112856](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231116112856.png)

The behavior that drives this app is separated into vendor (i.e., [Preact](https://preactjs.com/) and [Emotion](https://emotion.sh/)) and app-specific code bundles (or "chunks", as webpack calls them):  

驱动此应用程序的行为分为供应商（即 Preact 和 Emotion）和特定于应用程序的代码包（或 webpack 称之为“块”）：

![20231116112919](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231116112919.png)

The JavaScript bundles shown in the figure above are production builds, meaning they're optimized through uglification. 21.1 KB for an app-specific bundle isn't bad, but it should be noted that no tree shaking is occurring whatsoever. Let's look at the app code and see what can be done to fix that.  

上图中显示的 JavaScript 包是生产版本，这意味着它们通过丑化进行了优化。21.1 KB 对于特定于应用程序的捆绑包来说还不错，但应该注意的是，没有发生任何摇树。让我们看一下应用代码，看看可以做些什么来解决这个问题。

:::info
**Note:** If you don't care for a long-winded explanation, and want to dive into code, go ahead and check out [the `tree-shake` branch](https://github.com/malchata/webpack-tree-shaking-example/tree/tree-shake) in the app's GitHub repo. You can also [diff this branch](https://github.com/malchata/webpack-tree-shaking-example/compare/tree-shake) to see exactly what was changed to make tree shaking work!  

注意：如果您不关心冗长的解释，并且想要深入研究代码，请继续查看应用程序的 GitHub 存储库中的 `tree-shake` 分支。您还可以比较此分支，以确切地查看为使摇树工作而更改的内容！
:::

In any application, finding tree shaking opportunities are going to involve looking for static `import` statements. [Near the top of the main component file](https://github.com/malchata/webpack-tree-shaking-example/blob/master/src/components/FilterablePedalList/FilterablePedalList.js#L4), you'll see a line like this:  

在任何应用程序中，寻找摇树机会都将涉及寻找静态 `import` 语句。在主组件文件的顶部附近，您会看到如下行：

```js
import * as utils from "../../utils/utils";
```
You can [import ES6 modules in a variety of ways](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/import#description), but ones like this should get your attention. This specific line says "`import` _everything_ from the `utils` module, and put it in a namespace called `utils`." The big question to ask here is, "just how much _stuff_ is in that module?"  

您可以通过多种方式导入 ES6 模块，但像这样的模块应该引起您的注意。这一行说“ `import` `utils` 模块中的所有内容，并将其放在名为 `utils` 的命名空间中。这里要问的一个大问题是，“那个模块中到底有多少东西？

If you look at [the `utils` module source code](https://github.com/malchata/webpack-tree-shaking-example/blob/master/src/utils/utils.js), you'll find there's about 1,300 lines of code.  

如果你看一下 `utils` 模块的源代码，你会发现大约有 1,300 行代码。

Do you _need_ all that stuff? Let's double check by searching [the main component file](https://github.com/malchata/webpack-tree-shaking-example/blob/master/src/components/FilterablePedalList/FilterablePedalList.js) that imports the `utils` module to see how many instances of that namespace come up.  

你需要所有这些东西吗？让我们通过搜索导入 `utils` 模块的主组件文件来仔细检查，看看该命名空间有多少个实例。

![20231116113023](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231116113023.png)
*The `utils` namespace we've imported tons of modules from is only invoked three times within the main component file.*

*我们从中导入了大量模块的 `utils` 命名空间在主组件文件中只调用了三次。*

As it turns out, the `utils` namespace appears in only three spots in our application—but for what functions? If you take a look at the main component file again, it appears to be only one function, which is `utils.simpleSort`, which is used to sort the search results list by a number of criteria when the sorting dropdowns are changed:  

事实证明， `utils` 命名空间在我们的应用程序中只出现在三个位置，但用于什么功能？如果再次查看主组件文件，它似乎只有一个函数，即 `utils.simpleSort` ，用于在更改排序下拉列表时按多个条件对搜索结果列表进行排序：

```js
if (this.state.sortBy === "model") {
  // `simpleSort` gets used here...
  json = utils.simpleSort(json, "model", this.state.sortOrder);
} else if (this.state.sortBy === "type") {
  // ..and here...
  json = utils.simpleSort(json, "type", this.state.sortOrder);
} else {
  // ..and here.
  json = utils.simpleSort(json, "manufacturer", this.state.sortOrder);
}
```

Out of a 1,300 line file with a bunch of exports, only one of them is used. This results in shipping a lot of unused JavaScript.  

在包含一堆导出的 1,300 行文件中，只使用了其中一个。这导致大量未使用的 JavaScript 发布。

:::info
**Note:** This project is purposefully kept simple, so it's a bit easier in this case to find out where the bloat is coming from. In large projects with many modules, however, things get more complicated. Tools such as [Webpack Bundle Analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer) and [source-map-explorer](https://www.npmjs.com/package/source-map-explorer) may provide further insight.  

注意：这个项目特意保持简单，所以在这种情况下，找出膨胀的来源会更容易一些。然而，在具有许多模块的大型项目中，事情变得更加复杂。Webpack Bundle Analyzer 和 source-map-explorer 等工具可能会提供进一步的见解。
:::

While this example app is admittedly a bit contrived, it doesn't change the fact that this synthetic sort of scenario resembles actual optimization opportunities you may encounter in a production web app. Now that you've identified an opportunity for tree shaking to be useful, how is it actually done?  

虽然此示例应用确实有点做作，但它并没有改变这样一个事实，即这种合成类型的方案类似于您在生产 Web 应用中可能遇到的实际优化机会。既然您已经确定了摇树有用的机会，那么它实际上是如何完成的？

## Keeping Babel from transpiling ES6 modules to CommonJS modules  防止 Babel 将 ES6 模块转译为 CommonJS 模块

[Babel](https://babeljs.io/) is an indispensable tool, but it may make the effects of tree shaking a bit more difficult to observe. If you're using [`@babel/preset-env`](https://babeljs.io/docs/en/babel-preset-env), Babel _may_ transform ES6 modules into more widely compatible CommonJS modules—that is, modules you `require` instead of `import`.  

巴别塔是不可或缺的工具，但它可能会使树木摇晃的影响更难观察。如果您使用的 `@babel/preset-env` 是 ，Babel 可能会将 ES6 模块转换为更广泛兼容的 CommonJS 模块，即 u `require` 模块而不是 `import` .

Because tree shaking is more difficult to do for CommonJS modules, webpack won't know what to prune from bundles if you decide to use them. The solution is to configure `@babel/preset-env` to explicitly leave ES6 modules alone. Wherever you configure Babel—be it in `babel.config.js` or `package.json`—this involves adding a little something extra:  

因为 CommonJS 模块更难做摇树，所以如果你决定使用它们，webpack 将不知道要从捆绑包中删除什么。解决方案是配置为 `@babel/preset-env` 显式保留 ES6 模块。无论你在什么地方配置 Babel——无论是在 in `babel.config.js` 中还是在 `package.json` - 这都涉及添加一些额外的东西：

```js
// babel.config.js
export default {
  presets: [
    [
      "@babel/preset-env", {
        modules: false
      }
    ]
  ]
}
```

Specifying `modules: false` in your `@babel/preset-env` config gets Babel to behave as desired, which allows webpack to analyze your dependency tree and shake off unused dependencies.  

在你的 `@babel/preset-env` 配置中指定 `modules: false` 可以让 Babel 按照预期运行，这允许 webpack 分析你的依赖树并摆脱未使用的依赖。

## Keeping side effects in mind  牢记副作用

Another aspect to consider when shaking dependencies from your app is whether your project's modules have side effects. An example of a side effect is when a function modifies something outside of its own scope, which is a _side effect_ of its execution:  

从应用中摇动依赖项时要考虑的另一个方面是项目的模块是否有副作用。副作用的一个例子是，当一个函数修改了它自己的范围之外的东西时，这是其执行的副作用：

```js
let fruits = ["apple", "orange", "pear"];

console.log(fruits); // (3) ["apple", "orange", "pear"]

const addFruit = function(fruit) {
  fruits.push(fruit);
};

addFruit("kiwi");

console.log(fruits); // (4) ["apple", "orange", "pear", "kiwi"]
```

In this example, `addFruit` produces a side effect when it modifies the `fruits` array, which is outside its scope.  

在此示例中，当它修改 `fruits` 数组时会产生副作用， `addFruit` 这超出了其范围。

Side effects also apply to ES6 modules, and that matters in the context of tree shaking. Modules that take predictable inputs and produce equally predictable outputs without modifying anything outside of their own scope are dependencies that can be safely dropped if we're not using them. They're self-contained, _modular_ pieces of code. Hence, "modules".  

副作用也适用于 ES6 模块，这在摇树的背景下很重要。采用可预测的输入并产生同样可预测的输出而不修改其自身范围之外的任何内容的模块是依赖项，如果我们不使用它们，则可以安全地删除它们。它们是独立的模块化代码片段。因此，“模块”。

Where webpack is concerned, a hint can be used to specify that a package and its dependencies are free of side effects by specifying `"sideEffects": false` in a project's `package.json` file:  

就 webpack 而言，可以通过在项目 `package.json` 文件中指定来指定 `"sideEffects": false` 包及其依赖项没有副作用：

```js
{
  "name": "webpack-tree-shaking-example",
  "version": "1.0.0",
  "sideEffects": false
}
```

Alternatively, you can tell webpack which specific files are not side effect-free:  

或者，你可以告诉 webpack 哪些特定文件不是没有副作用的：

```js
{
  "name": "webpack-tree-shaking-example",
  "version": "1.0.0",
  "sideEffects": [
    "./src/utils/utils.js"
  ]
}
```

In the latter example, any file that isn't specified will be assumed to be free of side effects. If you don't want to add this to your `package.json` file, [you can also specify this flag in your webpack config via `module.rules`](https://github.com/webpack/webpack/issues/6065#issuecomment-351060570).  

在后一个示例中，任何未指定的文件都将被假定为没有副作用。如果您不想将其添加到文件中 `package.json` ，也可以通过 `module.rules` 在 webpack 配置中指定此标志。

## Importing only what's needed  仅导入所需内容

After instructing Babel to leave ES6 modules alone, a slight adjustment to our `import` syntax is required to bring in only the functions needed from the `utils` module. In this guide's example, all that's needed is the `simpleSort` function:  

在指示 Babel 不理会 ES6 模块之后，需要对我们的 `import` 语法稍作调整，以仅引入 `utils` 模块所需的函数。在本指南的示例中，只需要函数 `simpleSort` ：

```js
import { simpleSort } from "../../utils/utils";
```

Because only `simpleSort` is being imported instead of the entire `utils` module, every instance of `utils.simpleSort` will need to changed to `simpleSort`:  

因为只 `simpleSort` 导入而不是导入整个 `utils` 模块，所以每个 `utils.simpleSort` 实例都需要更改为 `simpleSort` ：

```js
if (this.state.sortBy === "model") {
  json = simpleSort(json, "model", this.state.sortOrder);
} else if (this.state.sortBy === "type") {
  json = simpleSort(json, "type", this.state.sortOrder);
} else {
  json = simpleSort(json, "manufacturer", this.state.sortOrder);
}
```

This should be all that's needed for tree shaking to work in this example. This is the webpack output before shaking the dependency tree:  

在此示例中，这应该是摇树工作所需的全部内容。这是动摇依赖树之前的 webpack 输出：

```js
                 Asset      Size  Chunks             Chunk Names
js/vendors.16262743.js  37.1 KiB       0  [emitted]  vendors
   js/main.797ebb8b.js  20.8 KiB       1  [emitted]  main
```

This is the output _after_ tree shaking is successful:  

这是摇树成功后的输出：

```js
                 Asset      Size  Chunks             Chunk Names
js/vendors.45ce9b64.js  36.9 KiB       0  [emitted]  vendors
   js/main.559652be.js  8.46 KiB       1  [emitted]  main
```

While both bundles shrank, it's really the `main` bundle that benefits most. By shaking off the unused parts of the `utils` module, the `main` bundle shrinks by about 60%. This not only lowers the amount of time the script takes to the download, but processing time as well.  

虽然两个捆绑包都缩小了，但受益最大的确实是 `main` 捆绑包。通过甩掉 `utils` 模块中未使用的部分， `main` 束收缩约60%。这不仅减少了脚本下载所需的时间，还减少了处理时间。

## Go shake some trees! 去摇晃一些树！

Whatever mileage you get out of tree shaking depends on your app and its dependencies and architecture. Try it! If you know for a fact you haven't set up your module bundler to perform this optimization, there's no harm trying and seeing how it benefits your application.  

无论您从摇树中获得什么好处，都取决于您的应用及其依赖项和体系结构。试试吧！如果您知道您还没有设置模块捆绑器来执行此优化，那么尝试并了解它如何使您的应用程序受益并没有什么坏处。

You may realize a significant performance gain from tree shaking, or not much at all. But by configuring your build system to take advantage of this optimization in production builds and selectively importing only what your application needs, you'll be proactively keeping your application bundles as small as possible.  

您可能会从摇树中获得显着的性能提升，或者根本没有实现。但是，通过配置构建系统以在生产构建中利用此优化，并有选择地仅导入应用程序所需的内容，您将主动保持应用程序捆绑包尽可能小。

_Special thanks to Kristofer Baxter, [Jason Miller](https://web.dev/authors/developit), [Addy Osmani](https://web.dev/authors/addyosmani), [Jeff Posnick](https://web.dev/authors/jeffposnick), Sam Saccone, and [Philip Walton](https://web.dev/authors/philipwalton) for their valuable feedback, which significantly improved the quality of this article.  

特别感谢 Kristofer Baxter、Jason Miller、Addy Osmani、Jeff Posnick、Sam Saccone 和 Philip Walton 的宝贵反馈，这大大提高了本文的质量。_
