<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLInputAttributes } from 'svelte/elements';
  import uniqueId from 'lodash/uniqueId';

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

  const uid = uniqueId('uid-');
</script>

<div class="form-field">
  <label for={uid} class="form-label">{label}</label>
  <input id={uid} bind:value class="form-control" {...attrs} />

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
