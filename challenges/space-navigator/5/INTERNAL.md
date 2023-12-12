## Learning

There was a vulnerability before a specific Tauri release, which allowed
remote websites to access the Tauri API by abusing an open redirect.
[Reference](https://github.com/tauri-apps/tauri/security/advisories/GHSA-4wm2-cwcf-wwvp)
The understanding of why and how this can be abused will be displayed in this challenge.

## Application Layout

-

## Hints

- Tauri version string
- A link to the advisories
- Tauri configuration
- Input where external domains can be inserted

## Flag

Will be returned once the Tauri API command is correctly invoked.

## Objectives

Load the navigation data into the backend system.

## Privileges

Open redirect as a feature.
Remote website configured to drop the encrypted flag in the filesystem.
