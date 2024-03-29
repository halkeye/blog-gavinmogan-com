---
title: Git+push notification with Gitolite and Jenkins
author: halkeye
post_id: "437"
date: 2012-02-17
post_name: gitpush-notification-gitolite-andjenkins
status: publish
tags:
  - general
  - git
  - gitolite
  - jenkins
datetime: 2012-02-17T18:24:06+0800
permalink: /2012/02/17/gitpush-notification-gitolite-andjenkins/index.html
---

Its so easy now to support [jenkins](https://web.archive.org/web/20120217082433/https://jenkins-ci.org/)+git with [gitolite](https://web.archive.org/web/20130730141602/https://github.com/sitaramc/gitolite). No more having git polling per project and slamming the git server with ssh requests.

To install:
Edit .gitolite/hooks/common/post-receive file [^1]

Add:
`
curl -s http:///git/notifyCommit?url=/${GL_REPO}.git
`

For me, my git prefix is: "ssh://git@git.kodekoan.com"

Its that simple.

[^1]: .gitolite/hooks/common/post-receive should be symlinked in every repo you have. I think you needed to set it up before you created a repo though)
