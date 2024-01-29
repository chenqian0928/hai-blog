import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'zh-CN',
  title: '海的博客',
  outDir: '../dist',
  lastUpdated: true,
  markdown: {
    lineNumbers: true,
    container: {
        detailsLabel: '回答'
      }
  },
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/logo.jpg',
      },
    ],
  ],
  themeConfig: {
    // 基础配置
    logo: '/logo.jpg',
    siteTitle: '海的博客',
    sidebarMenuLabel: '目录',
    lastUpdatedText: '上次更新',
    darkModeSwitchLabel: '主题',
    returnToTopLabel: '返回顶部',
    outline: {
      label: '本页目录',
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
    // 导航
    nav: [
      { text: '首页', link: '/' },
      { text: '导航', link: '/nav/index' },
      { text: '知识碎片', link: '/notes/index' },
      {
        text: '推荐工具',
        link: '/tools/index',
      },
    ],
    // 侧边栏
    sidebar: {
      '/nav/': [
        {
          text: '导航',
          items: [],
        },
      ],
      '/notes/': [
        {
          text: '知识碎片',
          items: [],
        },
      ],
      '/tools/': [
        {
          text: '推荐工具',
          items: [],
        },
      ],
    },
    // 页脚
    footer: {
      message: '海的个人博客',
      copyright: 'Copyright © 2023-present Hai',
    },
    // 社交链接
    socialLinks: [{ icon: 'github', link: 'https://github.com/chenqian0928' }],
  },
});
