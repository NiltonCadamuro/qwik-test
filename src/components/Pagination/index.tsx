import { component$ } from "@builder.io/qwik";

export const Pagination = component$(() => {
  const mockPages = {
    quantity: 100,
    currentPage: 5,
  };

  const visiblePages = [];
  const totalPages = mockPages.quantity;
  const currentPage = mockPages.currentPage;

  if (currentPage > 2) visiblePages.push(1);

  if (currentPage > 3) visiblePages.push("...");

  for (
    let i = Math.max(1, currentPage - 1);
    i <= Math.min(totalPages, currentPage + 1);
    i++
  ) {
    visiblePages.push(i);
  }

  if (currentPage < totalPages - 2) visiblePages.push("...");

  if (currentPage < totalPages - 1) visiblePages.push(totalPages);

  return (
    <div class="mt-10 flex justify-center gap-1 lg:gap-2">
      {visiblePages.map((page, index) =>
        typeof page === "number" ? (
          <button
            key={index}
            class={`bg-surface-tertiary text-primary border-surface-quaternary h-10 w-10 cursor-pointer rounded-xl border border-solid transition-opacity hover:opacity-80 ${
              currentPage === page
                ? "!bg-surface-quaternary !text-tertiary"
                : ""
            }`}
            onClick$={() => {
              console.log("Go to page", page);
            }}
          >
            {page}
          </button>
        ) : (
          <span
            key={index}
            class="flex h-10 w-10 items-center justify-center tracking-widest text-gray-500"
          >
            {page}
          </span>
        ),
      )}
    </div>
  );
});
