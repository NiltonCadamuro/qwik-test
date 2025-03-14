import { $, component$, useSignal } from "@builder.io/qwik";
import { Title } from "../Title";

export const FormPost = component$(() => {
  const titleRef = useSignal<HTMLInputElement>();
  const contentRef = useSignal<HTMLTextAreaElement>();
  const thumbUrlRef = useSignal<HTMLInputElement>();

  const handleSubmit = $((e: Event) => {
    e.preventDefault();
    e.stopPropagation();
    const title = titleRef.value?.value;
    const content = contentRef.value?.value;
    const thumbUrl = thumbUrlRef.value?.value;

    console.log({ title, content, thumbUrl });
  });

  return (
    <form
      class="mx-auto w-full max-w-lg py-9"
      onSubmit$={handleSubmit}
      preventdefault:submit
    >
      <Title h={4} style="text-4xl text-primary font-bold mb-6">
        Create Post
      </Title>
      <label for="title" class="text-secondary mb-4 block text-sm font-bold">
        Title:
        <input
          ref={titleRef}
          name="title"
          type="text"
          placeholder="Your post title here"
          class="bg-surface-tertiary text-secondary mt-2 h-10 w-full rounded-lg border-none px-2 text-base font-normal outline-none placeholder:text-[#A0A0A0]"
        />
      </label>

      <label for="content" class="text-secondary mb-4 block text-sm font-bold">
        Content:
        <textarea
          ref={contentRef}
          name="content"
          placeholder="Your post content here (Accepts HTML)"
          class="bg-surface-tertiary text-secondary mt-2 h-40 w-full rounded-lg border-none p-2 text-base font-normal outline-none placeholder:text-[#A0A0A0]"
        ></textarea>
      </label>

      <label for="thumbUrl" class="text-secondary mb-6 block text-sm font-bold">
        Thumbnail URL:
        <input
          ref={thumbUrlRef}
          name="thumbUrl"
          type="text"
          placeholder="Your post thumbnail URL here"
          class="bg-surface-tertiary text-secondary mt-2 h-10 w-full rounded-lg border-none px-2 text-base font-normal outline-none placeholder:text-[#A0A0A0]"
        />
      </label>

      <button
        type="submit"
        class="bg-primary text-surface-primary h-10 w-full cursor-pointer rounded-lg opacity-100 hover:opacity-80"
      >
        Create Post
      </button>
    </form>
  );
});
