# Level 1

## Description

We tried to open up the navigation console to locate the coordinates for earth but
we got prompted with a password input. We don't know ths password and it seems
like it is not documented.
One of the notes for the password indicates that it could be logged somewhere.
We only have access to the welcome menu, where we can load system documentation.

Can you find the password?

Once you have obtained it we can control the navigation console.

We got parts of the configuration file of the welcome menu application.
It seems like a [Tauri](https://tauri.app/) application:

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
          "allow": ["$RESOURCE/logs/**", "$RESOURCE/logs"]
        }
      }
    }
}
```

You can find out more about this configuration file at the Tauri [documentation](https://tauri.app/v1/api/config/).
The `$RESOURCE` path seems to be different for each operating system.
Luckily this path is handled by Tauri and you can use relative paths like `logs/`.
