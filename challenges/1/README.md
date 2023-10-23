# Level 1

## Learning

Existence of Tauri commands.
Plugin Tauri commands can be restricted through the allowlist.

## Objectives

Find the unlock passcode for the navigation terminal from the log file
Open the application.log file in the $APP/logs folder
Use the code to unlock the navigation terminal

## Privileges

Access to the readDir and readFile Tauri commands
Scope is the same as in Level 2
```
"fs": {
       "readFile": true,
       "scope": {
         "allow": ["$APP/navigation/**"],
         "deny": ["$APP/navigation/coordinates.flag"]
       }
     }
```
