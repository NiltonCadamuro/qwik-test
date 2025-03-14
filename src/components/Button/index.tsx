import { component$, Slot } from "@builder.io/qwik";

export default component$(({ adicionalClass, action }: ButtonProps) => {
  return (
    <button
      class={`bg-surface-quaternary text-tertiary opacity- h-10 w-full cursor-pointer rounded-xl transition-opacity hover:opacity-80 ${adicionalClass ? adicionalClass : ""}`}
      onClick$={action}
    >
      <Slot />
    </button>
  );
});
