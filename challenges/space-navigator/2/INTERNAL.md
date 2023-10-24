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
Tauri custom command `load_navigation_file` which can access system files with no constraints with functions from rust std.
The flag is the coordinates written into $APP/navigation/earth.coordinates
Allowlist configuration allows access to $APP/navigation/\*\* but denies access to the flag file explicitly

```
"fs": {
       "readFile": true,
       "scope": {
         "allow": ["$APP/navigation/**"],
         "deny": ["$APP/navigation/coordinates.flag"]
       }
     }
```
