use std::{env, fs, path::Path};
use tauri::{AppHandle, Context, PathResolver};
use tracing::*;

#[instrument(level = "trace")]
#[tauri::command]
pub fn get_validation_code(seed: &str, app: AppHandle) -> String {
    let file = Path::new("navigation/active/Earth.cord");
    let path = app.path_resolver().resource_dir().unwrap().join(&file);
    let flag = Path::try_exists(&path.as_path());

    match flag {
        Ok(exists) => {
            if exists {
                "FLAG-123456789".to_string()
            } else {
                "No coordinates set".to_string()
            }
        }
        Err(_) => "NO-FLAG".to_string(),
    }
}

#[instrument(level = "trace")]
#[tauri::command]
pub fn check_flag(flag: &str) -> bool {
    let result = flag == "FLAG-123456789";

    info!(
        "The Navigator checked flag {flag} and it was {}",
        if result { "Correct" } else { "Incorrect" }
    );

    result
}
