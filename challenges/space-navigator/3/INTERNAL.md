## Hints

- Custom Tauri command documentation
  - function signature
  - parameters with description and scheme
- Example invoke string from another command

## Learning

Tauri commands can be manually invoked by crafting the command payload and invoking it via `__TAURI__.invoke()`.

## Application Layout

- Navigator Page
- Developer Console enabled and shown
- Able to send the coordinates to a custom command, which is documented.

## Hints

- The tauri configuration
- format of the password/flag
- (optional) listing of custom function names

## Flag

Will be returned once the custom command is correctly invoked.

## Objectives

Load the navigation data into the backend system.

## Privileges

Access to the custom `set_coordinates` Tauri command.
