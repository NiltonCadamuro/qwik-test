import { component$, useSignal } from "@builder.io/qwik";
import { Title } from "../Title";

import { SkeletonCard } from "../SkeletonCard";
import { PostCard } from "../PostCard";
import { Pagination } from "../Pagination";

export const GalleryPosts = component$(() => {
  const posts = useSignal<PostProps[]>([
    {
      title: "Post 1",
      createdAt: "2021-09-01",
      content: "<p>Content 1</p>",
      thumbUrl: "https://fakeimg.pl/150x80/",
      author: "Author 1",
      id: 1,
      authorPhoto: "https://fakeimg.pl/150x150/",
      authorDescription: "Author description",
    },
    {
      title: "Post 1",
      createdAt: "2021-09-01",
      content: "<p>Content 1</p>",
      thumbUrl: "https://fakeimg.pl/150x80/",
      author: "Author 1",
      id: 1,
      authorPhoto: "https://fakeimg.pl/150x150/",
      authorDescription: "Author description",
    },
    {
      title: "Post 1",
      createdAt: "2021-09-01",
      content: "<p>Content 1</p>",
      thumbUrl: "https://fakeimg.pl/150x80/",
      author: "Author 1",
      id: 1,
      authorPhoto: "https://fakeimg.pl/150x150/",
      authorDescription: "Author description",
    },
    {
      title: "Post 1",
      createdAt: "2021-09-01",
      content: "<p>Content 1</p>",
      thumbUrl: "https://fakeimg.pl/150x80/",
      author: "Author 1",
      id: 1,
      authorPhoto: "https://fakeimg.pl/150x150/",
      authorDescription: "Author description",
    },
    {
      title: "Post 1",
      createdAt: "2021-09-01",
      content: "<p>Content 1</p>",
      thumbUrl: "https://fakeimg.pl/150x80/",
      author: "Author 1",
      id: 1,
      authorPhoto: "https://fakeimg.pl/150x150/",
      authorDescription: "Author description",
    },
    {
      title: "Post 1",
      createdAt: "2021-09-01",
      content: "<p>Content 1</p>",
      thumbUrl: "https://fakeimg.pl/150x80/",
      author: "Author 1",
      id: 1,
      authorPhoto: "https://fakeimg.pl/150x150/",
      authorDescription: "Author description",
    },
    {
      title: "Post 1",
      createdAt: "2021-09-01",
      content: "<p>Content 1</p>",
      thumbUrl: "https://fakeimg.pl/150x80/",
      author: "Author 1",
      id: 1,
      authorPhoto: "https://fakeimg.pl/150x150/",
      authorDescription: "Author description",
    },
    {
      title: "Post 1",
      createdAt: "2021-09-01",
      content: "<p>Content 1</p>",
      thumbUrl: "https://fakeimg.pl/150x80/",
      author: "Author 1",
      id: 1,
      authorPhoto: "https://fakeimg.pl/150x150/",
      authorDescription: "Author description",
    },
  ]);

  return (
    <div>
      <Title h={2} style="text-4xl text-primary font-bold mb-6">
        Todos os Posts
      </Title>
      <div class="flex flex-col gap-6">
        {posts.value.length
          ? posts.value.map((post: PostProps, index: number) => (
              <PostCard post={post} key={index} />
            ))
          : Array.from({ length: 10 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))}
      </div>
      <Pagination />
      {/* <div
        class="grid gap-3 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
        ref={loadMoreRef}
      >
        {loading.value &&
          Array.from({ length: 10 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
      </div> */}
    </div>
  );
});
