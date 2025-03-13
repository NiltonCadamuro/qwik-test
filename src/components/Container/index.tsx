import { component$, Slot } from "@builder.io/qwik";

export const Container = component$(() => {
  return (
    <div class="w-full px-4">
      <div class="mx-auto w-full max-w-5xl">
        <Slot />
      </div>
    </div>
  );
});
