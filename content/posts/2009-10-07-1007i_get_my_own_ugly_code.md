---
title: "I get my own ugly code"
author: "halkeye"
post_id: "336"
date: "2009/10/07 23:47:34"
post_name: "1007i_get_my_own_ugly_code"
status: "publish"
category: "Coding"
tags: []
cover: "/assets/cover-image.jpg"
---

```perl
sub rw { my $word = "$_[0]"; $word =~ s/(.)/rc($1)/ge; $word;}
sub rc { return ((rand(1)*2+1)%2) ? lc($_[0]): uc($_[0]); }
```

(i don't care about efficiency or whatnot, i was just creating a simple function for a unit test, it just looks like someone threw up some letters.
