# hexo-theme-overdose
[![GitHub release](https://img.shields.io/github/release/hyunseob/hexo-theme-overdose.svg?maxAge=2592000?style=plastic)](https://github.com/HyunSeob/hexo-theme-overdose)
[![license](https://img.shields.io/github/license/hyunseob/hexo-theme-overdose.svg?maxAge=2592000?style=plastic)](https://github.com/HyunSeob/hexo-theme-overdose)

[Demo](http://hyunseob.github.io)

⚠ Caution: you could be overdosed with this hexo theme.

![Mock-up image](/source/images/mock-up.png)

The Overdose is minimalistic, simple and beautiful hexo theme, specialized in Korean blogs.

## Features

- Responsive design
- Lightweight, not using jQuery or underscore.js, etc.
- Various code highlighting theme (Thanks to @SungYeolWoo), Set [Dracula](https://draculatheme.com/) theme by default
- [Font setting](#font-setting)
  - noto-sans-kr
  - spoqa-han-sans-kr
  - spoqa-han-sans-jp
- SEO friendly
  - canonical link
  - [Schema.org](https://schema.org) markup
- With other services
  - Google Analytics
  - Google Site Verification
  - Naver Site Verification
  - [Disqus](#disqus)
- Related posts
- Dynamic hide/show menu (Unstable)
- Sharing(Facebook, Twitter, Pinterest, Pocket)

## Quick Start

### Installation
First, clone this repository.
```
$ cd your/hexo/directory
$ git clone https://github.com/HyunSeob/hexo-theme-overdose.git themes/overdose
```

This theme is using pug. So you have to install the renderer.
```
$ npm install --save hexo-renderer-jade # Don't use hexo-renderer-pug. It doesn't work.
```

Then, copy the configuration example file.
```
$ cp _config.yml.example _config.yml
```

And then, specify `overdose` theme in your root configuration file.

``` yml
theme: overdose
```

Finally, start the hexo server and enjoy.
```
$ hexo server
```

### Configuration

See the [_config.yml.example](https://github.com/HyunSeob/hexo-theme-overdose/blob/master/_config.yml.example) file.

### Disqus

``` yml
# _config.yml of base, not theme config
# Please put your shortname of disqus here.
disqus_shortname:
```
### LiveRe

LiveRe is social media comment platcform suitable for Korean SNS, like disqus. <br>
see [LiveRe](https://livere.com/). <br>
You can get your uid from livere setting code as below.

``` html
<div id="lv-container" data-id="city" data-uid="your uid code">
```
how to set

``` yml
# Please put your uid of live here.
liveRe:
  uid:
```

### Post Front matter

You can set the post banner image by `banner` property.

``` yml
---
title: Overdose is a hexo theme
date: 2016-09-10 14:30:00
banner:
  url: /images/default.jpg
  width: 1280
  height: 720
categories:
  - Blog
  - Hexo
tags:
  - Hexo
---
```

## Browser compatibility

- [x] Chrome
- [x] Edge
- [x] IE 10+
- [x] Firefox
- [x] Safari
- [x] Android Browser
- [x] iOS Safari

## To Do

- i18n
- Facebook Comments
- Featured posts
