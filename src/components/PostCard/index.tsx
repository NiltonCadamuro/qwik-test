import { component$, useContext } from "@builder.io/qwik";
import { Title } from "../Title";
import { useNavigate } from "@builder.io/qwik-city";
import { formatDate } from "~/utils/formatDate";
import { PostsContext } from "~/context/PostsContext";

export const PostCard = component$(({ post }: { post: PostProps }) => {
  const nav = useNavigate();
  const postsStore = useContext(PostsContext) as PostContextProps;

  return (
    <div
      class="flex cursor-pointer items-center justify-between gap-2 lg:gap-4"
      onClick$={() => {
        postsStore.selectedPost = post;
        nav(`/post/${post.id}`);
      }}
    >
      <div class="flex w-full items-center gap-4 lg:gap-6">
        <div class="flex-shrink-0">
          <img
            src={post.thumbUrl}
            alt={post.title}
            class="contain max-h-[80px] max-w-[150px] overflow-hidden rounded-xl"
            width={150}
            height={80}
            loading="eager"
          />
        </div>
        <div class="flex flex-col gap-1">
          <Title
            h={3}
            style="text-base font-medium text-secondary break-words whitespace-break-spaces w-full break-all"
          >
            {post.title}
          </Title>
          <div>
            <p class="text-xs break-words break-all whitespace-break-spaces text-[#A0A0A0]">
              {formatDate(post.createdAt, true)}{" "}
              <strong class="font-medium break-words break-all whitespace-break-spaces">
                by {post.author}
              </strong>
            </p>
          </div>
        </div>
      </div>
      <div class="text-secondary text-base font-bold tracking-widest">...</div>
    </div>
  );
});
