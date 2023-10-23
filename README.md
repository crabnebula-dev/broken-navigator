# Broken Navigator

## Disclaimer

This project is an example of a vulnerable application. It contains intentional
vulnerabilities and is meant as educational example.

**Please do not use or copy code from this application into any productive application!**

## Welcome

Welcome fellow travelers of the CrabNebula.

We figured you need something to guide you trough your journey, a tool that assures
safe travel at all times.

The `space-navigator` is a Tauri application used to navigate in space and time. 

It needs to be operated by instructed personel only, as it is a complex procedure to accurately calculate the
coordinates to your target destination.

Unfortunately our space ship navigator went missing when doing some inspections on the
hull of the ship we are travelling with right now.

The problem we currently face is that most of the notes our navigor used were somehow encrypted
and we don't know how to operate the navigation terminal.

We need to hack into the `space-navigator` console and figure out how to navigate back to a safe space.
We are left with some scattered notes which may help.

**Can you help us?**

## Where To Start?

Find each challenge in the `challenges` sub directory of this repository. Challenges can require
knowledge gained from previous challenges but in general can be solved on their own.
Recommendation is to start with `challenges/1` and move your way up.
Please read the `README.md` of each challenge to understand the showcased issue.

Make sure you have the correct version of the `tauri-cli` installed.

```sh
cd challenges/1
npm install
cargo tauri dev
```

## Why is this application a thing?

This set of applications is meant to showcase insecure, weak and improper code pattern commonly used in Tauri applications.
It is meant to be educational and to show newcomers to Rust what they should consider when building
Tauri `commands` or in general Tauri applications. It is also creating testcases for our fuzzing tooling and allows us to
test and improve our fuzzing capabilities.

A similar project is the [OWASP Juice Shop](https://owasp.org/www-project-juice-shop/), which is focused on web applications running
in the browser.