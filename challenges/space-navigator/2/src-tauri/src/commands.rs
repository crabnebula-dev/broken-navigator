use std::{fs, path::Path};

use tracing::*;

/// This function performs a simplistic and unconstrained read of any
/// file on the system where it is executed and has access to.
/// `path` is the absolute file path
#[instrument(level = "trace")]
#[tauri::command]
pub fn load_navigation_readme(path: &Path) -> String {
    let readme = fs::read_to_string(&path);

    match readme {
        Ok(file) => {
            event!(
                Level::INFO,
                "The Navigator loaded the navigation readme from {}!",
                &path.to_string_lossy()
            );
            file
        }
        Err(error) => {
            event!(
                Level::ERROR,
                "Failed to load the navigation readme from {}!",
                &path.to_string_lossy()
            );
            format!("Problem opening the file: {:?}", error)
        }
    }
}

#[instrument(level = "trace")]
#[tauri::command]
pub fn check_flag(flag: &str) -> bool {
    let result = flag == "X:1234Y:1234Z:12345T:12345";

    info!(
        "The Navigator checked flag {flag} and it was {}",
        if result { "Correct" } else { "Incorrect" }
    );

    result
}
