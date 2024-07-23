<script lang="ts">
  import { onMount } from 'svelte';

  import { invalidate } from '$app/navigation';
  import TextField from '$lib/components/TextField.svelte';
  import Button from '$lib/components/Button.svelte';
  import request from '$lib/utils/request';

  import type { PageData } from './$types';

  export let data: PageData;

  let user = '';
  let name = '';
  let message = '';

  function subscribe() {
    const sse = new EventSource('/api/chats');
    sse.onmessage = () => invalidate('chats');
    return () => sse.close();
  }

  onMount(subscribe);

  async function send() {
    await request('/chats/send', { method: 'POST', body: { name: user, message } });
    message = '';
  }

  async function join() {
    await request('/chats', { method: 'POST', body: { name } });
    user = name;
    name = '';
  }
</script>

<main class="mt-20">
  <p>
    Open in <a href="/dashboard" target="_blank" rel="noopener noreferrer" class="underline"
      >new tab</a
    > and join as other user
  </p>

  <fieldset>
    <legend>Chat Room</legend>

    <section>
      <article>
        {#each data.chats as chat}
          {#if chat.type === 'join'}
            <p><mark>{chat.user}</mark> joined</p>
          {:else}
            <p>
              <strong>{chat.user}</strong>
              {#if chat.user === user}
                <em>(you)</em>
              {/if}
              : {chat.message}
            </p>
          {/if}
        {:else}
          <em>No chat yet</em>
        {/each}
      </article>
    </section>

    {#if user}
      <TextField
        bind:value={message}
        placeholder="Type your message"
        autofocus
        required
        autocomplete="off"
      />
      <Button onclick={send}>Send</Button>
    {:else}
      <TextField bind:value={name} placeholder="Your name" required autocomplete="off" />
      <Button onclick={join}>Join</Button>
    {/if}
  </fieldset>
</main>

<style>
  fieldset {
    max-width: 16rem;
    max-height: 24rem;
    @apply border m-4 px-2 py-1;
  }

  section {
    height: 100%;
    overflow-y: auto;
    display: flex;
    flex-direction: column-reverse;
  }
</style>
