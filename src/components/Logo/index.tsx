import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { Icon } from "../Icon";

export const Logo = component$(() => {
  return (
    <Link href="/" class="flex items-center gap-1">
      <Icon iconName="logo" height={34} width={40} />
      <div class="new-xm:!flex hidden flex-col justify-center">
        <span class="text-primary text-base leading-4 font-bold tracking-widest">
          ANCIENT
        </span>
        <span class="text-primary text-base leading-4 tracking-widest">
          BLOG
        </span>
      </div>
    </Link>
  );
});
