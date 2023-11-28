import Layout from "space-navigator-shared/layout";
import readme from "../README.md?raw";
import { invoke } from "@tauri-apps/api/tauri";
import { BaseDirectory, readTextFile } from "@tauri-apps/api/fs";
import { createSignal } from "solid-js";


function App() {
  const [loadNavigation, setloadNavigation] = createSignal("The coordinates will show up here when loaded.");
  const [name, setNavigationPath] = createSignal("");
  

  async function load_navigation_readme() {
    setloadNavigation(await invoke("load_navigation_readme", { path: name() }));
  }

  async function load_navigation_readme_via_frontend() {
    setloadNavigation(
      await readTextFile(name(), { dir: BaseDirectory.Resource }).catch(
        (error) => setloadNavigation(error)
      )
    );
  }

 
  return (
    <Layout markdown={readme}>
      <article class="prose prose-invert my-4 xl:prose-lg">
       <h3>Coordinate Manager!</h3>
       <p>
        We need the correct coordinates for Earth, they should be somewhere in here.
        Can you find them?
       </p>
       <div class="relative w-8/12">
       <form
          class="m-8 flex items-center justify-center font-mono sm:w-[65ch]"
          onSubmit={(e) => {
            e.preventDefault();
            load_navigation_readme_via_frontend();
          }}
        >
        <input
          id="path-input"
          onChange={(e) => setNavigationPath(e.currentTarget.value)}
          value={"navigation/"}
          class="peer h-10 w-full rounded-l-lg border-2 border-slate-800 bg-slate-950 p-4 placeholder-transparent outline-none"
          type="text"
          autocorrect="off"
          autocapitalize="none"
          aria-autocomplete="none"
          placeholder="Enter navigation file path..."
        />
        <button class="h-10 rounded-r-lg bg-slate-800 px-4 text-base/4" type="submit">Load via Frontend</button>
        </form>
        </div>
        
        <div class="relative w-8/12">
        <form
          id="hidden-form"
          class="m-8 flex items-center justify-center font-mono sm:w-[65ch]"
          onSubmit={(e) => {
            e.preventDefault();
            load_navigation_readme();
          }}
        >
          <button hidden="hidden" class="h-10 rounded bg-slate-800 px-4 text-base/4" type="submit">
            Load via Rust
          </button>
        </form>
        </div>
        <p>{loadNavigation()}</p>
      </article>
    </Layout>
  );
}

export default App;
