interface IRoute {
  base: string;
  routes: Record<string, string[]>;
}

const buildItems = (options: { base: string, routes: string[] }) => {
  const { base, routes } = options;
  return routes.map((link) => {
    return {
      text: link,
      link: `${base}/${link}`
    };
  });
};

const buildRoutes = (option: IRoute) => {
  const { base, routes } = option;

  const items = Object.entries(routes).map(([text, routeItems]) => {
    const items = buildItems({ base, routes: routeItems });
    return {
      text,
      items
    } 
  })

  return {
    [base]: items
  };
};

export { buildRoutes };
