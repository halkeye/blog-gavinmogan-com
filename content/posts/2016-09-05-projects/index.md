---
title: Projects
author: halkeye
post_id: "788"
date: 2016-09-05
post_name: projects
status: publish
tags:
  - internet
datetime: 2016-09-05T16:15:29+0800
permalink: /2016/09/05/projects/index.html
---

I really need to remember to post here more often. What have I been up lately? A bunch of traveling for work.

*   Microsoft Visual Studio Parter summit
*   Atlassian Connect Week
*   Jenkins World 2016 (Upcoming)

And the one event I went to as me, not really representing sauce labs

*   Cascadia 2016

I had a big blast at pretty much all of them. Most of them got me into the tinkering mood again.

Because of Cascadia, I learned about [greenkeeper](https://web.archive.org/web/20161224144718/https://greenkeeper.io) and have since hooked it up to a bunch of my node projects. At times the influx of pull requests to update dependancies is kinda annoying, but it forces me to keep my tests up and running. So far i've been pretty happy with it.

At connect week, I learned about this codegiest competition/hackathon they were hosting. I already had 2 entries due to work on some projects at sauce labs. But I really wanted to do something fun and silly. So I revisited the dance party plugin [Jlipps](https://web.archive.org/web/20161222074603/http://jlipps.com/) created for our internal hubot. It gave me an excuse to use a bunch of the hipchat apis that I wouldn't normally use, and was able to create [Hipchat Dance Party](https://marketplace.atlassian.com/plugins/hipchat-dance-party-service/cloud/overview). Totally available for free in the market place.

Next up would be [hubot-jenkins-notifier](https://web.archive.org/web/20180611010024/https://github.com/halkeye/hubot-jenkins-notifier). I'll admit, I didn't fully understand the bug that the one user opened, but they were willing to create a pull request. He admittedly didn't have a lot of time to work on it, but was very receptive to feedback. After over a month of slow back and forth, I decided I was happy enough with it, but I wanted better test coverage of the project as a whole. So chatted with him, came up with a better config schema, merged everything, and started the rewrite. The code is now super cleaned up, nice objects that can easily be tested. No more horrible coffeescript. He's happy with the result and so am I. As soon as I get a few more real life test users, i'll be cutting a new release.

[codacy-maven-plugin](https://web.archive.org/web/20180612221157/https://github.com/halkeye/codacy-maven-plugin) - Due to some of my projects being solo at Sauce Labs, I have had my eye out for various open source tooling to keep an eye on my code for me. I tried out [gemnasium](https://gemnasium.com/dashboard) for a while, but that wouldn't support java. [Greenkeeper](https://web.archive.org/web/20161224144718/https://greenkeeper.io) as mentioned above is great, but again, not java. [Codecov](https://web.archive.org/web/20160818142140/https://codecov.io/) has been great for reporting coverage, and I've used it very liberallly, Then I stumbled onto codacy. [Codacy](https://web.archive.org/web/20161126013607/https://www.codacy.com/) is multiple languages and builds you a report on code quality. In java, it uses findbugs, for javascript, it uses eslint. It also has a whole slew of built in checks and functionality. You can totally check out one of my [projects](https://www.codacy.com/app/halkeye/codacy-maven-plugin/dashboard) to see some of its output. My only real complaint was that unlike codecov, which was just pip install codecov, for java code coverage, you needed to install another java package manager, then install a script, along the way there was https errors, etc. So decided it was worth it to learn a bit more about how maven goals are created, and just more about maven in general. [Codacy-maven-plugin](https://web.archive.org/web/20180612221157/https://github.com/halkeye/codacy-maven-plugin) was created. This means with maven which is already installed and used to compile java projects, could also be used to upload coverage reports.

And lastly, one of my old standbys, [Infinicatr](https://infinicatr.surge.sh/), my old mobile web project that scrolls through a seemly unlimited number of cat pictures. After cascadia I was re-invigorated to learn more about service works. Its usually between salty stories and infinicatr to play around with "new" web tech. I really wanted to see if I could make infinicatr work offline. It turned out to be really easy. Using a service worker, I was able to returned cached values if flickr was unable to respond for any reason, and live network requests otherwise. This meant that once the first batch of 10 images were fetched, it would always appear to be online and working. I'm pretty happy with this result. [Source](https://web.archive.org/web/20180611021426/https://github.com/halkeye/infinicatr)

My next plan of course is to apply it to the old [Salty Stories](https://web.archive.org/web/20170708184612/https://books.saltystories.ca/) book engine so it can be properly supported offline, instead of the semi hacked version i'm depending on now.

And thats me for the last couple of months.
