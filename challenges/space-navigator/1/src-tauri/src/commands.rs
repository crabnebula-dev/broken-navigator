use tracing::*;

#[instrument(level = "trace")]
#[tauri::command]
pub fn check_password(password: &str) -> bool {
    let result = password == "Asdf";

    info!(
        "The Navigator checked password {password} and it was {}",
        if result { "Correct" } else { "Incorrect" }
    );

    result
}
