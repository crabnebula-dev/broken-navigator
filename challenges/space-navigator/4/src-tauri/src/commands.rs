use tracing::*;

#[instrument(level = "trace")]
#[tauri::command]
pub fn correct_coordinates(vector: Vec<u8>) -> String {
    match vector[..] {
        [1, 2, 3, 4] => env!("FLAG","No flag var found.").to_string(),
        _ => "Incorrect coordinates".to_string(),
    }
}

#[instrument(level = "trace")]
#[tauri::command]
pub fn check_flag(flag: &str) -> bool {
    let result = flag == env!("FLAG","No flag var found.");

    info!(
        "The Navigator checked flag {flag} and it was {}",
        if result { "Correct" } else { "Incorrect" }
    );

    result
}
