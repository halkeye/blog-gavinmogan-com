---
title: This is why perl people rule.
author: halkeye
post_id: "51"
date: 2004-04-14
post_name: why_perl_people_rule
status: publish
tags:
  - coding
datetime: 2004-04-14T09:04:03+0800
permalink: /2004/04/14/why_perl_people_rule/index.html
---

On Tue, Apr 13, 2004 at 09:20:06PM -0700, Gavin Mogan wrote:  

> any way you could add access to defaultpicurl please?

Done; in the 0.11 release - I've attached that version. Taken from the docs:  

 $lj->DefaultPicURL()  

 Returns the URL of the default picture used by the user.  

 Note that if the LiveJournal object was created with  

 either "pics" set to "0" or with "fast" set to "1" then  

 this function will always return an error.

 Example code:  

 print $lj->DefaultPicURL(),"\n";

Took a total of.. well i emailed last night, got a reply this morning.

Stuff to work on with the next version of MTLJPost.. but this makes things easier..
