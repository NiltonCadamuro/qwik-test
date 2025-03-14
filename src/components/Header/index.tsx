import { component$ } from "@builder.io/qwik";
import { Logo } from "../Logo";
import SearchBar from "../SearchBar";
import { Link } from "@builder.io/qwik-city";
import { Icon } from "../Icon";
import { Modal } from "../Modal";

export default component$(() => {
  return (
    <div class="bg-surface-secondary border-surface-tertiary fixed top-0 z-50 h-20 w-full border-b px-4 py-3">
      <div class="mx-auto flex h-full max-w-6xl items-center justify-between">
        <div class="max-w-[104px]">
          <Logo />
        </div>
        <div class="flex w-full items-center justify-end gap-2 lg:gap-8">
          <SearchBar />
          <div class="flex w-full max-w-36 items-center gap-2">
            <Modal />
            <Link
              href="/"
              class="bg-surface-tertiary group hover:bg-surface-quaternary flex h-10 w-10 items-center justify-center rounded-xl transition-all"
            >
              <Icon
                iconName="notification"
                height={20}
                width={20}
                style="h-5 group-hover:brightness-0 group-hover:invert transition-all"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
});
