import {
  createEffect,
  createSignal,
  For,
  onMount,
  Show,
  VoidComponent,
} from "solid-js";
import { BaseDirectory, readDir, readTextFile } from "@tauri-apps/api/fs";
import { textInput } from "space-navigator-shared/util";
import { resourceDir } from "@tauri-apps/api/path";

export const [input, setInput] = createSignal("");
export const [files, setFiles] = createSignal<string[]>([]);
export const [content, setContent] = createSignal("");
export const [error, setError] = createSignal<string | null>(null);

const fetchFile = (path: string) =>
  readTextFile(path, { dir: BaseDirectory.Resource })
    .catch(setError)
    .then(setContent);

// we need to re-assign to prevent TypeScript from stripping it
const textInputModel = textInput;
declare module "solid-js" {
  export namespace JSX {
    interface DirectiveFunctions {
      textInputModel: typeof textInputModel;
    }
  }
}

const fetchFiles = async () => {
  const base = await resourceDir();
  return readDir(input(), {
    dir: BaseDirectory.Resource,
  })
    .then((entries) => {
      const paths = [];
      for (const entry of entries) {
        let relative = entry.path.slice(base.length);
        console.log("found file", relative);
        paths.push(relative);
      }

      setError(null);
      setFiles(paths);
    })
    .catch((error) => {
      setFiles([]);
      if (error.startsWith("path not allowed on the configured scope")) {
        setError(`Path not allowed: $RESOURCE/${input()}`);
      } else if (error.startsWith("No such file or directory (os error 2)")) {
        setError(`Path not found: $RESOURCE/${input()}`);
      } else {
        console.error("💩", "Unexpected IO Error", error);
      }
    });
};

const NoFiles: VoidComponent = () => (
  <Show
    when={error()}
    fallback={<p>Files will show here when searched for.</p>}
  >
    <p class="mb-8 font-mono text-rose-500">{error()}</p>
  </Show>
);

const FoundFiles: VoidComponent = () => {
  let scroll: HTMLElement;
  onMount(() => scroll.scrollIntoView({ behavior: "smooth" }));

  return (
    <section ref={scroll!} class="bg-slate-950 p-6 font-mono">
      <p>SELECT FILE TO LOAD</p>
      <p>-------------------</p>
      <ul class="pt-2">
        <For each={files()}>
          {(file) => (
            <li
              class="m-1 cursor-pointer underline"
              onClick={() => fetchFile(file)}
            >
              {file}
            </li>
          )}
        </For>
      </ul>
    </section>
  );
};

const Form: VoidComponent = () => (
  <form
    class="m-8 flex items-center justify-center font-mono sm:w-[65ch]"
    onSubmit={async (e) => {
      e.preventDefault();
      await fetchFiles();
    }}
  >
    <div class="relative w-8/12">
      <input
        use:textInputModel={[input, setInput]}
        id="log-path-input"
        class="peer h-10 w-full rounded-l-lg border-2 border-slate-800 bg-slate-950 p-4 placeholder-transparent outline-none"
        type="text"
        autocorrect="off"
        autocapitalize="none"
        aria-autocomplete="none"
        placeholder="Enter a path..."
      />
      <label
        for="log-path-input"
        class="
            absolute -top-4 left-4 bg-transparent text-sm text-slate-400 transition-all
            peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-sm
            "
      >
        Directory Searcher
      </label>
    </div>
    <button type="submit" class="h-10 rounded-r-lg bg-slate-800 px-4">
      Search
    </button>
  </form>
);

const Content: VoidComponent = () => {
  let codeScroll: HTMLDivElement;
  createEffect(
    () => content() && codeScroll.scrollIntoView({ behavior: "smooth" }),
  );

  return (
    <div ref={codeScroll!} class="w-full bg-slate-950">
      <pre class="overflow-x-auto p-4 text-sm">
        <code>{content()}</code>
      </pre>
    </div>
  );
};

const DirectorySearcher: VoidComponent = () => (
  <>
    <Form />

    <Show when={files().length > 0} fallback={<NoFiles />}>
      <FoundFiles />
    </Show>

    <Show when={content()}>
      <Content />
    </Show>
  </>
);

export default DirectorySearcher;
