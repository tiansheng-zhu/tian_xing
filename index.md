---
---

欢迎来到同济大学“人工智能+大气海洋”实验室！

本实验室又名“同济大学AIAO-Lab”，是目前国内 AI+气象交叉领域领先实验室之一。实验室研究方向包括采用 AI 技术改善数值模式的预报技巧并提高预报效率和人工智能气象应用的物理一致性和可解释性研究等，覆盖 AI+气象的各个方面，当前主持国家自然科学基金重点联合基金项目一项、国家自然科学基金面上项目一项、国家重点研发计划课题两项、以及上海市科委重点课题一项，并发表多项论文专利。

{%
  include grid.html
  style="square"

  image1="images/research_topics/topic-monitoring.jpeg"
  link1="https://quantmarineecolab.github.io/research/monitoring"
  tooltip1="Ecological monitoring"

  image2="images/research_topics/topic-seafood.jpeg"
  link2="https://quantmarineecolab.github.io/research/seafood"
  tooltip2="Sustainable seafood"

  image3="images/research_topics/topic-extreme.jpeg"
  link3="https://quantmarineecolab.github.io/publications/"
  tooltip3="Extreme events"

  image4="images/research_topics/topic-ses.jpeg"
  link4="https://quantmarineecolab.github.io/research/socioeco"
  tooltip4="Socio-ecological dynamics"
  
  image5="images/research_topics/topic-spatial.jpeg"
  link5="https://quantmarineecolab.github.io/publications/"
  tooltip5="Spatial ecology"
  
  image6="images/research_topics/topic-bioed.jpeg"
  link6="https://quantmarineecolab.github.io/research/bioed"
  tooltip6="Biology education research"
%}

{% include section.html size="full" %}

{% include banner.html image="images/banner.jpg" %}

{% include section.html %}

## 实验室总览

{% capture text %}

实验室研究方向覆盖 AI+气象的各个方面。具体成果包括天行气象大模型、数值模式-AI 模型融合的 NAO 集合预报系统及基于 CNOP 的台风集合预报系统等。

{%
  include button.html
  link="research"
  text="查看实验室已有成果"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="button"
%}

{% endcapture %}

{%
  include feature.html
  image="images/ResearchPicture.png"
  link="research"
  title="相关成果"
  text=text
%}

{% capture text %}

实验室研究团队主要由穆斌教授、袁时金教授及他们指导下的多名博士生和硕士生组成。团队在该研究方向已发表学术论文120余篇，获授国家发明专利11项。

{%
  include button.html
  link="team"
  text="查看研究团队介绍"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="button"
%}

{% endcapture %}

{%
  include feature.html
  image="images/TeamPicture.png"
  link="team"
  title="研究团队"
  flip=true
  style="bare"
  text=text
%}

{% capture text %}

关于同济大学“人工智能+大气海洋”实验室的最新新闻。

{%
  include button.html
  link="blog"
  text="查看实验室最新新闻"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="button"
%}

{% endcapture %}

{%
  include feature.html
  image="images/NewsPicture.png"
  link="blog"
  title="新闻"
  text=text
%}
