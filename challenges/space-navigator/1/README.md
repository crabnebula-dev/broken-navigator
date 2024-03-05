# Level 1

## Introduction

Welcome to the `space-navigator` challenges. For each level you will be presented with a Tauri app.
The application layout is similar for each level. You will get a description of the challenge ahead of you found in the "_About_" tab, the challenge itself in the "_Challenge_" tab and to verify you found the correct solution you can test
it in the "_Solution_" tab. Please note that the solution flag layout can be different for each challenge. To validate a flag just insert it into the solution input field and press _enter_.

## Description

We tried to open up the navigation console to locate the coordinates for earth but
we got prompted with a password input. We don't know the password and it seems
like it is not documented.
One of the notes for the password indicates that it could be logged somewhere.
We only have access to the welcome menu, where we can load system documentation.

Can you find the password?

Once you have obtained it we can control the navigation console.

We got parts of the configuration file of the welcome menu application.
It seems like a <a href="https://tauri.app/" rel="noopener noreferrer" target="_blank">Tauri</a> application.

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

You can find out more about this configuration file at the Tauri <a href="https://tauri.app/v1/api/config/" rel="noopener noreferrer" target="_blank">documentation</a>.
The `$RESOURCE` path seems to be different for each operating system.
Luckily this path is handled by Tauri and you can use relative paths like `logs/`.
