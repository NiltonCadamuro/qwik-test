import { component$ } from "@builder.io/qwik";

export const SkeletonCard = component$(() => {
  return (
    <div class="flex cursor-pointer items-center justify-between gap-2 lg:gap-4">
      <div class="flex w-full items-center gap-4 lg:gap-6">
        <div class="bg-secondary h-[80px] w-[150px] animate-pulse rounded-xl"></div>
        <div class="bg-secondary flex h-[80px] w-full animate-pulse flex-col gap-1 rounded-xl"></div>
      </div>
    </div>
  );
});
