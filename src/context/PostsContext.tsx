import {
  component$,
  createContextId,
  Slot,
  useContextProvider,
  useStore,
} from "@builder.io/qwik";

export const PostsContext = createContextId<PostContextProps>("PostsContext");

export const PostsProvider = component$(() => {
  const postsStore = useStore<PostContextProps>({
    posts: [],
    filteredPosts: [],
    currentPage: 1,
    totalPages: 1,
    selectedPost: null,
    searchedTerm: null,
  });

  useContextProvider(PostsContext, postsStore);

  return <Slot />;
});
