import path from "path";
import fs from "fs";

const routeCache = {};

type link = (string | { link: string; text?: string; todo?: boolean })[];

interface IRoute {
  base: string;
  routes: Record<string, link>;
  nav: string;
}

const joinPath = (base: string, route: string) => {
  if (base === "/") {
    return `/${route}`;
  }
  return `${base}/${route}`;
};

const buildItems = (options: { base: string; routes: link }) => {
  const { base, routes } = options;
  return routes.map((route) => {
    if (typeof route === "string") {
      route = { text: route, link: route, todo: false };
    }
    let { text, link, todo } = route;
    text = text || link;
    text = todo ? `【TODO】 ${text}` : text;
    return {
      text,
      // link: `${base}/${link}`,
      link: joinPath(base, link),
    };
  });
};

const buildRoutes = (option: IRoute) => {
  let { base, routes, nav } = option;

  const routeEntries = Object.entries(routes);
  const firstSideRoute = routeEntries[0][1][0];
  const defaultSideRoute =
    typeof firstSideRoute === "string" ? firstSideRoute : firstSideRoute.link;

  // nav
  const navRoute = {
    text: nav,
    // link: `${base}/${defaultSideRoute}`,
    link: joinPath(base, defaultSideRoute),
    activeMatch: base === "/" ? "^/$" : `\\${base}\/`,
  };

  // sidebar
  const items = routeEntries.map(([text, routeItems]) => {
    const items = buildItems({ base, routes: routeItems });
    return {
      text,
      items,
    };
  });

  return {
    sidebarRoute: {
      [base]: items,
    },
    navRoute,
  };
};

const buildTodoLink = (link: link[0]) => {
  if (typeof link === "string") {
    link = { link };
  }
  link.todo = true;
  return link;
};

const getLegalCategory = (file: string, folderMap: Record<string, string>) => {
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
    const title = folderMap[folder];
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
 * @param folderMap 路径和分类名称的映射
 * @returns 
 */
const generateRoutes = (
  sourceDir: string,
  folderMap: Record<string, string>
) => {
  let files = fs.readdirSync(sourceDir, { recursive: true, encoding: "utf-8" });
  files = files.filter((file) => file.endsWith(".md"));

  return files.reduce((routes, file) => {
    const filePath = path.join(sourceDir, file);
    const content = fs.readFileSync(filePath, "utf-8");
    // 读取文件的第一行作为目录标题
    const reg = /^\s*\#\s*(.+)\s*/;
    const titleMatch = reg.exec(content);
    const title = titleMatch?.[1] || `【--缺少-标题--】: ${file}`;

    file = file.replace(/\.md$/, "");
    const folderTree = file.split("/").slice(0, -1);
    let folder = folderTree.join("/");

    if (!folder) {
      console.error(`路径错误: ${file}`);
      return routes;
    }

    const category = getLegalCategory(file, folderMap);

    if (!routes[category]) {
      routes[category] = [];
    }
    routes[category].push({ link: file, text: title });
    return routes;
  }, {});
};

export { buildRoutes, buildTodoLink, generateRoutes };
