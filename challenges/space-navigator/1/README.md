# Level 1

## Description

We tried to open up the navigation console to locate the coordinates for earth but
we got prompted with a password input. We don't know ths password and it seems
like it is not documented.
One of the notes for the password indicates that it could be logged somewhere.
We only have access to the welcome menu, where we can load system documentation.

Can you find the password?

Once you have obtained it we can control the navigation console.

## Hints

We got the configuration file of the welcome menu application:

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
          "allow": ["$APP/navigation/logs/*.log", "$APP/navigation/docs/**"]
        }
      }
    },
    "bundle": {
      "active": true,
      "targets": "all",
      "identifier": "com.broken.navigator.one",
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

You can find out more about this configuration file at the Tauri [documentation]().

## Learning

Existence of Tauri commands.
Plugin Tauri commands can be restricted through the allowlist.
How Tauri commands are manually constructed.(?)

## Application Layout

- Welcome page
- Shows some random llm generated documentation with nonsense
- Able to load custom documentation files by manually calling a Tauri API command
  - The interface is prefilled with the shell open command to open the documentation(?)
  - The endpoint values and parameters can be edited -> devtools like experience(?)

## Hints

- The tauri configuration
- format of the password/flag
- directory listing of files/subfolders in the `navigation/logs` folder

## Flag

Can be found in `$APP/navigation/logs/app.log` in some tracing logs.
Is a password logged by the call to the `console_login` function.
Logs can be dummy logs looking like from the `tokio-tracing` crate.

## Objectives

Find the unlock passcode for the navigation terminal from the log file
Open the application.log file in the $APP/logs folder
Use the code to unlock the navigation terminal

## Privileges

Access to the `readDir` and `readFile` Tauri commands are needed.

```
"fs": {
       "readFile": true,
       "scope": {
         "allow": [
          "$APP/navigation/logs/*.log",
          "$APP/navigation/docs/**"
          ]
       }
     }
```
