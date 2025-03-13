import { component$, useSignal } from "@builder.io/qwik";
import { Icon } from "../Icon";

export default component$(() => {
  const searchFocus = useSignal(false);
  const inputRef = useSignal<HTMLInputElement>();

  return (
    <div
      class={`bg-surface-tertiary flex w-full items-center justify-center rounded-xl lg:transition-all ${searchFocus.value ? "absolute top-[85px] right-0 left-0 mx-auto max-w-[80vw] lg:static lg:mx-0 lg:max-w-60" : "max-w-10 lg:max-w-40"}`}
    >
      <div
        class="flex h-10 w-full max-w-10 items-center justify-center lg:justify-end"
        onClick$={() => {
          searchFocus.value = true;
          inputRef.value?.focus();
        }}
      >
        <Icon iconName="searchbar" height={24} width={24} />
      </div>
      <input
        ref={inputRef}
        onInput$={(_, el) => {
          console.log(el.value);
        }}
        onFocus$={() => (searchFocus.value = true)}
        onBlur$={() => (searchFocus.value = false)}
        value=""
        type="text"
        class={`text-secondary h-10 w-full border-none bg-transparent px-2 text-base outline-none placeholder:text-[#A0A0A0] lg:flex ${searchFocus.value ? "flex" : "hidden"}`}
        placeholder="Procurar"
      />
    </div>
  );
});
