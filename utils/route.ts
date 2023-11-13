import path from "path";
import fs from "fs";
import { upperCaseStart } from "./tool";
import { getRouteMap } from "../babel/getRouteMap";
import { BLOG } from "./constants";

const routeCache = {};

type link = (string | { link: string; text?: string; })[];

interface IRoute {
  base: string; // 基础目录
  routes: Record<string, link>; // 路由映射
  nav?: string; // 右上角导航
}

const joinPath = (base: string, route: string) => {
  if (base === "/") {
    return `/${route}`;
  }
  return `/${base}/${route}`;
};

const buildItems = (options: { base: string; routes: link }) => {
  const { base, routes } = options;
  return routes.map((route) => {
    if (typeof route === "string") {
      route = { text: route, link: route };
    }
    let { text, link } = route;
    text = text || link;
    return {
      text,
      link: joinPath(base, link),
    };
  });
};
const buildRoutes = (option: IRoute) => {
  let { base, routes, nav } = option;
  base = base[0] === "/" ? base.slice(1) : base;

  nav = nav || base;
  nav = upperCaseStart(nav);

  const routeEntries = Object.entries(routes);
  if (!routeEntries[0]) return null;

  const firstSideRoute = routeEntries[0][1][0];
  const defaultSideRoute =
    typeof firstSideRoute === "string" ? firstSideRoute : firstSideRoute.link;

  // nav
  const navRoute = {
    text: nav,
    // link: `${base}/${defaultSideRoute}`,
    link: joinPath(base, defaultSideRoute),
    activeMatch: base === "/" ? "^/$" : `\/${base}\/`,
  };

  // sidebar
  const items = routeEntries.map(([text, routeItems]) => {
    const items = buildItems({ base, routes: routeItems });
    return {
      text,
      items,
      collapsable: true,
    };
  });

  return {
    sidebarRoute: {
      [base]: items,
    },
    navRoute,
  };
};


const getLegalCategory = (file: string, titles: Record<string, string>) => {
  file = file.replace(/\.md$/, "");
  let folders = file.split("/").slice(0, -1);

  if (routeCache[folders.join("/")]) {
    return routeCache[folders.join("/")];
  }

  const findCategory = () => {
    if (folders.length === 0) {
      return null;
    }
    const folder = folders.join("/");
    const title = titles[folder];
    if (!title) {
      folders.pop();
      return findCategory();
    }
    return title;
  };

  const category = findCategory();
  routeCache[folders.join("/")] = category;

  return category;
};

/**
 * 根据类型映射生成目录结构
 * @param sourceDir 生成route起始位置
 * @param titles 路径和分类名称的映射
 * @returns
 */
const generateRoutes = (sourceDir: string, titles: Record<string, string>) => {
  const originDir = sourceDir;
  const prefix =
    process.argv.filter((argv) => !argv.startsWith("--")).slice(-1)[0] ||
    "blog";
  sourceDir = path.resolve(process.cwd(), `${prefix}/${sourceDir}`);

  if (!fs.statSync(sourceDir).isDirectory()) {
    throw new Error(`路径错误，并非目录地址: ${sourceDir}`);
  }
  let files = fs.readdirSync(sourceDir, { recursive: true, encoding: "utf-8" });
  files = files.filter((file) => file.endsWith(".md"));

  return files.reduce((routes, file) => {
    const filePath = path.join(sourceDir, file);
    const content = fs.readFileSync(filePath, "utf-8");

    const contents = content.split(/\r?\n/g).filter(Boolean);
    const titleIdentify = "**文章副标题:**";
    // 识别自定义标题，识别 **文章标题:**
    let title = contents
      .find((c) => c.trim().startsWith(titleIdentify))
      ?.replace(titleIdentify, "")
      .trim();

    // 读取文件的第一行作为目录标题
    if (!title) {
      title =
        contents[0]?.trim().replace(/^#\s*/, "") ||
        `【--空文件--】: ${file}`;
    }

    file = file.replace(/\.md$/, "");

    let category = getLegalCategory(file, titles);

    if (!category) {
      category = titles[originDir] || null;
    }

    if (category) {
      category = upperCaseStart(category);
    }
    if (!routes[category]) {
      routes[category] = [];
    }
    routes[category].push({ link: file, text: title.trim() });
    return routes;
  }, {});
};

const getRootPath = (metaUrl: string) => {
  const reg = /([^\/]+)\/router\.ts$/;

  const name = reg.exec(metaUrl)?.[1];

  if (!name) {
    throw new Error(`无法获取根路径: ${metaUrl}`);
  }
  return name;
};

const generateAllRoutes = (blackList: string[]) => {
  const blogDirs = fs.readdirSync(BLOG).filter((dir) => {
    if (blackList.includes(dir)) return false;

    const blogDir = path.join(BLOG, dir);
    if (!fs.statSync(blogDir).isDirectory()) return false;
    return true;
  });
  
  const routes = blogDirs.reduce<{ nav: any; sidebar: any }>(
    (result, item) => {
      const defaultFolderMap = { [item]: item };
      let folderMap;
      const routerPath = path.resolve(BLOG, item, "route.ts");
      if (!fs.existsSync(routerPath)) {
        folderMap = defaultFolderMap;
      } else {
        folderMap = getRouteMap(routerPath);
      }
      folderMap = folderMap || defaultFolderMap;
      if (folderMap[0]) {
        folderMap[item] = folderMap[0];
      }
      const routes = generateRoutes(item, folderMap);
      const { sidebarRoute, navRoute } =
        buildRoutes({
          base: item,
          routes,
        }) || {};

      if (!sidebarRoute || !navRoute) return result;

      result.nav.push(navRoute);
      result.sidebar[`${item}`] = sidebarRoute[item];
      return result;
    },
    { nav: [], sidebar: {} }
  );

  return routes
};

export { buildRoutes, generateRoutes, getRootPath, generateAllRoutes };
