import { createSignal } from "solid-js";
import logo from "./assets/logo.svg";
import { invoke } from "@tauri-apps/api/tauri";
import {BaseDirectory, readTextFile , writeTextFile } from "@tauri-apps/api/fs"
import "./App.css";

function App() {
  const [loadNavigation, setloadNavigation] = createSignal("");
  const [name, setNavigationPath] = createSignal("");

  const [writeNavigation, setwriteNavigation] = createSignal("");
  const [path, setNavigationOutputPath] = createSignal("");
  const [content, setNavigationOutputContent] = createSignal("");

  async function load_navigation_readme() {
    setloadNavigation(await invoke("load_navigation_readme", { path: name() }));
  }

  async function load_navigation_readme_via_frontend() {
    setloadNavigation(await readTextFile(name(),{dir: BaseDirectory.Temp}).catch( error => setloadNavigation(error)));
  }

  async function write_navigation_readme() {
    setwriteNavigation(await invoke("write_navigation_event", { path: path(), eventData: content() }));
  }

  async function write_navigation_readme_via_frontend() {
    setwriteNavigation(await writeTextFile(name(), content(),{dir: BaseDirectory.Temp}).catch( error => setloadNavigation(error)));
  }

  return (
    <div class="container">
      <h1>Space Navigator!</h1>

      <h2>Loading</h2>
      <p> It is possible to load the navigation file from custom written
        Rust code or using the Tauri FS API. For Rust loading the absolute
        Path is needed <code>/tmp/foobar</code> whereas with the
        Tauri API, the folder is already pre-set to <code>$TMP</code> and
        only the file name <code>foobar</code> is needed.
      </p>
      <input
          id="greet-input"
          onChange={(e) => setNavigationPath(e.currentTarget.value)}
          placeholder="Enter navigation file path..."
        />
      <form
        class="row"
        onSubmit={(e) => {
          e.preventDefault();
          load_navigation_readme();
        }}
      >
        <button type="submit">Load via Rust</button>
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

      <h2>Writing</h2>
      <p> It is possible to write the navigation file with custom written
        Rust code or using the Tauri FS API. For Rust writing the absolute
        Path is needed <code>/tmp/foobar</code> whereas with the
        Tauri API, the folder is already pre-set to <code>$TMP</code> and
        only the file name <code>foobar</code> is needed.
      </p>
      <input
          id="path-input"
          onChange={(e) => setNavigationOutputPath(e.currentTarget.value)}
          placeholder="Enter navigation file path..."
        />
         <input
          id="content-input"
          onChange={(e) => setNavigationOutputContent(e.currentTarget.value)}
          placeholder="Enter navigation file content..."
        />
      <form
        class="row"
        onSubmit={(e) => {
          e.preventDefault();
          write_navigation_readme();
        }}
      >
        <button type="submit">Write via Rust</button>
      </form>

      <form
        class="row"
        onSubmit={(e) => {
          e.preventDefault();
          write_navigation_readme_via_frontend();
        }}
      >
        <button type="submit">Write via Frontend</button>
      </form>

      <p>{writeNavigation()}</p>
    </div>
  );
}

export default App;
