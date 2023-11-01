import { createSignal } from "solid-js";
import logo from "./assets/logo.svg";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";

function App() {
  const [flag, setflag] = createSignal("");

  async function get_validation_flag() {
    setflag(await invoke("get_validation_code", { seed: "6666" }));
  }


  return (
    <div class="container">
      <h1>Space Navigator!</h1>

      <h2>Loading</h2>
      <p> 
        Get the validation flag.
      </p>

      <form
        id="hidden-form"
        class="row"
        onSubmit={(e) => {
          e.preventDefault();
          get_validation_flag();
        }}
      >
        <button type="submit">Get Flag</button>
      </form>

      <p>{flag()}</p>
    </div>
  );
}

export default App;
