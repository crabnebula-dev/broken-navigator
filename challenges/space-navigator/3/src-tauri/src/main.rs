// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tracing::*;
use tracing_subscriber;
mod commands;

fn main() {
    let _collector = tracing_subscriber::fmt()
        // filter spans/events with level TRACE or higher.
        .with_max_level(Level::TRACE)
        // set default subscriber.
        .init();

    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![commands::get_validation_code])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
