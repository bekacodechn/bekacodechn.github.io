import { buildRoutes, buildTodoLink } from "../utils/route";

const routes = {
  webpack: [
    "minipack",
    "mini-webpack",
    buildTodoLink("tapable"),
    { link: "build-result", text: "打包分析结果" },
  ],
};

const { sidebarRoute: webpackSidebar, navRoute: webpackNav } = buildRoutes({
  base: "/webpack",
  routes,
  nav: 'webpack'
});

export { webpackSidebar, webpackNav };
