# Level 4

## Description

We did set the coordinates correctly, but for some
reason the navigation system requires us to make a correction. Earth seems to have shifted by the spacetime
vector `[1,2,3,4]`.
We can not use the Tauri `writeFile` command, as the
filesystem module was disabled.
The configuration doesn't seem to help us this time.

```json
"tauri": {
    "allowlist": {
      "shell": {
        "all": false,
        "open": true
      }
    }
```

There seems to be a promising custom command `correct_coordinates` to correct this, but the UI is still broken.
We should be able to figure out how to call it by looking at some command documentation.

It should give us a confirmation code flag after setting of the correct spacetime adjustment.
