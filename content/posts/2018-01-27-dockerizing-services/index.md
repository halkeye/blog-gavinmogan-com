---
title: Dockerizing Services
author: halkeye
post_id: "1163"
date: 2018-01-27
post_name: dockerizing-services
status: publish
tags:
  - general
  - docker
  - kubernetes
datetime: 2018-01-27T14:53:07+0800
permalink: /2018/01/26/dockerizing-services/index.html
---

After seeing Jess Fraz's posts about [home labs](https://blog.jessfraz.com/post/home-lab-is-the-dopest-lab/), I got more excited about finishing cleaning up my server and getting it a bit more modernized. When I first installed it I choose centos as a recommendation of a friend, and while its fine, I just know ubuntu/debian based systems a lot better and makes some of the random day to day tasks a lot easier.

I didn't want to start completely from scratch again. I've done it a few times, and tried out setting up my systems using ansible, puppet, chef, etc but never kept it up to date enough to make moving to a new system easy.

I've tried installing kubernetes and docker swarm a few times over the years so my system is a mess, so I've just been sticking with docker + systemd to run my services. This will let me completely reinstall my base system in the future without having to reconfigure all the various services I want running. (Externally mounted volumes &lt;3)

I'll try to do follow up posts on pihole/dnssec/dnscrypt, jenkins, how awesome openvpn is.
