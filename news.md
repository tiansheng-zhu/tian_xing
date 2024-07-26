---
layout: default
title: 新闻列表
---

<h1>新闻列表</h1>
<ul>
  {% for news in site.news %}
    <li>
      <a href="{{ news.url }}">{{ news.title }}</a>
      <p>{{ news.date | date: "%Y-%m-%d" }}</p>
    </li>
  {% endfor %}
</ul>
