import { buildRoutes } from "../utils/route";

const routes = {
  工具类: [
    "yocto-queue",
    "p-limit",
    "p-locate",
    "delay",
    "p-settle",
    "p-defer",
    "p-lazy",
  ],
  webpack: [
    'minipack',
    'mini-webpack',
    'tapable'
  ]
};

const openSourceRouter = buildRoutes({
  base: "/open-source",
  routes
});

export { openSourceRouter };
