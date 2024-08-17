---
title: 新闻
nav:
  order: 3
  tooltip: 实验室活动和新闻展示
---

# {% include icon.html icon="fa-solid fa-feather-pointed" %}新闻

本团队积极参与学术交流，多次受邀参加国家气候中心和国家海洋环境预报中心的专家会商，并基于 ENSO 智能集合预测系统提供了长达 19 个月的会商意见，效果显著。开发的北极海冰智能预测模型 IceTFT 已连续两年提交预测结果至国际海冰预测网络（SIPN），预测精度高且时长达 9 个月，优于其他模型，达到国际领先水平，同时，本团队与国内外多家科研机构和大学，如国家气象中心、清华大学、荷兰乌特勒支大学等，建立了广泛的合作，推进了计算机科学与大气科学的交叉学科研究。

{% include sections.html %}

{% include search-box.html %}

{% include tags.html tags=site.tags %}

{% include search-info.html %}

## {% include icon.html icon="fa-solid fa-microscope" %} Conferences

{% include listing.html component="cardings" data="tools" filters="group: conference"%}

{% include sections.html %}

## {% include icon.html icon="fa-solid fa-microscope" %} Reports

{% include listing.html component="cardings" data="tools" filters="group: report"%}

{% include sections.html %}

## {% include icon.html icon="fa-solid fa-microscope" %} Contact 

地址：中国上海曹安公路4800号同济大学软件学院 <br>
邮编：201804 <br>
联系电话：86-21-69589585, 69589332(FAX)

{%
  include button.html
  type="email"
  text="email"
%}

{%
  include button.html
  type="address"
  text="address"
%}

{% capture col1 %}

{%
  include figure.html
  image="images/sse.png"
  caption="同济大学软件学院"
%}

{% endcapture %}

{% capture col2 %}

{%
  include figure.html
  image="images/tongji.png"
  caption="同济大学"
%}

{% endcapture %}

{% include cols.html col1=col1 col2=col2 %}
