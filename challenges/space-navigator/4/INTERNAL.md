## Learning

Custom commands can be manually invoked by crafting the command payload and invoking it via `__TAURI__.invoke()`.
Custom command invoke strings are different than Tauri module invokes.

## Application Layout

- Navigator Page
  - coordinates list
  - some images displayed when clicking on coordinates
  - some disabled dummy buttons and an error message that the system interface is currently not operable
- Developer Console enabled but hidden (they should have learned the shortcut before so just enabled but not shown)
- Able to send the coordinates to a custom command
  - get validation code that coordinates are in the system

## Hints

- Custom Tauri command name
- The tauri configuration

## Flag

Will be returned once the Tauri API command is correctly invoked.

`await window.__TAURI_INVOKE__("correct_coordinates", { "vector": [1,2,3,4]})`

## Objectives

Load the navigation data into the backend system.

## Privileges

Access to the custom `correct_coordinates` Tauri command.

## Potential Fix

The application exposed the command, where the developer did not consider the `scope`
from the `fs` plugin and just gave "write" access to a file which should not be writable
in the normal flow of the app.

> Note: In this instance the rust function has no write to disk functionality,
> as we don't want to write to players file system and to allow the challenge to be played
> in `read-only` file systems. The function would normally use `std:fs` to write to a file.

To fix this unintended behavior the `correct_coordinates` function could check the 
[`FsScope`](https://docs.rs/tauri/1.6.0/tauri/scope/struct.FsScope.html) and match the
fileystem access or only operate in folders, where it should be able to write into.
