import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Container } from "~/components/Container";
import { GalleryPosts } from "~/components/GalleryPosts";

export default component$(() => {
  return (
    <>
      <Container>
        <GalleryPosts />
      </Container>
    </>
  );
});

export const head: DocumentHead = {
  title: "Ancent Blog",
  meta: [
    {
      name: "description",
      content: "A blog about the latest web technologies.",
    },
  ],
};
