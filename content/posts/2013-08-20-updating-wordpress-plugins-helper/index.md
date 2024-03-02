---
title: Updating Wordpress Plugins Helper
author: halkeye
post_id: "485"
date: 2013-08-20
post_name: updating-wordpress-plugins-helper
status: publish
tags:
  - web
datetime: 2013-08-20T16:13:36+0800
permalink: /2013/08/20/updating-wordpress-plugins-helper/index.html
---

Note, I've recently found [WP Cli](https://web.archive.org/web/20130805093732/http://wp-cli.org/) which makes all of this moot because i can now just do "wp plugin upgrade --all" or "wp plugin install blah"

Original post:

I decided a while ago to put pull all the plugin source codes for this wordpress install directly from subversion. This makes it easier when files need manual patching or more likely, a file gets deleted.

* [https://plugins.svn.wordpress.org/](https://plugins.svn.wordpress.org/) is the svn root for all the wordpress plugins.
* [https://themes.svn.wordpress.org/](https://themes.svn.wordpress.org/) is the svn root for all the themes

So I created this little helper script that I can use to do a mass update when I get too out of date.

{% gist "halkeye/6288018" %}
