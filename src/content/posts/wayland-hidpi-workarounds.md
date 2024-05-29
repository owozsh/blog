---
title: "Wayland HiDPI Workarounds"
pubDate: "May 18 2024"
---

If you're using Wayland and have tried setting the experimental fractional scaling up, you probably noticed by this point
that XWayland applications look blurry and weird.

This post brings a collection of workarounds for Wayland's fractional scaling problems.

### My environment

- Desktop: **Gnome**
- Windowing System: **Wayland**
- Graphics: **Nvidia**
- Distro: **Fedora 40**

### Electron

Specially for electron apps, we can set an environment variable that will tell our application to run under Wayland when
possible.

If you're using systemd, you can add this config file:

`~/.config/environment.d/envvars.conf`
```bash
ELECTRON_OZONE_PLATFORM_HINT=auto
```

Applications tested after this configuration:

- **Fixed (Running under Wayland)**
    - Discord
    - Visual Studio Code
    - 1Password
    - Signal
    - HTTPie
    - Bruno HTTP Client
- **Not fixed (Still running under XWayland)**
    - Spotify
    - Postman

