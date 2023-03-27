<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import uniqueId from 'lodash/uniqueId';

  export let label = '';
  export let value = '';

  export let touched = false;
  let _touched = false;
  export let errorMessage = '';

  const id = uniqueId('text-field-');

  const dispatch = createEventDispatcher();

  const onBlur = () => {
    _touched = true;
    dispatch('blur');
  };
</script>

<div class="form-field">
  <label for={id} class="form-label">{label}</label>
  <input {id} bind:value class="form-control" {...$$restProps} on:blur={onBlur} />

  {#if (touched || _touched) && errorMessage}
    <div class="text-red-500 text-sm mt-1">{errorMessage}</div>
  {/if}
</div>

<style lang="scss">
  .form-field {
    --at-apply:  flex flex-col w-full;
  }

  .form-label {
    --at-apply:  mb-1 empty:hidden;
  }

  .form-control {
    --at-apply:  border border-blue-500 rounded focus:outline-0 focus:ring-2 focus:ring-blue-400;
    --at-apply:  px-2 py-1;
  }
</style>
