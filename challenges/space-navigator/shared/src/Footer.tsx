import { VoidComponent } from "solid-js";
import { open } from "@tauri-apps/api/shell";

const Footer: VoidComponent = () => (
  <footer class="m-4 mt-12 text-center text-xs">
    <a class="cursor-pointer" onClick={() => open("https://crabnebula.dev")}>
      Copyright © 2024 CrabNebula Ltd.
    </a>
  </footer>
);

export default Footer;
