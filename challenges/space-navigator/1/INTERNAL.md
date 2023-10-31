## Learning

Existence of Tauri commands.
(Plugin/Core) Tauri commands can be restricted through the allowlist.

## Application Layout

- Ship status system Interface
- Able to load system event files by calling a Tauri API command
- Able to check an administrator password

## Hints

- The tauri configuration
- Simple buttons to load files in a folder and to load file content

## Flag

Can be found in `$RESOURCE/logs/navigator.log` in some tracing logs.

## Objectives

Find the unlock passcode for the navigation terminal from the log file
Open the application.log file in the $RESOURCE/logs folder
Use the code to unlock the navigation terminal

## Privileges

Access to the `readDir` and `readFile` Tauri commands are needed.
