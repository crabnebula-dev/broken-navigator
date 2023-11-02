import { Accessor, createRenderEffect, Signal } from "solid-js";

export function textInput(
  el: HTMLInputElement,
  value: Accessor<Signal<string>>,
) {
  const [field, setField] = value();
  createRenderEffect(() => (el.value = field()));
  el.addEventListener("input", ({ target }) => {
    if (target && "value" in target && typeof target["value"] === "string") {
      setField(target.value);
    }
  });
}
