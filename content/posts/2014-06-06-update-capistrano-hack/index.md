---
title: Update to the capistrano hack
author: halkeye
post_id: "548"
date: 2014-06-06
post_name: update-capistrano-hack
status: publish
tags:
  - linux
datetime: 2014-06-06T22:07:36+0800
permalink: /2014/06/06/update-capistrano-hack/index.html
---

So a while ago I had posted [a hack](/2014/01/24/capistrano3-deploying-internal-git-server/) that lets capistrano deploy code from a git server from behind a firewall.

So in a recent update to SSHKit they changed how they do ssh connections to use Threading and Pools. This broke my hack.

So long story short, I've updated my hack. This one uses net-ssh directly to make a forward.

Disclaimer: This works for us at $work, but I can't claim it works anywhere else.

<github-gist id='halkeye/f061872eb4b47dc0928e'></github-gist>
