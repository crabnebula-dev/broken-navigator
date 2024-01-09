# Broken Navigator

<div align="center">
  <img src="imgs/logo.mini.nobg.png" alt="Broken Navigator Logo" title="Broken Navigator Logo">
</div>

## Introduction
[lets include details about project and purpose, features, and anything users should be aware of, and audience (who is for)]

## Disclaimer

This project is an example of a vulnerable application. It contains intentional
vulnerabilities and is meant as educational example.

**Please do not use or copy code from this application into any productive application!**

## Where To Start?

 ### Challenge Checklist

- [ ] Have Rust installed on your system ideally from [rustup.rs](https://rustup.rs)
- [ ] Have `npm` or `pnpm` or similar installed to fetch the frontend dependencies
- [ ] Install `tauri-cli` via `cargo install tauri-cli --locked`
- [ ] Install dependencies of the project with 
    ```sh
    cd broken-navigator
    npm install
    ```
- [ ] Start with the first challenge 
    ```sh
    cd challenges/space-navigator/1
    cargo tauri dev
    ```

We have multiple `components` of the ship, where each component contains themed challenges.
Find each challenge in the `challenges/<component>/[1-10]` sub directory of this repository.

In general challenges can be solved on their own, however challenges may require knowledge gained from previous challenges.


Please do **not** read the `INTERNAL.md` or source code of each challenge as they contain
solutions and internal structuring of the challenge, which would spoiler you playing the challenge.


## Why is this application a thing?

This set of applications is meant to showcase insecure, weak and improper code pattern commonly used in Tauri applications.
It is meant to be educational and to show newcomers to Rust what they should consider when building
Tauri `commands` or in general Tauri applications. It is also creating testcases for our fuzzing tooling and allows us to
test and improve our fuzzing capabilities.

A similar project is the [OWASP Juice Shop](https://owasp.org/www-project-juice-shop/), which is focused on web applications running
in the browser.
