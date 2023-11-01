## Learning

Custom commands can be manually invoked by crafting the command payload and invoking it via `__TAURI__.invoke()`. Custom commands can bypass the allowlist.


## Application Layout

- Navigator Page
  - coordinates list
  - some images displayed when clicking on coordinates
  - some disabled dummy buttons and an error message that the system interface is currently not operable
- Developer Console enabled but hidden (they should have learned the shortcut before so just enabled but not shown)
- Able to send the coordinates to a custom command
  - get validation code that coordinates are in the system

## Hints

- Custom Tauri command documentation
  - function signature
  - parameters with description and scheme
- The tauri configuration
- Example invoke string from another tauri command

## Flag

Will be returned once the Tauri API command is correctly invoked.

## Objectives

Load the navigation data into the backend system.

## Privileges

Access to the custom `set_coordinates` Tauri command.
