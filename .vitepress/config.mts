import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "GC Survival Handbook",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      {
        text: '内容',
        items: [
          { text: '学习生活', link: '/study' },
          { text: '平台', link: '/platform' },
          { text: '学生组织', link: '/organization' },
          { text: '冬季项目', link: '/WP' },
          { text: '常用场所', link: '/location' },
          { text: '其他', link: '/extra' }
        ]
      }
    ],
    siteTitle: false,
    sidebar: [
      {
        text: '内容',
        items: [
          { text: '学习生活', link: '/study' },
          { text: '平台', link: '/platform' },
          { text: '学生组织', link: '/organization' },
          { text: '冬季项目', link: '/WP' },
          { text: '常用场所', link: '/location' },
          { text: '其他', link: '/extra' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Tech-JI/GCSurvivalHandbook' }
    ]
  }
})
