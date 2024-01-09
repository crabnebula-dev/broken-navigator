# Level 2

## Description

After logging into the navigation console with the password we could not find
any coordinates already loaded. We need the correct coordinates to go back to earth.

Can you find them somewhere on the system?

Once you have obtained it we can enter them into the destination of our trip.

We got the interesting part of the configuration file of the navigator menu application:

```json
{
  "tauri": {
    "allowlist": {
      "all": false,
      "shell": {
        "all": false,
        "open": true
      },
      "fs": {
        "readFile": true,
        "readDir": true,
        "scope": {
          "allow": ["$RESOURCE/navigation/**"],
          "deny": ["$RESOURCE/navigation/coordinates.flag"]
        }
      }
    }
  }
}
```

The navigation application seems to have custom functions outside of the documented <a href="https://tauri.app/v1/api/js/" rel="noopener noreferrer" target="_blank">Tauri API</a>.
It seems like we already know where the coordinates are but can not access them.
There seems some functionality hidden in some elements to access them via the frontend.
We heard that there is some shortcut to open the `developer tools`, maybe it is documented somewhere or you already know it.
