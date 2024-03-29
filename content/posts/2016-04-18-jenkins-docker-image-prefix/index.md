---
title: Jenkins docker Image + prefix
author: halkeye
post_id: "750"
date: 2016-04-18
post_name: jenkins-docker-image-prefix
status: publish
tags:
  - general
datetime: 2016-04-18T12:06:44+0800
permalink: /2016/04/18/jenkins-docker-image-prefix/index.html
---

I'm probably going to need this again sometime.

## Upstart

```
# cat /etc/init/jenkins.conf
description "Jenkins"
author "Gavin Mogan"
start on filesystem and started docker
stop on runlevel [!2345]
respawn
script
   /usr/bin/docker stop jenkins || true
   /usr/bin/docker rm jenkins || true
   /usr/bin/docker run --rm --name="jenkins" -p 8080:8080 -p 50000:50000 -v /var/lib/jenkins:/var/jenkins_home jenkinsci/jenkins:2.0-rc-1 --prefix=/jenkins
end script
```

## Systemd

```
$ cat /etc/systemd/system/jenkins-docker.service
[Unit]
Description=Jenkins
After=docker.service
Requires=docker.service

[Service]
TimeoutStartSec=0
Restart=always
ExecStartPre=-/usr/bin/docker stop jenkins
ExecStartPre=-/usr/bin/docker rm jenkins
ExecStart=/usr/bin/docker run --name="jenkins" -p 8080:8080 -p 50000:50000 -v /home/jenkins:/var/jenkins_home jenkinsci/jenkins:2.0-rc-1 --prefix=/jenkins

[Install]
WantedBy=multi-user.target
```
