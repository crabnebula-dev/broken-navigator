use std::{env, fs, path::Path};
use tauri::{Context, PathResolver};
use tracing::*;

#[instrument(level = "trace")]
#[tauri::command]
pub fn get_validation_code(seed: &str) -> String {
    let file = Path::new("navigation/active/Earth.cord");
    let path = tauri::api::process::current_binary(&tauri::Env::default())
        .unwrap()
        .parent()
        .unwrap()
        .join(&file);
    let flag = Path::try_exists(&path.as_path());

    match flag {
        Ok(exists) => {
            if exists {
                "FLAG-123456789".to_string()
            } else {
                "NO-FLAG".to_string()
            }
        }
        Err(_) => "NO-FLAG".to_string(),
    }
}
