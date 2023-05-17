<script lang="ts">
  import { onMount } from 'svelte';

  import { enhance } from '$app/forms';
  import { invalidate } from '$app/navigation';
  import TextField from '$lib/components/TextField.svelte';
  import Button from '$lib/components/Button.svelte';

  import type { PageData, ActionData } from './$types';

  export let data: PageData;

  export let form: ActionData;

  let user: string = '';

  $: if (form?.join && !user) set_user();

  function set_user() {
    user = form?.user;
  }

  function subscribe() {
    const sse = new EventSource('/dashboard');
    sse.onmessage = () => invalidate('chats');
    return () => sse.close();
  }

  onMount(subscribe);
</script>

<main>
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
              {#if chat.user === form?.user}
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
      <form
        action="?/send"
        method="post"
        on:reset={() => console.log('reset')}
        use:enhance={() =>
          ({ form, result, update }) => {
            if (result.type === 'success') {
              const message_input = form.elements.namedItem('message');
              if (message_input instanceof HTMLInputElement) {
                message_input.value = '';
                return;
              }
            }
            update();
          }}
      >
        <input type="text" name="name" value={user} hidden />
        <TextField type="text" name="message" placeholder="Type your message" autofocus required />
        <Button>Send</Button>
      </form>
    {:else}
      <form action="?/join" method="post" use:enhance>
        <TextField type="text" name="name" placeholder="Your name" required />
        <Button>Join</Button>
      </form>
    {/if}

    {#if form?.message}
      <br />
      <em>{form?.message}</em>
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
