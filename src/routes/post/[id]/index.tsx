import { component$, useContext, useStore, useTask$ } from "@builder.io/qwik";
import { Container } from "~/components/Container";
import { Title } from "~/components/Title";
import { formatDate } from "~/utils/formatDate";
import { fetchPostById } from "~/utils/graphql";
import { useLocation } from "@builder.io/qwik-city";
import { SkeletonPostPage } from "~/components/SkeletonPostPage";
import { PostsContext } from "~/context/PostsContext";

export default component$(() => {
  const postsStore = useContext(PostsContext) as PostContextProps;

  const post = useStore<PostProps>({
    title: "",
    createdAt: "",
    content: "",
    thumbUrl: "",
    author: "",
    authorPhoto: "",
    authorDescription: "",
    id: 0,
  });
  const location = useLocation();

  useTask$(async () => {
    const id = location.params.id;
    if (!id) return;

    try {
      const data = await fetchPostById(id);

      if (!data) {
        Object.assign(post, postsStore.selectedPost);
        return;
      }

      Object.assign(post, data);
    } catch (error) {
      console.error("Erro ao buscar post:", error);
    }
  });

  return (
    <Container>
      {post.title !== "" ? (
        <>
          <Title h={1} style="text-4xl text-primary font-bold mb-6 break-words">
            {post.title}
          </Title>
          <p class="mb-6 text-base text-[#A0A0A0]">
            Published on {formatDate(post.createdAt, false)} by {post.author}
          </p>
          <div
            dangerouslySetInnerHTML={post.content}
            class="post-content mb-6"
          ></div>
          <div class="mt-10 flex items-center gap-4">
            <img
              src={post.authorPhoto}
              alt={post.author}
              class="contain max-h-[90px] max-w-[90px] overflow-hidden rounded-full"
              width={90}
              height={90}
            />
            <div class="flex flex-col gap-1">
              <p class="text-secondary text-xl break-words">{post.author}</p>
              <p class="text-base break-words text-[#A0A0A0]">
                {post.authorDescription}
              </p>
            </div>
          </div>
        </>
      ) : (
        <SkeletonPostPage />
      )}
    </Container>
  );
});
