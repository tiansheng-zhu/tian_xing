title: Blog
nav:
  order: 4
  tooltip: Musings and miscellany
---

# {% include icon.html icon="fa-solid fa-feather-pointed" %}News



{% include section.html %}

{% include search-box.html %}

{% include tags.html tags=site.tags %}

{% include search-info.html %}

{% include news.html data="posts" component="post-excerpt" %}

{% include foot.html %}
