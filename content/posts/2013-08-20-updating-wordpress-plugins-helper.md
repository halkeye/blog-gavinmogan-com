---
title: "Updating Wordpress Plugins Helper"
author: "halkeye"
post_id: "485"
date: "2013/08/20 16:13:36"
post_name: "updating-wordpress-plugins-helper"
status: "publish"
category: "Web"
tags: []
cover: "/assets/cover-image.jpg"
---

Note, I've recently found [WP Cli](https://wp-cli.org/) which makes all of this moot because i can now just do "wp plugin upgrade --all" or "wp plugin install blah"

Original post:

I decided a while ago to put pull all the plugin source codes for this wordpress install directly from subversion. This makes it easier when files need manual patching or more likely, a file gets deleted.

*   <https://plugins.svn.wordpress.org/> is the svn root for all the wordpress plugins.
*   <https://themes.svn.wordpress.org/> is the svn root for all the themes

So I created this little helper script that I can use to do a mass update when I get too out of date.

<github-gist id="halkeye/6288018"></github-gist>
