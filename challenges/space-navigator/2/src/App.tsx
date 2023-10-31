import { createSignal } from "solid-js";
import logo from "./assets/logo.svg";
import { invoke } from "@tauri-apps/api/tauri";
import {BaseDirectory, readTextFile , writeTextFile } from "@tauri-apps/api/fs"
import "./App.css";

function App() {
  const [loadNavigation, setloadNavigation] = createSignal("");
  const [name, setNavigationPath] = createSignal("");

  async function load_navigation_readme() {
    setloadNavigation(await invoke("load_navigation_readme", { path: name() }));
  }

  async function load_navigation_readme_via_frontend() {
    setloadNavigation(await readTextFile(name(),{dir: BaseDirectory.Resource}).catch( error => setloadNavigation(error)));
  }

  return (
    <div class="container">
      <h1>Space Navigator!</h1>

      <h2>Loading</h2>
      <p> 
        Load navigation files and use these to insert into the navigation system.
      </p>
      <input
          id="path-input"
          onChange={(e) => setNavigationPath(e.currentTarget.value)}
          value={"navigation"}
          placeholder="Enter navigation file path..."
        />
      <form
        id="hidden-form"
        class="row"
        onSubmit={(e) => {
          e.preventDefault();
          load_navigation_readme();
        }}
      >
        <button hidden="hidden" type="submit">Load via Rust</button>
      </form>

      <form
        class="row"
        onSubmit={(e) => {
          e.preventDefault();
          load_navigation_readme_via_frontend();
        }}
      >
        <button type="submit">Load via Frontend</button>
      </form>

      <p>{loadNavigation()}</p>
    </div>
  );
}

export default App;
