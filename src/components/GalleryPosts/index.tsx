import { component$, useContext, useTask$ } from "@builder.io/qwik";
import { Title } from "../Title";
import { fetchPosts } from "../../utils/graphql";
import { SkeletonCard } from "../SkeletonCard";
import { PostCard } from "../PostCard";
import { Pagination } from "../Pagination";
import { PostsContext } from "~/context/PostsContext";

export const GalleryPosts = component$(() => {
  const postsStore = useContext(PostsContext) as PostContextProps;

  useTask$(async () => {
    if (postsStore.posts.length > 0) return;
    await fetchPosts().then((data) => {
      postsStore.posts = data;
      postsStore.totalPages = Math.ceil(data.length / 10);
      const startIndex = (postsStore.currentPage - 1) * 10;
      const endIndex = startIndex + 10;
      postsStore.filteredPosts = data.slice(startIndex, endIndex);
    });
  });

  return (
    <div>
      <Title h={2} style="text-4xl text-primary font-bold mb-6">
        {postsStore.searchedTerm !== null
          ? `Searching for ${postsStore.searchedTerm}`
          : "All Posts"}
      </Title>
      <div class="flex flex-col gap-6">
        {postsStore.filteredPosts.length > 0
          ? postsStore.filteredPosts.map((post, index) => (
              <PostCard post={post} key={index} />
            ))
          : Array.from({ length: 10 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))}
      </div>
      <Pagination />
    </div>
  );
});
