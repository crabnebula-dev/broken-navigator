# Level 2

## Description

After logging into the navigation console with the password we could not find
any coordinates already loaded. We need the correct coordinates to go back to earth.

Can you find them somewhere on the system?

Once you have obtained it we can enter them into the destination of our trip.

## Hints

We got the configuration file of the navigator menu application:

```json
{
  "build": {
    "beforeDevCommand": "npm run dev",
    "beforeBuildCommand": "npm run build",
    "devPath": "http://localhost:1420",
    "distDir": "../dist",
    "withGlobalTauri": false
  },
  "package": {
    "productName": "broken-navigator",
    "version": "0.0.0"
  },
  "tauri": {
    "allowlist": {
      "all": false,
      "shell": {
        "all": false,
        "open": true
      },
      "fs": {
        "readFile": true,
        "readDir": true,
        "scope": {
          "allow": ["$APP/navigation/**"],
          "deny": ["$APP/navigation/coordinates.flag"]
        }
      }
    },

    "bundle": {
      "active": true,
      "targets": "all",
      "identifier": "com.broken.navigator.two",
      "icon": [
        "icons/32x32.png",
        "icons/128x128.png",
        "icons/128x128@2x.png",
        "icons/icon.icns",
        "icons/icon.ico"
      ]
    },
    "security": {
      "csp": null
    },
    "windows": [
      {
        "fullscreen": false,
        "resizable": true,
        "title": "broken-navigator",
        "width": 800,
        "height": 600
      }
    ]
  }
}
```

The console seems to have custom functions outside of the documented [Tauri API](https://tauri.app/v1/api/js/).
It seems like we already know where the coordinates are but can not access them.
