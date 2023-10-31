use tracing::*;

#[instrument(level = "trace")]
#[tauri::command]
pub fn check_password(password: &str) -> String {
    event!(
        Level::INFO,
        "The Navigator checked this password {}!",
        &password.to_string()
    );
    let result = match password {
        "foobar1234567" => "Correct Password",
        _ => "Incorect Password",
    };

    result.to_string()
    //format!("Password {} is correct", &password).to_string()
}
