<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLButtonAttributes } from 'svelte/elements';

  interface Props extends HTMLButtonAttributes {
    children?: Snippet;
  }

  let { class: classname, children, ...others }: Props = $props();
</script>

<button type="button" class="button {classname}" {...others}>
  {@render children?.()}
</button>

<style lang="scss">
  .button {
    @apply inline-flex justify-center items-center vertical-middle;
    @apply w-full min-w-16 px-4 py-1.5 rounded shadow;
    @apply text-sm;
    @apply text-white bg-blue-500 hover:bg-blue-600;
  }
</style>
