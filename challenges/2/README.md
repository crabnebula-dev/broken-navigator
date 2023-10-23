# Level 2

## Learning

App developers can create custom commands
Custom commands are not restricted by the allowlist

## Objectives

Find the correct navigation file with coordinates to earth
Load the navigation file and copy these into the target input

## Privileges

Access to the readDir and readFile Tauri commands
Tauri custom command  load\_navigation\_file which can access system resources with no constraints with functions from rust std
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