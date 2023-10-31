## Learning

Tauri commands can be manually invoked by crafting the command payload and invoking it via `__TAURI__.invoke()`.

## Application Layout

- Navigator Page
- Developer Console enabled but hidden (they should have learned the shortcut before so just enabled but not shown)
- Able to send the coordinates to a custom command
  - get validation code that coordinates are in the system

## Hints

- Custom Tauri command documentation
  - function signature
  - parameters with description and scheme
- The tauri configuration
- Example invoke string from another dummy command
- leaks of custom function names and their signature in some html comment or unused functions

## Flag

Will be returned once the custom command is correctly invoked.

## Objectives

Load the navigation data into the backend system.

## Privileges

Access to the custom `set_coordinates` Tauri command.
