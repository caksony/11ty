---
title: Hello World
layout: "base.njk"
---

Hello jamstack fams
ayo rek

<!-- {% for post in collections.posts %}
[{{ post.data.title }}]({{ post.url }})
{% endfor %} -->

<ul>
  {% for x in collections.blogs %}
    <li><a href="{{ x.url }}">{{ x.data.title }}</a></li>
  {% endfor %}
</ul>