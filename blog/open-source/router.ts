import { buildRoutes, buildTodoLink } from "../utils/route";

const routes = {
  工具类: [
    "yocto-queue",
    "p-limit",
    "p-locate",
    "delay",
    "p-settle",
    "p-defer",
    "p-lazy",
    buildTodoLink('dot-prop'),
    'glob-to-regexp'
  ],
  DesignPattern: [{ text: "洋葱模型", link: "koa-compose" }],
};

const { sidebarRoute: openSourceSidebar, navRoute: openSourceNav } = buildRoutes({
  base: "/open-source",
  routes,
  nav: '源码阅读'
});

export { openSourceSidebar, openSourceNav};
