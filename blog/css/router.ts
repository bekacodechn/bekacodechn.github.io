import { buildRoutes } from "../utils/route";

const routes = {
  Promise: [
    { link: "aspect-ratio", text: "固定款高比" },
  ]
};

const { sidebarRoute: cssSidebar , navRoute: cssNav } = buildRoutes({
  base: "/css",
  routes,
  nav: 'css'
});

export { cssSidebar, cssNav };
