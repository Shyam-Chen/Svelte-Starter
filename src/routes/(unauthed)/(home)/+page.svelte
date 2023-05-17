<script lang="ts">
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import { useSchema } from 'svelte-formor';
  import { z } from 'zod';

  import { browser } from '$app/environment';
  import { goto } from '$app/navigation';
  import TextField from '$lib/components/TextField.svelte';
  import Button from '$lib/components/Button.svelte';

  const form = writable<{ email?: string; password?: string }>({});
  const valdn = writable<Record<string, string>>({});

  const msgs = {
    required: 'This is a required field',
  };

  const schema = useSchema(
    z.object({
      email: z.string({ required_error: msgs.required }).nonempty(msgs.required),
      password: z.string({ required_error: msgs.required }).nonempty(msgs.required),
    }),
    form,
    valdn,
  );

  const submit = async () => {
    if (schema.validate()) {
      console.log('passed', $form);

      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ ...$form }),
      });

      await response.json();

      if (browser) localStorage.setItem('accessToken', 'xxx');

      goto('/dashboard');
    }
  };

  let time = '';

  function subscribe() {
    const sse = new EventSource('/api/sse');

    sse.onmessage = (evt) => {
      time = JSON.parse(evt.data);
    };

    return () => sse.close();
  }

  onMount(() => {
    const unsubscribe = subscribe();
    return () => unsubscribe();
  });
</script>

<div class="page">
  <div class="min-w-100 p-6 shadow-md">
    <div class="flex flex-col gap-3">
      <TextField label="Email" bind:value={$form.email} errorMessage={$valdn.email} />

      <TextField
        label="Password"
        type="password"
        bind:value={$form.password}
        errorMessage={$valdn.password}
      />
    </div>

    <Button class="mt-6" on:click={submit}>Submit</Button>
  </div>

  <div class="text-center my-2">{time}</div>

  <div>
    <pre>{JSON.stringify($form, null, 2)}</pre>
    <pre>{JSON.stringify($valdn, null, 2)}</pre>
  </div>
</div>
