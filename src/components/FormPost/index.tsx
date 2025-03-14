import type { QRL } from "@builder.io/qwik";
import { $, component$, useContext, useSignal } from "@builder.io/qwik";
import { Title } from "../Title";
import { PostsContext } from "~/context/PostsContext";

export const FormPost = component$(({ close }: { close: QRL<() => void> }) => {
  const postsStore = useContext(PostsContext) as PostContextProps;

  const titleRef = useSignal<HTMLInputElement>();
  const contentRef = useSignal<HTMLTextAreaElement>();
  const thumbUrlRef = useSignal<HTMLInputElement>();

  const handleSubmit = $((e: Event) => {
    e.preventDefault();
    e.stopPropagation();
    const title = titleRef.value?.value;
    const content = contentRef.value?.value;
    const thumbUrl = thumbUrlRef.value?.value;

    if (!title || !content || !thumbUrl) return;

    postsStore.posts.push({
      title,
      content,
      thumbUrl,
      createdAt: new Date().toISOString(),
      author: "You",
      authorPhoto: "https://fakeimg.pl/150/?text=You",
      authorDescription: "You are the author of this post",
      id: postsStore.posts.length + 1,
    });

    postsStore.totalPages = Math.ceil(postsStore.posts.length / 10);
    const startIndex = (postsStore.currentPage - 1) * 10;
    const endIndex = startIndex + 10;
    postsStore.filteredPosts = postsStore.posts.slice(startIndex, endIndex);

    close();
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
