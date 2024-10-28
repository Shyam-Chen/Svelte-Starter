<script lang="ts" module>
  let id = 0;
</script>

<script lang="ts">
  id += 1;

  import type { Snippet } from 'svelte';
  import type { HTMLInputAttributes } from 'svelte/elements';

  interface Props extends HTMLInputAttributes {
    label?: string;
    value?: string;
    invalid?: boolean | string;
    children?: Snippet;
  }

  let {
    label,
    value = $bindable(),
    invalid,
    class: classname,
    children,
    ...attrs
  }: Props = $props();
</script>

<div class="form-field">
  <label for={`s-${id}`} class="form-label">{label}</label>
  <input id={`s-${id}`} bind:value class="form-control" {...attrs} />

  {#if invalid}
    <div class="text-red-500 text-sm mt-1">{invalid}</div>
  {/if}
</div>

<style lang="scss">
  .form-field {
    @apply flex flex-col w-full;
  }

  .form-label {
    @apply mb-1 empty:hidden;
  }

  .form-control {
    @apply border border-blue-500 rounded focus:outline-0 focus:ring-2 focus:ring-blue-400;
    @apply px-2 py-1;
  }
</style>
