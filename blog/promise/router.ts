import { buildRoutes, buildTodoLink } from "../utils/route";

const routes = {
  Promise: [
    { link: "first-resolved", text: "顺序执行任务直到第一个resolved" },
    { link: "sequential-execution", text: "reduce实现多个promise顺序执行" },
  ]
};

const { sidebarRoute: promiseSidebar, navRoute: promiseNav } = buildRoutes({
  base: "/promise",
  routes,
  nav: 'Promise'
});

export { promiseSidebar, promiseNav };
