---
---

# 这是同济大学“人工智能+大气海洋”实验室的首页



{% include section.html %}

## 实验室介绍

{% capture text %}

这里是同济大学“人工智能+大气海洋”实验室的相关成果介绍。

{%
  include button.html
  link="research"
  text="查看实验室已有成果"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{% endcapture %}

{%
  include feature.html
  image="images/photo.jpg"
  link="research"
  title="相关成果"
  text=text
%}

{% capture text %}

这里是同济大学“人工智能+大气海洋”实验室的研究团队介绍。

{%
  include button.html
  link="team"
  text="查看研究团队介绍"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{% endcapture %}

{%
  include feature.html
  image="images/photo.jpg"
  link="team"
  title="研究团队"
  flip=true
  style="bare"
  text=text
%}

{% capture text %}

这里是同济大学“人工智能+大气海洋”实验室的相关新闻。

{%
  include button.html
  link="blog"
  text="查看实验室新闻"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{% endcapture %}

{%
  include feature.html
  image="images/photo.jpg"
  link="blog"
  title="新闻"
  text=text
%}
