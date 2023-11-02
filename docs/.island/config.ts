import { defineConfig } from "islandjs";

export default defineConfig({
  enableSpa: true,
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    nav: [
      {
        text: "Home",
        link: "/",
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
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Xingyuan Yang'
    }
  }
});
