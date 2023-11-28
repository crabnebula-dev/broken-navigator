import {
  createEffect,
  createMemo,
  createSignal,
  VoidComponent,
} from "solid-js";

// we export it so that the checker can set it
export const [status, setStatus] = createSignal(false);

const Lock: VoidComponent = () => {
  let animation: SVGAnimateElement;
  createEffect(() => status() && animation.beginElement());

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="h-24 w-24 pt-4 transition-colors duration-500"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
      >
        <animate
          ref={animation!}
          dur="0.5s"
          attributeName="d"
          to="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
          fill="freeze"
          begin="indefinite"
        />
      </path>
    </svg>
  );
};

const Status: VoidComponent = () => {
  const color = createMemo(() =>
    status() ? "text-lime-500" : "text-rose-500",
  );

  return (
    <div class={`flex flex-col items-center ${color()}`}>
      <Lock />
      <div class="my-2">
        <span class="text-slate-400">Status: </span>
        <span class={color()}>{status() ? "Unlocked" : "Locked"}</span>
      </div>
    </div>
  );
};

export default Status;
