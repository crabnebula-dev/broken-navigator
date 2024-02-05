use std::fs::{read_to_string, write};
use rand::Rng;
use rand::distributions::Alphanumeric;

fn main() {
    // Generate Random Flag
    let mut flag: String = String::from("FLAG-");
    let rand_str: String = rand::thread_rng()
    .sample_iter(&Alphanumeric)
    .take(8)
    .map(char::from)
    .collect();
    flag.push_str(&rand_str);
    println!("cargo:rustc-env=FLAG={}", flag);

    //Change Flag in the log file
    let path = concat!(env!("CARGO_MANIFEST_DIR"),"/templates/navigator.log");
    let template = read_to_string(path).expect("Unable to read template file");
    let result = template.replace("{{FLAG}}", &flag);
    write("./logs/navigator.log", result).expect("Unable to write file");

    tauri_build::build()
}
