import type { QRL } from "@builder.io/qwik";
import { component$, Slot } from "@builder.io/qwik";

export default component$(
  ({
    adicionalClass,
    action,
  }: {
    adicionalClass?: string;
    action: QRL<() => void>;
  }) => {
    return (
      <button
        class={`bg-surface-quaternary text-tertiary h-10 w-full cursor-pointer rounded-xl opacity-100 transition-opacity hover:opacity-80 ${adicionalClass ? adicionalClass : ""}`}
        onClick$={action}
      >
        <Slot />
      </button>
    );
  },
);
