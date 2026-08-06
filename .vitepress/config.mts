import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  cleanUrls: true,
  langMenuLabel: "Languages",

  locales: {
    root: {
      label: "中文",
      lang: "zh-CN",
      title: "GC Survival Handbook",
      description: "GC 生存手册 — UM-SJTU Joint Institute 留学生存指南",
      themeConfig: {
        nav: [
          { text: "主页", link: "/" },
          {
            text: "内容",
            items: [
              { text: "学习生活", link: "/study" },
              { text: "平台", link: "/platform" },
              { text: "学生组织", link: "/organization" },
              { text: "冬季项目", link: "/WP" },
              { text: "常用场所", link: "/location" },
              { text: "Workshops", link: "/wksp" },
              { text: "其他", link: "/extra" },
            ],
          },
        ],
        sidebar: [
          {
            text: "内容",
            items: [
              { text: "学习生活", link: "/study" },
              { text: "平台", link: "/platform" },
              { text: "学生组织", link: "/organization" },
              { text: "冬季项目", link: "/WP" },
              { text: "常用场所", link: "/location" },
              { text: "Workshops", link: "/wksp" },
              { text: "其他", link: "/extra" },
            ],
          },
        ],
        search: {
          provider: "local",
          options: {
            translations: {
              button: { buttonText: "搜索文档" },
              modal: {
                noResultsText: "无法找到相关结果",
                resetButtonTitle: "清除搜索条件",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                },
              },
            },
          },
        },
        outline: {
          label: "页面目录",
          level: "deep",
        },
      },
    },

    en: {
      label: "English",
      lang: "en-US",
      title: "GC Survival Handbook",
      description: "GC Survival Handbook — A Student Guide for UM-SJTU Joint Institute",
      themeConfig: {
        nav: [
          { text: "Home", link: "/en/" },
          {
            text: "Content",
            items: [
              { text: "Academic Life", link: "/en/study" },
              { text: "Platforms", link: "/en/platform" },
              { text: "Organizations", link: "/en/organization" },
              { text: "Winter Program", link: "/en/WP" },
              { text: "Locations", link: "/en/location" },
              { text: "Workshops", link: "/en/wksp" },
              { text: "More", link: "/en/extra" },
            ],
          },
        ],
        sidebar: [
          {
            text: "Content",
            items: [
              { text: "Academic Life", link: "/en/study" },
              { text: "Platforms", link: "/en/platform" },
              { text: "Organizations", link: "/en/organization" },
              { text: "Winter Program", link: "/en/WP" },
              { text: "Locations", link: "/en/location" },
              { text: "Workshops", link: "/en/wksp" },
              { text: "More", link: "/en/extra" },
            ],
          },
        ],
        search: {
          provider: "local",
          options: {
            translations: {
              button: { buttonText: "Search" },
              modal: {
                noResultsText: "No results for this query",
                resetButtonTitle: "Clear search",
                footer: {
                  selectText: "Select",
                  navigateText: "Navigate",
                },
              },
            },
          },
        },
        outline: {
          label: "On this page",
          level: "deep",
        },
      },
    },
  },

  themeConfig: {
    siteTitle: false,
    search: {
      provider: "local",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/Tech-JI/GCSurvivalHandbook" },
    ],
  },
});
