# Level 3

## Description

We already know the coordinates but can not get them into our system.
The input interface seems broken and we maybe need to directly speak to
backend system via the developer console of the application.

Once we have the coordinates `[102, 108, 97, 103]` in the system the ship can start to set
course on Earth. Finally!
It should give us a confirmation code once the coordinates are successfully set.

We should infer where the cordinates need to be written to from the configuration:

```json
 "tauri": {
    "allowlist": {
      "shell": {
        "all": false,
        "open": true
      },
      "fs": {
        "writeFile": true,
        "scope": {
          "allow": ["$RESOURCE/navigation/active/Earth.cord"]
        }
      }
    },
```

There seems like an internal API called
[writeTextFile](https://tauri.app/v1/api/js/fs#writetextfile),
which seems perfect to insert the coordinates into the current coordinates folder.
We sadly can not figure out how to call it directly. It seems like the function signature
was wrapped around `writeFile`.

We found the internal rust api [code](https://github.com/tauri-apps/tauri/blob/2c7d683ae39716f06298849d8a01f81c6fd6f153/core/tauri/src/endpoints/file_system.rs#L76) for `writeFile`:

```rust
  /// The write file API.
  #[cmd(fs_write_file, "fs > writeFile")]
  WriteFile {
    path: SafePathBuf,
    contents: Vec<u8>,
    options: Option<FileOperationOptions>,
  },
```

We also got a logged request of another internal APi which was
triggered manually and where no convenience code was added in the frontend code:

`await window.__TAURI_INVOKE__("tauri",{__tauriModule:"Shell",message:{cmd:"open",path: "https://tauri.app"}})`

More explanation is mentioned in the [Tauri Command Documentation](https://tauri.app/v1/guides/features/command/).
