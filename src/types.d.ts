import type { QRL } from "@builder.io/qwik";

declare global {
  interface ButtonProps {
    adicionalClass?: string;
    action: QRL<() => void>;
  }

  interface PostProps {
    title: string;
    createdAt: string;
    content: string;
    thumbUrl: string;
    author: string;
    authorPhoto: string;
    authorDescription: string;
    id: number;
  }
}
