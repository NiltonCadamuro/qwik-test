import { component$ } from "@builder.io/qwik";
import { Container } from "~/components/Container";
import { Title } from "~/components/Title";
import { formatDate } from "~/utils/formatDate";

export default component$(() => {
  const mockPostData = {
    title: "Post 1",
    createdAt: "2021-09-01",
    content: "<img src='https://fakeimg.pl/1920x1080' alt=''/><p>Content 1</p>",
    thumbUrl: "https://fakeimg.pl/150x80/",
    author: "Author 1",
    authorPhoto: "https://fakeimg.pl/150x150/",
    authorDescription: "Author description",
    id: 1,
  };

  return (
    <Container>
      <Title h={1} style="text-4xl text-primary font-bold mb-6">
        {mockPostData.title}
      </Title>
      <p class="mb-6 text-base text-[#A0A0A0]">
        Published on {formatDate(mockPostData.createdAt, false)} by{" "}
        {mockPostData.author}
      </p>
      <div
        dangerouslySetInnerHTML={mockPostData.content}
        class="post-content mb-6"
      ></div>
      <div class="mt-10 flex items-center gap-4">
        <img
          src={mockPostData.authorPhoto}
          alt={mockPostData.author}
          class="contain max-h-[90px] max-w-[90px] overflow-hidden rounded-full"
          width={90}
          height={90}
        />
        <div class="flex flex-col gap-1">
          <p class="text-secondary text-xl">{mockPostData.author}</p>
          <p class="text-base text-[#A0A0A0]">
            {mockPostData.authorDescription}
          </p>
        </div>
      </div>
    </Container>
  );
});
