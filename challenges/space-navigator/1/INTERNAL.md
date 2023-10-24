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
