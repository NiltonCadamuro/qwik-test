import { component$ } from "@builder.io/qwik";

export const SkeletonPostPage = component$(() => {
  return (
    <>
      <div class="bg-secondary mb-6 h-10 w-full animate-pulse rounded-xl"></div>
      <div class="bg-secondary mb-6 h-6 w-full animate-pulse rounded-xl"></div>
      <div class="bg-secondary mb-6 h-[400px] w-full animate-pulse rounded-xl"></div>
      <div class="mt-10 flex items-center gap-4">
        <div class="bg-secondary h-[90px] w-[90px] animate-pulse rounded-full"></div>
        <div class="flex flex-col gap-1">
          <div class="bg-secondary h-6 w-40 animate-pulse rounded-xl"></div>
          <div class="bg-secondary h-4 w-60 animate-pulse rounded-xl"></div>
        </div>
      </div>
    </>
  );
});
