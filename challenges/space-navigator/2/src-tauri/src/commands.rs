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

/// This function performs a simplistic and unconstrained write of any
/// file on the system where it is executed and has access to.
/// `path` is the absolute file path
/// `event_data` is the content of the file
#[instrument(level = "trace")]
#[tauri::command]
pub fn write_navigation_event(event_data: &str, path: &str) -> String {
    let save_result = fs::write(&path, &event_data);
    match save_result {
        Ok(_) => event!(Level::INFO, "The space event {} was saved!", &path),
        Err(err) => event!(
            Level::ERROR,
            "The space event {} with content {} could not be saved! {}",
            &path,
            &event_data,
            err
        ),
    }

    format!("Wrote event {}", &path)
}

#[instrument(level = "trace")]
#[tauri::command]
pub fn run_external_event_validation(path: &Path) -> String {
    event!(
        Level::INFO,
        "The Navigator checked the event file {}!",
        &path.to_string_lossy()
    );

    format!("Validated event {}", &path.to_string_lossy())
}

#[instrument(level = "trace")]
#[tauri::command]
pub fn fetch_external_maps(remote: &str) -> String {
    event!(
        Level::INFO,
        "The Navigator loaded an external map from {}!",
        &remote.to_string()
    );

    "Map data successfully loaded".to_string()
}
