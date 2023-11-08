import { buildRoutes, buildTodoLink } from "../utils/route";

const routes = {
  设计模式: [
    { link: 'indexs', text: '资源列表' },
    { link: 'singleton-pattern', text: 'singleton pattern' },
    { link: 'strategy-pattern', text: 'strategy pattern' },
    { link: 'proxy-pattern', text: 'proxy pattern' },
  ],
};

const { sidebarRoute: patternSidebar, navRoute: patternNav } = buildRoutes({
  base: "/design-pattern",
  routes,
  nav: '设计模式'
});

export { patternSidebar, patternNav };
