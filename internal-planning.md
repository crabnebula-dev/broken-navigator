# Internal Planning

## How to present the Tauri App

The first iteration could be to present it as a CTF where you can access the Tauri binaries directly in a virtual environment.
Requires the code to be closed source until the CTF is over.

### CTF

We can use established solutions like [CTFd](https://ctfd.io/) to host this CTF instance one a cloud machine.
For creation of docker containers with the vulnerable headless Tauri applications for each challenge and each participant/team we can possibly leverage a docker [plugin](https://github.com/offsecginger/CTFd-Docker-Challenges). We may need to modify the plugin. Otherwise [`kctf`](https://github.com/google/kctf) could be interesting but has likely more overhead.
We should create some very simple challenges and some harder ones, so we can attract the community. It should be a time boxed CTF which we leverage to gain attention to the project.

The setup will be a Tauri application, which is the same frontend application as the headless one in the cloud but the frontend commands are intercepted and sent to the headless instance. We may want to let some commands go to the local system (like opening the browser with shell open) to demonstrate
that they impact the local system and to showcase functionality.
This allows no leakage of backend code and only exposes the frontend code. Headless is possible via a custom Tauri `mock-runtime` we use for the fuzzer and the combination with the [`tauri-invoke-http`](https://github.com/tauri-apps/tauri-invoke-http) plugin.

## Setup/History

Group of friends doing a space tour in the Crab Nebula.
The operator vanishes into space and no one is controlling the ship right now.
They need to hack into the Tauri app console to save their lives and find and use the correct coordinates to get back to earth.
They are presented with a game-like terminal interfaces of a navigation system
Each terminal has one distinct function or step they need to perform.

## Functionality

- Load navigation files from the filesystem
- Write events to the filesystem
- Execute navigation file validation tools
- Load map updates from external map server
- Allows our admin console to fix broken navigation systems
- Provide clipboard assistant when copying coordinates
- ?

## Structure of the app

- Each folder in the challenges directory has a theme of what to teach
- Different levels correspond to a different Tauri app
- Each level has its own directory
- From the UI you can only access start next level app if you have finished current level
- For fuzzing you can access the different directories directly with the source code
- Metrics of the Tauri app are displayed (configuration, commands)

## challenges/space-navigator

All about teaching commands, invoking and abusing commands
ideas for further challenges:

- xss exploitation and then reading the flag via tauri command
- same as before but isolation pattern has a stupid WAF implemented and you need to bypass some character filter
- TBD
