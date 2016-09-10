# hexo-theme-overdose

⚠ Caution: you could be overdosed this hexo theme.

The Overdose is minimalistic, simple and beatiful hexo theme, specialized in Korean blogs.

This theme works with hexo v3.2 or later.

## Features

- Responsive design
- Lightweight, not using jQuery or underscore.js, etc.
- Code highlighting by [dracular](https://draculatheme.com/) theme
- Font setting
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
  - Disqus
- Related posts
- Dynamic hide/show menu

## Quick Start

### Installation
First, clone this repository.
```
$ cd your/hexo/directory
$ git clone https://github.com/HyunSeob/hexo-theme-overdose.git themes/overdose
```

The overdose theme is using jade/sass. So install renderers.
```
$ npm install --save hexo-renderer-jade hexo-renderer-bourbon
```

And clone git submodules.
```
$ cd themes/overdose;git submodule init;git submodule update
```

Then, copy the configuration example file.
```
$ cp _config.yml.example _config.yml
```

And then, specify `overdose` theme in your root configuration file.
``` yml
theme: overdose
```


Finally, start the hexo server.
```
$ cd ../..; hexo server
```

### Configuration

See the [_config.yml.example](https://github.com/HyunSeob/hexo-theme-overdose/blob/master/_config.yml.example) file.

### Post Front matter

You can set the post banner image by `photos[0]` property.

``` yml
---
title: Overdose is a hexo theme
date: 2016-09-10 14:30:00
photos:
  - /images/default.jpg
categories:
  - Blog
  - Hexo
tags:
  - Hexo
---
```

## To Do

- Sharing(Facebook, Twitter, Pinterest, Pocket)
- i18n
- LiveRe
- Facebook Comments
- Featured posts
- More code highlighting theme
