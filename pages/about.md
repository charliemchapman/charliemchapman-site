---
layout: default
title: About
page_id: about
nav_key: about
permalink: /about/
image: /assets/images/charlie-profile-2026.jpg
---
{% assign profile = site.data.profile %}
{% assign guest_podcasts = site.podcasts | where_exp: "item", "item.appearance_type == 'guest'" | sort: "date" | reverse %}
{% assign talk_posts = site.posts | where: "content_type", "talk" %}
{% assign talks = site.talks | concat: talk_posts | sort: "date" | reverse %}

<section class="content-shell about-page">
  <div class="about-hero">
    <div class="about-hero__portrait">
      <img src="{{ profile.avatar }}" alt="{{ profile.avatar_alt }}">
    </div>

    <div class="about-hero__copy">
      <span class="eyebrow">{{ profile.about_eyebrow }}</span>
      <h1>{{ profile.about_title | replace: "curious", "<em>curious</em>" }}</h1>
    </div>
  </div>

  <div class="about-grid">
    <div class="about-copy">
      <p class="about-copy__lede">{{ profile.about_intro }}</p>
      {% for paragraph in profile.about_paragraphs %}
        <p class="about-copy__paragraph">{{ paragraph }}</p>
      {% endfor %}
    </div>

    <aside class="about-panel">
      <p class="about-panel__title">On the web</p>
      {% include social-links.html links=profile.social_links variant="list" %}
    </aside>
  </div>

  {% if guest_podcasts.size > 0 %}
    <section class="section">
      <div class="section__header">
        <h2 class="section-heading">Recent Appearances</h2>
        <span class="section__eyebrow">Podcast guest</span>
      </div>

      <div class="appearance-rail">
        {% for appearance in guest_podcasts limit: 8 %}
          {% assign appearance_image = appearance.image %}
          {% if appearance_image %}
            {% assign appearance_first = appearance_image | slice: 0, 1 %}
            {% unless appearance_first == "/" or appearance_image contains "://" %}
              {% assign appearance_image = "/" | append: appearance_image %}
            {% endunless %}
          {% endif %}
          {% if appearance_image == nil or appearance_image == "" %}
            {% if appearance.youtube_id %}
              {% assign appearance_image = "https://img.youtube.com/vi/" | append: appearance.youtube_id | append: "/hqdefault.jpg" %}
            {% endif %}
          {% endif %}

          <a class="appearance-card" href="{{ appearance.url }}">
            <div class="appearance-card__art">
              {% if appearance_image %}
                <img src="{{ appearance_image }}" alt="">
              {% else %}
                <span class="material-symbols-outlined" aria-hidden="true">mic</span>
              {% endif %}
            </div>
            <h3 class="appearance-card__title">{{ appearance.podcast_name }}</h3>
            <p class="appearance-card__meta">{{ appearance.title }}</p>
          </a>
        {% endfor %}
      </div>
    </section>
  {% endif %}

  {% if talks.size > 0 %}
    <section class="section">
      <div class="section__header">
        <h2 class="section-heading">Speaking &amp; Workshops</h2>
      </div>

      <div class="talk-list">
        {% for talk in talks %}
          {% assign talk_target = talk.external_url | default: talk.url %}
          <a class="talk-row" href="{{ talk_target }}"{% if talk.external_url %} target="_blank" rel="noreferrer noopener"{% endif %}>
            <div class="talk-row__main">
              <div class="talk-row__icon">
                <span class="material-symbols-outlined" aria-hidden="true">campaign</span>
              </div>
              <div class="talk-row__copy">
                <h3 class="talk-row__title">{{ talk.title }}</h3>
                <p class="talk-row__meta">{{ talk.event_name | default: "Talk notes" }}</p>
              </div>
            </div>

            <span class="talk-row__date">{{ talk.date | date: "%b %Y" }}</span>
          </a>
        {% endfor %}
      </div>
    </section>
  {% endif %}

  <section class="setup-panel">
    <h2>{{ profile.setup_heading }}</h2>

    <div class="setup-grid">
      {% for group in profile.setup_groups %}
        <div class="setup-group">
          <h3 class="setup-group__title">{{ group.title }}</h3>
          <ul>
            {% for item in group.items %}
              <li>{{ item }}</li>
            {% endfor %}
          </ul>
        </div>
      {% endfor %}
    </div>
  </section>
</section>
