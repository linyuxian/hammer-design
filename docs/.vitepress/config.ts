import { defineConfig } from "vitepress";
import { demoBlockPlugin } from "vitepress-theme-demoblock";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Hammer Design",
  description: "This is Hammer Design",
  lastUpdated: true, // 最近更新时间,最后一条内容的更新时间会显示在页面右下角。要启用它，请将lastUpdated选项添加到您的配置中。
  themeConfig: {
    lastUpdatedText: "最后更新时间",
    footer: {
      message: "生命不息 跑路不止",
      copyright: "Copyright © 2023-present linyuxian",
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    editLink: {
      pattern: "https://github.com/vuejs/vitepress/edit/main/docs/:path",
      text: "在GitHub上编辑此页面",
    },
    sidebar: {
      "/": [
        { text: "快速开始", link: "/" },
        {
          text: "通用",
          items: [{ text: "Button 按钮", link: "/components/button/" }],
        },
        { text: "导航" },
        { text: "反馈" },
        { text: "数据录入" },
        { text: "数据展示" },
        { text: "布局" },
      ],
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
  markdown: {
    config: (md) => {
      md.use(demoBlockPlugin);
    },
  },
});
