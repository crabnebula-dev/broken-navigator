# Broken Navigator

## Disclaimer

This project is an example of a vulnerable application. It contains intentional
vulnerabilities and is meant as educational example.

**Please do not use or copy code from this application into any productive application!**

## Welcome

Welcome Space Ship Travelers of the CrabNebula!
We are thrilled to have you aboard on this exciting journey through one of the most splendid corners of the cosmos.
As you embark on your exploration of the CrabNebula, prepare to witness the awe-inspiring wonders that await you at each destination.
To help you navigate through this vast nebula, we have provided detailed documentation for some of the most popular destinations,
which can be found by clicking on the links below:

- [Crab Pulsar](https://en.wikipedia.org/wiki/Crab_Pulsar): Discover the enigmatic heart of the nebula, where a rapidly spinning neutron star emits powerful beams of radiation.
  Marvel at the spectacular light show and delve into the strange physics of this celestial phenomenon. (Click here for more information)

- [Filamentary Structure](https://en.wikipedia.org/wiki/Galaxy_filament): Immerse yourself in the mesmerizing network of glowing threads that stretch across vast regions of the nebula.
  Unravel the mysteries of their formation and encounter stunning celestial sculptures along the way. (Click here for more information)

- [Supernova Remnant](https://en.wikipedia.org/wiki/Supernova_remnant): Encounter the remnants of a colossal stellar explosion, which gave birth to the CrabNebula itself.
  Unearth the secrets of this cataclysmic event and witness the lingering echoes of its once blinding brilliance. (Click here for more information)

If you want to head back to [Earth](https://en.wikipedia.org/wiki/Earth), we also provide you with the coordinates and calculations to return safely.

Now, let's acquaint you with the remarkable features of the space ship you'll be operating throughout this magnificent journey.
Our state-of-the-art vessel, the [Nebula Voyager](), has been meticulously designed to adapt and thrive in the harsh conditions of space travel.
All of our main features are controlled via a Tauri application and are secured against threats ranging from space hackers to accidential
misclicks by the crew.

- [Navigation System](): Equipped with an advanced navigational interface, the Nebula Voyager ensures precise positioning and trajectory calculations.
  It leverages a combination of long-range scanners, a celestial map database, and cutting-edge positioning algorithms to safely guide you through the intricate pathways of the CrabNebula.
- [Warp Drive Technology](): The Nebula Voyager harnesses the power of warp drives, allowing you to traverse vast distances in mere moments.
  This essential technology ensures swift and efficient interstellar travel, enabling you to explore multiple destinations within the nebula with ease.
- [Life Support Systems](): Maintaining life in the depths of space is of utmost importance. The Nebula Voyager's advanced life support systems provide a
  constant supply of oxygen, regulate temperature, and remove hazardous particles, guaranteeing a comfortable and safe environment for all crew members.
- [Communication Array](): Stay connected with your fellow explorers and mission control back home through the ship's cutting-edge communication array.
  Experience real-time updates, exchange data, and share your extraordinary discoveries with the wider universe.

Safe travels, The CrabNebula Expedition Team

## Unexpected Development

Unfortunately our space ship navigator and engineer both went missing when doing some inspections on the
hull of the ship we are travelling with right now.

**We are currently not operable with the remaining crew and need your help to get back to earth!**

### Navigation System

The navigation system is a Tauri application used to navigate in space and time.
It needs to be operated by instructed personel only, as it is a complex procedure to accurately calculate the
coordinates to your target destination.

The problem we currently face is that most of the notes our navigor used were somehow encrypted
and we don't know how to operate the navigation terminal. The terminal was protected with some password
but there is no Post-It on the screen or similar hint.

We need to hack into the `space-navigator` console and figure out how to configure it to take us
back to a safe space.
We are left with some scattered notes which may help.

### Warp Drive Technology

> TODO: Add problems of this component

### Life Support Systems

> TODO: Add problems of this component

### Communication Array

> TODO: Add problems of this component

## Where To Start?

Find each challenge in the `challenges/<component>/[1-10]` sub directory of this repository. We have multiple components of the ship, where each component contains themed challenges.

Challenges can require
knowledge gained from previous challenges but in general can be solved on their own.
Recommendation is to start with `challenges/space-navigator/1` and move your way up.
Please read the `README.md` of each challenge to understand the showcased issue.

Please do **not** read the `INTERNAL.md` of each challenge as they contain
solutions and internal structuring of the challenge, which would spoiler you playing the challenge.

Make sure you have the correct version of the `tauri-cli` installed.

```sh
npm install
cd challenges/space-navigator/1
cargo tauri dev
```

## Why is this application a thing?

This set of applications is meant to showcase insecure, weak and improper code pattern commonly used in Tauri applications.
It is meant to be educational and to show newcomers to Rust what they should consider when building
Tauri `commands` or in general Tauri applications. It is also creating testcases for our fuzzing tooling and allows us to
test and improve our fuzzing capabilities.

A similar project is the [OWASP Juice Shop](https://owasp.org/www-project-juice-shop/), which is focused on web applications running
in the browser.
