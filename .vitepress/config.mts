import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SJTU Survival Handbook",
  description: "Presented by GC",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Content',
        items: [
          { text: 'Life', link: '/markdown-examples' },
          { text: 'Study', link: '/api-examples' }
        ]
      }
    ],
    siteTitle: false,
    sidebar: [
      {
        text: 'Content',
        items: [
          { text: 'Life', link: '/markdown-examples' },
          { text: 'Study', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
