import type { VoidComponent } from "solid-js";
import Layout from "space-navigator-shared/layout";
import README from "../README.md?raw";
import { createSignal } from "solid-js";
import { invoke } from "@tauri-apps/api/tauri";

const App: VoidComponent = () => {
  const [flag, setflag] = createSignal("");

  async function get_validation_flag() {
    setflag(await invoke("get_validation_code", { seed: "6666" }));
  }

  return (
    <Layout markdown={README}>
      <article class="prose prose-invert my-4 xl:prose-lg">
        <h3>Coordinate Manager!</h3>
        <p>
          This tool helps us to change and set coordinates but the whole user
          interface seems broken. This button is the only thing that still
          works...
        </p>
        <div class="relative w-8/12">
          <form
            id="flag-print-form"
            class="row"
            onSubmit={(e) => {
              e.preventDefault();
              get_validation_flag();
            }}
          >
            <button
              class="h-10 rounded bg-slate-800 px-4 text-base/4"
              type="submit"
            >
              Check Coordinates
            </button>
          </form>
        </div>
        <p>{flag()}</p>
      </article>
    </Layout>
  );
};

export default App;
