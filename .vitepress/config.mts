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
          { text: 'GC生存手册', link: '/survivalGC' },
          { text: '学生组织', link: '/organization' },
          { text: 'WP', link: '/WP' },
          { text: '常用场所', link: '/location' }
        ]
      }
    ],
    siteTitle: false,
    sidebar: [
      {
        text: 'Content',
        items: [
          { text: 'GC生存手册', link: '/survivalGC' },
          { text: '学生组织', link: '/organization' },
          { text: 'WP', link: '/WP' },
          { text: '常用场所', link: '/location' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Tech-JI/SJTUSurvivalHandbook' }
    ]
  }
})
