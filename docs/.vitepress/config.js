import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vitepress';
import { processData } from '@chunge16/vitepress-blogs-theme/config';

const currentYear = new Date().getFullYear();

export default defineConfig({
  base: '/jkpa/',
  cleanUrls: true,
  title: 'jkpa 的博客',
  description: '记录技术与生活',
  lang: 'zh-CN',
  head: [
    ['meta', { name: 'keywords', content: 'blog, vitepress, 技术, 随笔' }],
    ['meta', { name: 'author', content: 'jkpa' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/jkpa/favicon.svg' }],
  ],
  themeConfig: {
    logo: '/favicon.svg',
    lastUpdated: true,
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索文章', buttonAriaLabel: '搜索文章' },
        },
      },
    },
    nav: [
      { text: 'Home', link: '/' },
      {
        text: '博客',
        activeMatch: '/blog/',
        items: [
          { text: '博客首页', link: '/blog/', activeMatch: '/blog/$' },
          { text: '标签', link: '/blog/tags', activeMatch: '/blog/tags' },
          { text: '档案', link: '/blog/archives', activeMatch: '/blog/archives' },
        ],
      },
    ],
    sidebar: [],
    blog: {
      title: 'Blog',
      description: '所有文章均由 jkpa 认真撰写！',
      defaultAuthor: 'jkpa',
      categoryIcons: {
        article: 'i-[carbon--notebook]',
        tutorial: 'i-[carbon--book]',
        document: 'i-[carbon--document]',
      },
      tagIcons: {
        blog: 'i-[carbon--blog]',
        vitepress: 'i-[carbon--development]',
        ai: 'i-[carbon--machine-learning-model]',
        git: 'i-[logos--git-icon]',
        javascript: 'i-[logos--javascript]',
      },
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/njx1998' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: `Copyright © 2026-${currentYear} jkpa`,
    },
    outline: {
      level: 'deep',
      label: '目录',
    },
  },
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      exclude: ['@chunge16/vitepress-blogs-theme'],
    },
    ssr: {
      noExternal: ['@chunge16/vitepress-blogs-theme'],
    },
  },
  async transformPageData(pageData, ctx) {
    await processData(pageData, ctx);
  },
});
