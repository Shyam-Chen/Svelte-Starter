<script lang="ts">
  import { onMount } from 'svelte';

  import TextField from '$lib/components/TextField.svelte';
  import Button from '$lib/components/Button.svelte';

  import { state, doubleCount, increment, reset, initialize } from './store';

  let initialized = false;

  initialize();

  onMount(() => {
    initialized = true;
  });
</script>

{#if initialized}
  <div class="mt-20">
    <div>Count: {$state.count}</div>
    <div>Double Count: {$doubleCount}</div>
    <Button on:click={increment}>Increment</Button>
    <Button on:click={reset}>Reset</Button>

    <hr />

    <TextField bind:value={$state.text} />
    <div>{$state.text}</div>
  </div>
{:else}
  <div class="mt-20">
    <div>Loading...</div>
  </div>
{/if}
