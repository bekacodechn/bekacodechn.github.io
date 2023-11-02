import { defineConfig } from "islandjs";
import { openSourceRouter } from '../open-source/router'

export default defineConfig({
  enableSpa: true,
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    lastUpdatedText: "上次更新",
    outlineTitle: '目录',
    nav: [
      {
        text: "Home",
        link: "/",
      },
      {
        text: "源码阅读",
        link: "/open-source/yocto-queue",
      },
    ],
    sidebar: {
      "/": [
        {
          text: "文章列表",
          items: [
            {
              text: "Fresh",
              link: "/article/fresh",
            },
            {
              text: "Astro",
              link: "/article/astro",
            },
          ],
        },
      ],
      ...openSourceRouter
    },
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022-present Xingyuan Yang",
    },
  },
});
