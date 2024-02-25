---
title: WHEEE! MRTG
author: halkeye
post_id: "128"
date: 2003-10-01
post_name: wheee_mrtg
status: publish
tags:
  - linux
datetime: 2003-10-01T10:45:35+0800
permalink: /2003/09/30/wheee_mrtg/index.html
---

after reading about MRTG is [kasia's](https://www.unix-girl.com) [blog](https://www.unix-girl.com/blog/archives/001134.html), I had to start figuring out how to use it more and more..

![](https://www.halkeye.net/mrtg/memory-day.png)

I've been messing with it..--------------  

https://people.ee.ethz.ch/~oetiker/webtools/mrtg/reference.html had all the extra information i needed...

External Monitoring Scripts  

 If you want to monitor something which does not provide data via snmp you can use some external program to do the data gathering.   

 The external command must return 4 lines of output:

Line 1: **current state of the first variable, normally 'incoming bytes count' **  

Line 2: **current state of the second variable, normally 'outgoing bytes count' **  

Line 3: **string (in any human readable format), telling the uptime of the target. **  

Line 4: **string, telling the name of the target. **

Target[ezwf]: `/usr/local/bin/df2mrtg /dev/dsk/c0t2d0s0`

Note the use of the backticks (`), not apostrophes (') around the command.
