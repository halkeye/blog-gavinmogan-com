---
title: How to change from mate-terminal to xfce4-terminal
author: halkeye
post_id: "466"
date: 2012-07-16
post_name: change-mateterminal-xfce4terminal
status: publish
tags:
  - linux
datetime: 2012-07-16T12:17:55+0800
permalink: /2012/07/15/change-mateterminal-xfce4terminal/index.html
---

Mostly for my own purposes

`mateconftool-2 --set /desktop/mate/applications/terminal/exec --type string "xfce4-terminal"`

I'm not a big fan of mate terminal, seems to hurt my eyes, like xfce better, so this still makes the "launch terminal" shortcut work, but launch a different terminal.

Probably should switch it to use the debian standard "x-terminal-emulator"
