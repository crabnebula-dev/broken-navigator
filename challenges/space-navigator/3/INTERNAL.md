## Learning

Tauri commands can be manually invoked by crafting the command payload and invoking it via `__TAURI__.invoke()`.

## Application Layout

- Navigator Page
  - coordinates list
  - some images displayed when clicking on coordinates
  - some disabled dummy buttons and an error message that the system interface is currently not operable
- Developer Console enabled but hidden (they should have learned the shortcut before so just enabled but not shown)
- Able to write the coordinates in the set coordinates folder
  - get validation code that coordinates are written into the system

## Hints

- Write file Tauri command documentation
  - function signature
  - parameters with description and scheme
- The tauri configuration
- Hinting the developer console
- Example invoke string from another tauri command (maybe reference some pentest report?)

## Flag

Will be returned once the Tauri API command is correctly invoked.

## Objectives

Load the navigation data into the backend system.

## Privileges

Access to the the write file Tauri command.

## Solution

1. Open developer tools with system shortcut (`shift` or ` cmd``+crtl+i `)
2. Execute `window.__TAURI_INVOKE__("tauri",{__tauriModule:"Fs",message:{cmd:"writeFile",path: "navigation/active/Earth.cord", contents: [102, 108, 97, 103] , options: { dir: 17}}})` via console
3. Click button to retrieve flag
