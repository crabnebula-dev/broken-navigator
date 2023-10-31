import { For, createSignal } from "solid-js";
import logo from "./assets/logo.svg";
import { invoke} from "@tauri-apps/api/tauri";
import {BaseDirectory, readTextFile, readDir} from "@tauri-apps/api/fs"
import "./App.css";

function App() {

  const [password, setPassword] = createSignal("");
  const [passwordResult, setcheckPassword] = createSignal("");
  const [loadedLogs, setLoadLogFiles] = createSignal<string[]>([]);
  const [path, setLogPath] = createSignal("");
  const [content, setLogContent] = createSignal("");
  


  async function check_password() {
    setcheckPassword(await invoke("check_password", { password: password() }));
  }

  async function load_system_log() {
    setLogContent(await readTextFile(path(),{dir: BaseDirectory.Resource}).catch( (error: any) => setLogContent(error)));
  }

  async function load_log_folder_structure() {
    setLoadLogFiles([""]);
    let allPaths: string[] = [];
    const entries = await readDir(path(),{dir: BaseDirectory.Resource}).catch( (error: any) => { setLoadLogFiles([error.toString()])})
    if (entries)
    {
      // simplified top level directory display
      for (const entry of entries) {
        console.log(entry.path);
        allPaths.push(entry.path);
      }
      setLoadLogFiles(allPaths);
    }
  }



  return (
    <div class="container">
      <h1>Space Navigator!</h1>

      <h2>Password protected</h2>
      <p>
        The navigation features are password protected.
        Please unlock with the correct password to access the navigation system.
      </p>
      <input
          id="password-input"
          onChange={(e) => setPassword(e.currentTarget.value)}
          placeholder="*********"
        />
      <form
        class="row"
        onSubmit={(e) => {
          e.preventDefault();
          check_password();
        }}
      >
        <button type="submit">Check Password</button>
      </form>
      <p>Password check was: {passwordResult()}</p>

      <p>
        The system log is accessible without any authenticaton.
        You can show available logs and load them.
      </p>
      <input
          id="log-path-input"
          onChange={(e) => setLogPath(e.currentTarget.value)}
          placeholder="Enter log file or directory path..."
        />
      <form
        class="row"
        onSubmit={(e) => {
          e.preventDefault();
          load_system_log();
        }}
      >
        <button type="submit">Load Log</button>
      </form>

      <form
        class="row"
        onSubmit={(e) => {
          e.preventDefault();
          load_log_folder_structure();
        }}
      >
        <button type="submit">Show Files</button>
      </form>

      <h3>Log Files</h3>
      <For each={loadedLogs()}>{(path) =>
        <li>
          {path}
        </li>
        }
      </For>
      <h3>Log Content</h3>
      <p>
        <code>{content()}</code>
      </p>
    </div>
  );
}

export default App;
