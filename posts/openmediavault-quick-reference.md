---
title: "OpenMediaVault Quick Reference"
description: "I've been using OpenMediaVault 6 for over a year now, and it's user interface can be a bit obtuse, so I wrote myself a series of quick step-by-step guides for enabling certain features within the OMV workbench UI."
publish_date: 2023-07-30
tags:
  - OpenMediaVault
  - Self-Hosting
  - Linux
---

<!-- ## Sections

1. [Change the port for OMV workbench](#port)
2. [Mount disks in OMV](#mount)
3. [Sharing folders via SMB](#smb)
4. [Sharing folders via NFS](#nfs)
5. [Enable Wake-on-Lan](#wol)
6. [Set a static IP address](#static)
7. [Create a new user account](#user)
8. [Reference](#ref) -->

<div id='port' />

## Change the port for OMV workbench

To change the port in the workbench UI:

1. Go to **System** -> **Workbench**
2. Under **Port** enter the desired port number
3. Click the **Save button** and confirm the **pending configuration changes** by clicking the **checkmark**.

Alternately, you can change the port in the **terminal**:

1. Login to the OMV shell as `root`
2. Use the command `omv-firstaid`
3. In the pop-up, choose option `3   Configure workbench`
4. Hit **Enter** to continue
5. Type the desired `port to access the workbench via HTTP`
6. Hit **Enter** to finish

<div id='mount' />

## Mount disks in OMV

1. Go to **Storage** -> **File Systems**
2. To create a mount, click the **plus (+)** and choose a **file system** from the dropdown (e.g. `ext4`)
3. On the following page choose a **Device** from the dropdown
4. Click the **Save button** and confirm the **pending configuration changes** by clicking the **checkmark**
5. Go to **Storage** -> **Shared Folders**, and click the **plus (+)**
6. Write a **name**, select a mounted **file system**, and the **relative path** of the file system to share (e.g. `/`).
7. Leave the **permissions** as is or change if desired
8. Click the **Save button** and confirm the **pending configuration changes** by clicking the **checkmark**

<div id='smb' />

## Share folders via SMB

1. Go to **Services** -> **SMB/CIFS** -> **Settings**
2. Make sure **Enabled** is checkmarked, write in your **Workgroup** name, then click the **Save button**
3. Go to **Services** -> **SMB/CIFS** -> **Shares**, and click the **plus (+)**
4. Add a checkmark to **Enabled**, select a **shared folder** (created at Storage -> Shared Folders), and choose your options
5. (Optional) Add other SMB options that would appear in a `smb.conf` file at the bottom, under **Extra options**
6. When done, click the **Save button** and confirm the **pending configuration changes** by clicking the **checkmark**.

<div id='nfs' />

## Share folders via NFS

1. Go to **Services** -> **NFS** -> **Settings**
2. Make sure **Enabled** is checkmarked. To avoid any potential errors, click on **Versions** and make sure all the versions are checked, then click the **Save button**.
3. Go to **Services** -> **NFS** -> **Shares**, and click the **plus (+)**
4. Select a **shared folder** (created at Storage -> Shared Folders) and type in at least one **Client** IP address (who will have access to this share). Choose the **Permission** and leave the **Extra options** as is.
5. Click the **Save button** and confirm the **pending configuration changes** by clicking the **checkmark**.

<div id='wol' />

## Enable Wake-on-Lan

1. Go to **Network** -> **Interfaces**.
2. Click on your interface (e.g. `enp2s0`) to highlight it, then click on the **Pencil** icon to **edit** the interface
3. Scroll down to **Advanced settings** and check the box for **Wake-on-Lan**
4. Click the **Save button** and confirm the **pending configuration changes** by clicking the **checkmark**.

> Make sure to enable Wake-on-Lan within the **BIOS** too!

<div id='static' />

## Set a static IP address

1. Go to **Network** -> **Interfaces**
2. Click on your interface (e.g. `enp2s0`) to highlight it, then click on the **Pencil** icon to **edit** the interface.
3. Under **IPv4** choose Method: **Static**
4. Under **Address** enter the desired static IP address
5. Under **Netmask** enter 255.255.255.0 (unless you're on a subnet and know what to enter)
6. For **Gateway** enter your router or DHCP server (e.g. `192.168.1.1`)
7. (Optional) Write in specific **DNS servers** under **Advanced settings** if desired
8. Click the **Save button** and then confirm the **pending configuration changes** by clicking the **checkmark**

<div id='user' />

## Create a new user account

By default only the `root` user is available, which is fine if you're mostly using the workbench UI. However if you plan to SSH in and don't want to do so as **root**, create a new user account to do so.

1. Go to **Users** -> **Settings**
2. Checkmark the **Enabled** box and choose the **Location** of a shared folder to use for user home directories
3. Next go to **Users** -> **Users**
4. Click **plus (+)** then choose to **Create** a new user account
5. Write in the desired name and password, change the **Shell** if desired, and add the user to any **Groups** you'd like. (E.g. `sudo`, `ssh`, etc.)
6. (Optional) Add an **SSH public key** if desired
7. Click the **Save button**, then confirm the **pending configuration changes** by clicking the **checkmark**

<div id='ref' />

## Reference

- <a href="https://docs.openmediavault.org/en/stable" target="**blank">OpenMediaVault Documentation</a>
