---
layout: page
---

# 项目

除了写文章，也做一些自己的小东西。

<div class="project-grid">
  <a class="project-card" href="https://github.com/njx1998/ipassist-workbench" target="_blank" rel="noreferrer">
    <div class="project-card__head">
      <span class="project-card__name">知产辅助 · ipassist-workbench</span>
      <span class="project-card__badge">开源</span>
    </div>
    <p class="project-card__desc">
      AI 驱动的专利全流程智能工作台。覆盖辅助撰写、OA 答复、查新检索、交底助手、质检修订五个核心工作台，另有 TRIZ 挖掘、FTO 比对、专利布局等专业工具与十余个小工具。全部功能免费，AI 后端开放，可自行接入任意大模型。
    </p>
    <ul class="project-card__tags">
      <li>Vue 3</li>
      <li>Vite</li>
      <li>Element Plus</li>
      <li>AI 应用</li>
    </ul>
    <span class="project-card__link">查看源码 →</span>
  </a>
</div>

## 本地运行

```bash
git clone https://github.com/njx1998/ipassist-workbench.git
cd ipassist-workbench
npm install
npm run dev
```

启动后打开 `http://localhost:5173`，点击右上角「AI 设置」填写本地 Ollama 或任意 OpenAI 兼容接口的地址、模型名与 API Key 即可。未接入大模型时，各功能会自动降级为内置演示数据，交互流程仍可完整走通。
