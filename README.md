<a name="readme-top"></a>
# Broken Navigator

<div align="center">
  <img src="images/logo.mini.nobg.png" alt="Broken Navigator Logo" title="Broken Navigator Logo">
</div>

## Introduction
Broken Navigator is an innovative and engaging educational project designed to highlight vulnerabilities in application development, specifically focusing on Tauri applications. This project serves as a hands-on learning platform, offering a series of challenges that expose users to common insecure, weak, and improper code patterns prevalent in Tauri applications. Each challenge is themed around different components of a ship, making the learning process not only informative but also immersive and entertaining.

The primary audience for Broken Navigator is developers and students who are new to Rust and Tauri applications, as well as those interested in application security. By navigating through the challenges, users can gain practical insights into what to consider when building Tauri commands and applications. Additionally, the project aims to create test cases for fuzzing tooling, enhancing the ability to test and improve fuzzing capabilities in software development.

It's important for users to note that Broken Navigator contains intentional vulnerabilities and should be viewed strictly as an educational tool. Users are advised against using or copying code from this application into any productive application due to its intentional vulnerabilities.

## Disclaimer

To reiterate, please be aware that Broken Navigator is an intentionally vulnerable application designed for educational purposes. It should not be used as a reference for production code, and care should be taken to avoid replicating its code patterns in real-world applications.

**Please do not use or copy code from this application into any productive application!**

## Where To Start?

 ### Challenge Checklist

- [ ] Have Rust installed on your system ideally from [rustup.rs](https://rustup.rs)
- [ ] Have `npm` or `pnpm` or similar installed to fetch the frontend dependencies
- [ ] Install [Tauri prerequisites](https://tauri.app/v1/guides/getting-started/prerequisites)
- [ ] Install `tauri-cli` via `cargo install tauri-cli --locked`
- [ ] Install dependencies of the project with 
    ```sh
    cd broken-navigator
    npm install
    ```
- [ ] Start with the first challenge 
    ```sh
    cd challenges/space-navigator/1
    npm run tauri dev
    ```

Each challenge is located within the `challenges/<component>/[1-x]` subdirectories. While challenges can generally be solved independently, some may require knowledge from previous ones.

> To maintain the challenge integrity, please do not read the `INTERNAL.md` or the source code of each challenge before playing, as they contain solutions and details about the challenge structure.


## Why is this application a thing?

Broken Navigator aims to educate newcomers to Rust and Tauri applications about potential security pitfalls and coding mistakes. It highlights what should be considered when developing secure Tauri applications and serves as a testbed for fuzzing tools. This approach is inspired by the [OWASP Juice Shop](https://owasp.org/www-project-juice-shop/), a similar project focusing on vulnerabilities in web applications.

<p align="center">[<a href="#readme-top">RETURN TO TOP</a>]</p>
