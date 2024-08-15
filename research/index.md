---
title: 研究成果
nav:
  order: 1
  tooltip: 实验室相关成果介绍
---

# {% include icon.html icon="fa-solid fa-microscope" %}研究方向

本研究团队由同济大学软件学院和国家气象中心全球气象室组成，是目前国内 AI+ 气象交叉领域领先研究团队之一。研究团队的研究方向包括采用 AI 技术改善数值模式的预报技巧并提高预报效率和人工智能气象应用的物理一致性和可解释性研究等，覆盖 AI+ 气象的各个方面。具体成果包括天行气象大模型、数值模式-AI 模型融合的 NAO 集合预报系统及基于 CNOP 的台风集合预报系统、台风监测与预报、天气-次季节-季节尺度的 NAO 智能预测、ENSO 智能集合预测系统、北极海冰智能预测、数值模式预报结果的偏差订正与降尺度深度学习模型 、挖掘因果关系的通用深度学习组件 CAU 等。

{% include section.html %}

# {% include icon.html icon="fa-solid fa-microscope" %}主题
<div class="themes-section">
  {% include list.html component="card" data="projects" filters="group: theme" style="small" %}
</div>

{% include section.html %}

# {% include icon.html icon="fa-solid fa-microscope" %}主要研究成果
<div class="card-container">

{% include list.html component="card" data="projects" filters="group: featured" %}

</div>
{% include section.html %}

# {% include icon.html icon="fa-solid fa-microscope" %}全部

{% include search-box.html support_tags=true %}

{% include search-info.html %}

{% include list.html data="citations" component="citation" style="rich" %}
