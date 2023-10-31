# Level 2

## Description

After logging into the navigation console with the password we could not find
any coordinates already loaded. We need the correct coordinates to go back to earth.

Can you find them somewhere on the system?

Once you have obtained it we can enter them into the destination of our trip.

## Hints

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

The console seems to have custom functions outside of the documented [Tauri API](https://tauri.app/v1/api/js/).
It seems like we already know where the coordinates are but can not access them.
There seems some functionality hidden in some element to access them via the frontend.
We heard that there is some shortcut to open the `developer console`, maybe it is documented somewhere or you already know it.
