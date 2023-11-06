import { createSignal, VoidComponent } from "solid-js";
import { setStatus } from "./Status.tsx";
import { invoke } from "@tauri-apps/api/tauri";
import { textInput } from "./util.tsx";

export const [input, setInput] = createSignal("");

// we need to re-assign to prevent TypeScript from stripping it
const textInputModel = textInput;
declare module "solid-js" {
  export namespace JSX {
    interface DirectiveFunctions {
      textInputModel: typeof textInputModel;
    }
  }
}

const [borderColor, setBorderColor] = createSignal(
  "border-primary-dark focus:border-primary",
);
const [wasInvalid, setWasInvalid] = createSignal(false);
const submit = async () => {
  let result = await invoke("check_flag", { flag: input() });
  if (typeof result === "boolean") {
    if (setStatus(result)) {
      setWasInvalid(false);
      setBorderColor("border-lime-500 focus:border-lime-500");
    } else {
      setWasInvalid(true);
      setBorderColor("border-rose-500 focus:border-rose-500");
    }
  } else {
    console.error(
      "💩",
      "failed to get flag result from backend, this isn't an intentional error",
    );
  }
};

const flagForm: VoidComponent = () => {
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        await submit();
      }}
      class="m-4 flex items-center font-mono"
    >
      <div class="relative">
        <input
          use:textInputModel={[input, setInput]}
          id="input-flag"
          type="text"
          autocorrect="off"
          autocapitalize="none"
          aria-autocomplete="none"
          placeholder="flag"
          class={`${borderColor()} peer h-10 border-b-2 bg-slate-950 px-2 placeholder-transparent focus:outline-none`}
        />
        <label
          for="input-flag"
          class="
            absolute -top-4 left-2 text-sm text-slate-400 transition-all
            peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-sm
            "
        >
          flag
        </label>
        <p
          class={`${
            wasInvalid() ? "" : "hidden"
          } absolute -bottom-8 text-rose-500 `}
        >
          Invalid flag.
        </p>
      </div>

      <input
        class="h-9 border-b-2 border-b-primary-light bg-primary-light px-6 text-background"
        type="submit"
        hidden
      />
    </form>
  );
};

export default flagForm;
