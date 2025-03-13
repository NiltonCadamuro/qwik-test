import { component$ } from "@builder.io/qwik";

export const Icon = component$(
  ({
    iconName,
    width,
    height,
    style,
  }: {
    iconName: string;
    width: number;
    height: number;
    style?: string;
  }) => {
    return (
      <img
        src={`/icons/${iconName}.png`}
        class={style}
        alt={iconName}
        width={width}
        height={height}
      />
    );
  },
);
