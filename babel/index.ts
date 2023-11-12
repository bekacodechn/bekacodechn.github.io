import path from "path";
import fs from "fs";
import { overrideConfig } from "./overrideConfig";
import { collectExportRoute } from "./collectExportRoute";

const BLOG_DIR = "blog";

const destFolder = process.argv[2];

if (!destFolder) {
  throw new Error(`缺少参数 folder`);
}

const cwd = process.cwd();
// blog dir
const BLOG_ROOT = path.resolve(cwd, BLOG_DIR);
// babel dir
const BABEL_ROOT = path.resolve(cwd, 'babel') 
const ROUTE_TPL = path.resolve(BABEL_ROOT, './router.tpl')

const routerFolder = path.join(BLOG_ROOT, destFolder);

if (!fs.existsSync(routerFolder)) {
  throw new Error(`目录${destFolder}不存在: ${routerFolder}`);
}

// 将路由模板复制到指定文件夹
const routerPath = path.join(routerFolder, 'route.ts')
if (!fs.existsSync(routerPath)) {
  const content = fs.readFileSync(ROUTE_TPL, 'utf-8')
  fs.writeFileSync(routerPath, content)
}

// 收集导出路由
const routerExports = collectExportRoute(routerFolder);

// 向config.ts写入新增路由
overrideConfig({ BLOG_DIR, routerExports });
