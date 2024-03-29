---
title: direnv is one of the coolest tools ever
author: halkeye
post_id: "542"
date: 2014-04-12
post_name: direnv-coolest-tools
status: publish
tags:
  - linux
  - coding
  - direnv
  - linux
  - tools i use
datetime: 2014-04-12T18:47:57+0800
permalink: /2014/04/12/direnv-coolest-tools/index.html
---

I've always loved the idea of self contained environments but coming from doing perl and c/c++ a long time ago, I've never been able to really pull it off. It wasn't until I encountered virtualenv for python that I finally got this working properly. I had encountered rvm's gemsets before that, but they always seemed finicky at best.

I started to have complex vim configs, and bash rcs that tried to look at what directory you were in / file you were editing, and change configs accordingly. It never worked well. [EditorConfig](https://web.archive.org/web/20140517063108/http://editorconfig.org/) and [vim-editorconfig](https://web.archive.org/web/20141009221734/https://github.com/editorconfig/editorconfig-vim) helped a lot with that. No longer had to have really confusing vim configs. I could specify per project editor settings. I can't wait till its more uniformly adopted.

That left bash configs though. Enter [DirEnv](https://web.archive.org/web/20140407233802/http://direnv.net/). Its solved the second half for me. Makes all those configurations per project. A simple `direnv edit .` inside your project directory will open up $EDITOR. This lets you specify all kinds of things about that project. Anything you can do in bash you can do here. It works best with env variables but can do other things. I love the layout functions though.

```
layout node
```

adds node_modules/.bin to your path

```
layout python
```

Creates a new virtualenv and adds it to your path.
..etc

It makes it easy to work with heroku based apps as well. They do all your configurations as environment variables, its pretty easy to add a bunch of export statements to your direnv and emulate the same thing.

I've just [submitted a simple patch](https://github.com/zimbatm/direnv/pull/110) to add `layout perl`. This makes [local::lib](https://web.archive.org/web/20140407033545/http://search.cpan.org/dist/local-lib/lib/local/lib.pm) so much easier to use per project.

I have to give [Philip Nelson](https://pnelson.ca/) credit for letting me know about this toolset. Its changed how I develop applications. He and I disagree on exactly how to use it, but no matter how you do, it helps out.
