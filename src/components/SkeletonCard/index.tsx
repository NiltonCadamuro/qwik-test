import { component$ } from "@builder.io/qwik";

export const SkeletonCard = component$(() => {
  return (
    <div class="mx-auto w-[176px] rounded-md">
      <div class="h-[235px] w-[176px] animate-pulse rounded-xl bg-secondary"></div>
      <div class="mt-3 h-24 animate-pulse rounded-xl bg-secondary"></div>
    </div>
  );
});
