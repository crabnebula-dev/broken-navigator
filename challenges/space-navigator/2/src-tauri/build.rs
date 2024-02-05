use std::fs::{read_to_string, write};
use rand::Rng;

fn main() {
  // Generate Random Flag
  let mut rng = rand::thread_rng();
  let rand_x: u32 = rng.gen_range(0..99999);
  let rand_y: u32 = rng.gen_range(0..99999);
  let rand_z: u32 = rng.gen_range(0..99999);
  let rand_t: u32 = rng.gen_range(0..99999);

  let flag: String = format!("X:{:05}Y:{:05}Z:{:05}T:{:05}",rand_x,rand_y,rand_z,rand_t);
  println!("cargo:rustc-env=FLAG={}", flag);

  //Change Flag in the coordinates.flag
  let path = concat!(env!("CARGO_MANIFEST_DIR"),"/templates/coordinates.flag");
  let template = read_to_string(path).expect("Unable to read template file");
  let result = template.replace("{{FLAG}}", &flag);
  write("./navigation/coordinates.flag", result).expect("Unable to write file");
  
  tauri_build::build()
}
