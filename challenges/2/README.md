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

## Learning

App developers can create custom commands
Custom commands are not restricted by the allowlist

## Application Layout

- Navigator Page
- Shows an empty list of loaded coordinates
- Able to load coordinate files (which are plaintext files)
- Able to load custom coordinate files by manually entering the file path in the loading input

## Hints

- The tauri configuration
- format of the password/flag
- (optional) listing of custom function names

## Flag

Can be found in `$APP/navigation/coordinates.flag`.

## Objectives

Find the correct navigation file with coordinates to earth
Load the navigation file and copy these into the target input

## Privileges

Access to the `readDir` and `readFile` Tauri commands.
Tauri custom command  `load_navigation_file` which can access system files with no constraints with functions from rust std.
The flag is the coordinates written into $APP/navigation/earth.coordinates
Allowlist configuration allows access to $APP/navigation/** but denies access to the flag file explicitly

```
"fs": {
       "readFile": true,
       "scope": {
         "allow": ["$APP/navigation/**"],
         "deny": ["$APP/navigation/coordinates.flag"]
       }
     }
```
