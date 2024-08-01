---
title: 新闻
nav:
  order: 3
  tooltip: 实验室活动和新闻展示
---

# {% include icon.html icon="fa-solid fa-feather-pointed" %}News



{% include section.html %}

{% include search-box.html %}

{% include tags.html tags=site.tags %}

{% include search-info.html %}

{% include news.html data="posts" component="post-excerpt" %}

{% include foot.html %}
