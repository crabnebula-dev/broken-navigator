use rand::Rng;
use rand::distributions::Alphanumeric;

fn main() {
    // Generate Random Flag
    let mut flag: String = String::from("FLAG-");
    let rand_str: String = rand::thread_rng()
    .sample_iter(&Alphanumeric)
    .take(10)
    .map(char::from)
    .collect();
    flag.push_str(&rand_str);
    println!("cargo:rustc-env=FLAG={}", flag);

  tauri_build::build()
}
