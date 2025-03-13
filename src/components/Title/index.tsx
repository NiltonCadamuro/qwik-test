import { component$, Slot } from "@builder.io/qwik";

export const Title = component$(
  ({ h, style }: { h: 1 | 2 | 3 | 4 | 5 | 6; style?: string }) => {
    const Tag = `h${h}` as const;
    return (
      <Tag class={style}>
        <Slot />
      </Tag>
    );
  },
);
