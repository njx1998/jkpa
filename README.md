# jkpa 的博客

基于 [VitePress](https://vitepress.dev) + [vitepress-blogs 主题](https://github.com/chunge16/vitepress-blogs)（MIT）搭建的个人博客，部署在 GitHub Pages。

线上地址：https://njx1998.github.io/jkpa/

## 写新文章

在 `docs/blog/posts/` 对应年份目录下新建 Markdown 文件：

```yaml
---
date: 2026-11-17
title: '文章标题'
category: article
tags:
  - blog
---
```

推送到 main 分支后，GitHub Actions 会自动构建并发布。

## 本地开发

```bash
npm install
npm run dev      # 本地预览 http://localhost:5173
npm run build    # 构建到 docs/.vitepress/dist
```
