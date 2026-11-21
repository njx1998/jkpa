import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vitepress';
import { processData } from '@chunge16/vitepress-blogs-theme/config';

const currentYear = new Date().getFullYear();

const SITE_URL = 'https://njx1998.github.io';
const BASE = '/jkpa/';
const SITE_TITLE = 'jkpa 的博客';
const SITE_DESC = '记录技术与生活';
const OG_IMAGE = `${SITE_URL}${BASE}images/avatar.jpg`;

export default defineConfig({
  base: BASE,
  cleanUrls: true,
  title: SITE_TITLE,
  description: SITE_DESC,
  lang: 'zh-CN',
  sitemap: {
    // VitePress 不会自动拼接 base，这里必须带上仓库路径
    hostname: `${SITE_URL}${BASE}`,
    transformItems: (items) => items.filter((item) => !/(^|\/)404$/.test(item.url)),
  },
  head: [
    ['meta', { charset: 'utf-8' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1' }],
    ['meta', { name: 'keywords', content: 'blog, vitepress, 技术, 随笔' }],
    ['meta', { name: 'author', content: 'jkpa' }],
    ['meta', { name: 'theme-color', content: '#646cff' }],
    ['meta', { property: 'og:site_name', content: SITE_TITLE }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],
    ['meta', { property: 'og:image', content: OG_IMAGE }],
    ['meta', { property: 'og:image:alt', content: SITE_TITLE }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    ['meta', { name: 'twitter:image', content: OG_IMAGE }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: `${BASE}favicon.svg` }],
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

    // 为每个页面补充 canonical 与社交分享所需的 meta
    const fm = pageData.frontmatter;
    const path = pageData.relativePath
      .replace(/(^|\/)index\.md$/, '$1')
      .replace(/\.md$/, '');
    const url = `${SITE_URL}${BASE}${path}`;
    const isHome = path === '';
    const title = fm.title || pageData.title || SITE_TITLE;
    const description = fm.description || pageData.description || SITE_DESC;

    if (!fm.head) fm.head = [];
    fm.head.push(
      ['link', { rel: 'canonical', href: url }],
      ['meta', { property: 'og:type', content: isHome ? 'website' : 'article' }],
      ['meta', { property: 'og:title', content: title }],
      ['meta', { property: 'og:description', content: description }],
      ['meta', { property: 'og:url', content: url }],
      ['meta', { name: 'twitter:title', content: title }],
      ['meta', { name: 'twitter:description', content: description }],
    );
  },
});
