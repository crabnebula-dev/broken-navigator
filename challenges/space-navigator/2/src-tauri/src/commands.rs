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
