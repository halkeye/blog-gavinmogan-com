---
title: Nginx + Cloudflare SSL
author: halkeye
post_id: "582"
date: 2015-03-31
post_name: nginx-cloudflare-ssl
status: publish
tags:
  - linux
datetime: 2015-03-31T10:44:32+0800
permalink: /2015/03/31/nginx-cloudflare-ssl/index.html
---

Now that cloudflare will support ssl on every domain you host with them, I wanted to get some of my domains setup to use it.

I didn't really get around to setting up the ssl cert on my side, but since cloudflare supports it, I wanted to redirect people to use it (as a convince, not a security factory) so setup this basic nginx config.

<github-gist id="halkeye/0dea284e6218fa49614b"></github-gist>

It blindly trusts the header, so it's possible to hit these domains without ssl, but I don't want to prevent it, just let those that want it in.

Figured it might be useful for others as well
