---
date: 2026-11-17
title: 'Hello World：博客开张了'
category: article
commentId: post-2026-hello-world
tags:
  - blog
  - vitepress
---

博客正式开张了！🎉

这个博客使用 **VitePress + vitepress-blogs 主题** 搭建，源码托管在 [GitHub](https://github.com/njx1998/jkpa)，通过 GitHub Pages 免费部署，每次推送自动构建发布。

## 以后会写什么

- 技术笔记
- 学习心得
- 生活随想

## 如何写新文章

在 `docs/blog/posts/` 对应年份目录下新建一个 Markdown 文件，开头加上 front matter：

```yaml
---
date: 2026-11-17
title: '文章标题'
category: article
tags:
  - blog
---
```

然后用 Markdown 写正文，推送到 GitHub 就会自动发布。

> category 取值：`article`（随笔）、`tutorial`（教程）、`document`（文档）。
