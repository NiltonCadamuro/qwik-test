import { $, component$, useSignal } from "@builder.io/qwik";
import Button from "../Button";
import { FormPost } from "../FormPost";

export const Modal = component$(() => {
  const modalRef = useSignal<HTMLDialogElement>();

  const openModal = $(() => {
    modalRef.value?.showModal();
  });

  const closeModal = $(() => {
    modalRef.value?.close();
  });

  return (
    <>
      <Button adicionalClass="max-w-24" action={openModal}>
        New Post
      </Button>

      <dialog
        ref={modalRef}
        class="fixed inset-1/2 w-[90vw] max-w-[624px] -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-white p-6 shadow-lg backdrop:bg-black backdrop:opacity-50"
      >
        <button
          class="absolute top-4 right-4 cursor-pointer"
          onClick$={closeModal}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <FormPost close={closeModal} />
      </dialog>
    </>
  );
});
