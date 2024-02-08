use tracing::*;

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
