import { buildRoutes, generateRoutes } from "../utils/route";
import path from 'path'
import { fileURLToPath } from 'url'

const folderMap = {
  performance: "性能",
  'performance/tips': '性能技巧',
  metrics: "关键指标",
  html: "html",
  "how-web-browser-works": "浏览器工作原理",
};

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const routes = generateRoutes(__dirname, folderMap)

const { sidebarRoute: chromeSidebar, navRoute: chromeNav } = buildRoutes({
  base: "/chrome",
  routes,
  nav: "Chrome",
});

export { chromeSidebar, chromeNav };
