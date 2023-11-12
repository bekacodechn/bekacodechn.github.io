import path from "path";
import fs from "fs";
import { parse } from "@babel/core";

// 收集博客路由导出的sidebarRoute和navRoute
export const collectExportRoute = (routerFolder: string) => {

  const ROUTES = ["sidebarRoute", "navRoute"];

  const router = path.join(routerFolder, "route.ts");

  if (!fs.statSync(router).isFile()) {
    throw new Error(`不是文件: ${router}`);
  }

  const routerExports: string[] = [];

  const routerContent = fs.readFileSync(router, "utf-8");

  const routerAST = parse(routerContent, {
    sourceType: "unambiguous",
  });

  // 收集导出的博客路由，包括sidebar和nav
  routerAST.program.body.forEach((item) => {
    if (item.type !== "ExportNamedDeclaration") return;
    const { specifiers } = item;
    if (!specifiers) {
      throw new Error(`没有导出: ${router}`);
    }
    specifiers.map((spe) => {
      routerExports.push(spe.exported.name);
    });
  });

  // 检查所需路由是否全部导出
  ROUTES.forEach((r) => {
    if (!routerExports.includes(r)) {
      throw new Error(`缺少路由导出: ${r}`);
    }
  });

  return routerExports
};
