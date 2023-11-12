import { defineConfig } from "islandjs";
import { generateAllRoutes } from '../../utils/route'
import { BLOG_IGNORE_DIR } from '../../utils/constants'

const { nav, sidebar } = generateAllRoutes(BLOG_IGNORE_DIR)

export default defineConfig({
  enableSpa: true,
  title: "beka的博客",
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    lastUpdatedText: "上次更新",
    outlineTitle: "目录",
    nav,
    sidebar,
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022-present Beka",
    },
  },
});
