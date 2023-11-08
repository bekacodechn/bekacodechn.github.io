import { defineConfig } from "islandjs";
import { openSourceSidebar, openSourceNav } from "../open-source/router";
import { webpackSidebar, webpackNav } from "../webpack/router";
import { promiseSidebar, promiseNav } from "../promise/router";
import { patternSidebar, patternNav } from "../design-pattern/router";
import { cssSidebar, cssNav } from "../css/router";
import { chromeSidebar, chromeNav } from "../chrome/router";
import vitePluginFixUrl from './plugin/vite-plugin-fix-url.js'

export default defineConfig({
  enableSpa: true,
  title: "beka的博客",
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    lastUpdatedText: "上次更新",
    outlineTitle: "目录",
    nav: [webpackNav, openSourceNav, patternNav, promiseNav, cssNav, chromeNav],
    sidebar: {
      ...openSourceSidebar,
      ...webpackSidebar,
      ...patternSidebar,
      ...promiseSidebar,
      ...cssSidebar,
      ...chromeSidebar,
    },
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022-present Xingyuan Yang",
    },
  },
});
