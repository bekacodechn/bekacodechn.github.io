import { buildRoutes, generateRoutes, getRootPath } from "../utils/route";

const name = getRootPath(import.meta.url)

const titles = {
  [name]: name
};

const routes = generateRoutes(name, titles)

const { sidebarRoute, navRoute } = buildRoutes({
  base: name,
  routes,
});

export { sidebarRoute, navRoute };
