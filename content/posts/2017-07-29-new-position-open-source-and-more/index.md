---
title: New Position. Open source and more!
author: halkeye
post_id: "1068"
date: 2017-07-29
post_name: new-position-open-source-and-more
status: publish
tags:
  - work
  - atlassian connect
  - bamboohr
  - jira
  - open source
  - sauce labs
datetime: 2017-07-29T20:16:19+0800
permalink: /2017/07/29/new-position-open-source-and-more/index.html
---

I recently switched teams at Sauce Labs. I used to be the sole person on the Integrations team, and after more than a year feeling pretty isolated, my mental state was slipping pretty hard, so when an opportunity came up to switch departments, I took it.

So now I'm on the IT team, which as a developer is kinda confusing, but its giving me the oppertunity to do some customer facing work, and a lot of internal facing work. I always love working on items that I get to actually see improving peoples work life.

So starting day 0, I had some work to finish off, but I wanted to get to know the team better, and whatnot, so I kept an eye on the internal tickets. Quickly I started to notice that a lot of tickets had to have the initial question of "Whose your manager." so one day during our team's huddle, I made the offhand comment that I had enough experience making JIRA plugins, I could probably take the HR data (which I had already mucked with in past projects) and add a little widget to JIRA providing basic info. I felt so exposed, I didn't want to feel like I was intruding or taking over or anything, but no, as expected the team loved the idea.

Over the next few weeks between whatever else came up, I started working on this little project. I had seen on the [atlassian developers community form](https://web.archive.org/web/20170927155115/https://community.developer.atlassian.com/) that someone had made a flask-ac integration. This was perfect. This would give me an excuse to get more familiar with python (which is the main language at Sauce Labs) and even poke around with how packages were made. This module turned out to be pretty hipchat focused, but gave me a bunch of ideas.

I decided I still wanted to learn about packaging and releasing, but also wanted to get something out. So I started to hack the existing system a bit and made an integration. First version was pretty crude. Lots of hard coded stuff, but no credentials. That was my only real goal was to make sure credentials and sensitive items were never hard coded.

First release. Team was estatic. Showed name, phone number, office location and manager. This made thier lives easier because they knew managers and who was local and who wasn't without the ackward question.

But this wasn't enough. I really wanted to learn how to package python packages. So I started reading up on how flask plugins were created. Turns out pretty simple actually. So started to refactor a bunch of things. Then I got another jira based project at work. Okay this is perfect. Now I have 2 projects using the shared functionality.

Short story even shorter, I managed to get [Flask-AtlassianConnect](https://web.archive.org/web/20201022080400/https://halkeye.github.io/flask_atlassian_connect/) released. I released it under my own name because I spent mostly after hours polishing it up. Plus I didn't really think anyone else would want to maintain it. I'm still iffy on that bit, but nobody seemed to mind. So yay! I have a published pip package.

I wasn't done there. I wanted to get the original JIRA plugin all cleaned up and open sourced. We can't be the only people out there that use BambooHR and also JIRA. So again, in between tasks I cleaned up the implementation. Now it had a full config screen. Let you pick what to display. Let you choose with projects it would be integrated with. Etc. Now it was ready to go. Plus now I knew how to write tests.

So I'm proud to [announce](https://web.archive.org/web/20200804025925/https://saucelabs.com/blog/jira-cloud-and-bamboohr-integration) (a little late here though) that the BambooHR + Jira Cloud plugin I wrote is open source. I had so much fun doing it. I hope this new position will lead to many more projects that we can open source for others to use as needed.

https://saucelabs.com/blog/jira-cloud-and-bamboohr-integration

