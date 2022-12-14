---
title: "How to use sudo without a password"
description: "Normally each time you append a command in Linux with sudo, you'll be prompted for the root password. But there's a single line you can add to a certain config file that will do away with the password prompt, here's how."
publish_date: 2022-04-20
tags:
  - Linux
  - Command Line
---

<!-- ## Sections

1. [The sudoers file](#sudoers)
2. [Disable password prompt for a specific user](#user)
3. [Disable password prompt for all sudoers](#all)
4. [Check the syntax of the sudoers file](#syntax)
5. [Reference](#ref) -->

<div id='sudoers'/>

## The sudoers file

Removing the sudo password prompt is done by editing the `/etc/sudoers` file,
however you should never edit this file directly, but instead use `sudo visudo`
to do so.

The file will look something like this:

```bash
# User privilege specification
root    ALL=(ALL:ALL) ALL

# Members of the admin group may gain root privileges
%admin  ALL=(ALL) ALL

# Allow members of group sudo to execute any command
%sudo   ALL=(ALL:ALL) ALL
```

There's two ways to disable the password prompt.

1. Disable it only for a specific user
2. Disable it for all users in the sudo group

<div id='user'/>

## Disable password prompt for a specific user

Add the following line to `/etc/sudoers` file:

```bash
user    ALL=(ALL) NOPASSWD: ALL
```

<div id='all'/>

## Disable password prompt for all sudoers

Edit the `%sudo` line in `/etc/sudoers` file:

```bash
%sudo   ALL=(ALL:ALL) NOPASSWD: ALL
```

<div id='syntax'/>

## Check syntax of /etc/sudoers

It's best to check and make sure you're not breaking anything. Use the following
command:

```bash
visudo -c
```

You'll get output letting you know whether or not the file syntax is correct.

```bash
❯ sudo visudo -c
/etc/sudoers: parsed OK
/etc/sudoers.d/README: parsed OK
```

<div id='ref'/>

## Reference

- <a href="https://man7.org/linux/man-pages/man5/sudoers.5.html" target="_blank">Man
  page for logind.conf</a>
