<script lang="ts">
  import { onMount } from 'svelte';
  import { useSchema } from 'svelte-formor';
  import * as v from 'valibot';

  import { browser } from '$app/environment';
  import { goto } from '$app/navigation';
  import TextField from '$lib/components/TextField.svelte';
  import Button from '$lib/components/Button.svelte';

  interface Form {
    email?: string;
    password?: string;
  }

  let form = $state<Form>({});
  let valdn = $state<Partial<Record<keyof Form, string>>>({});

  let locale = $state({
    required: 'This is a required field',
    email: `This must be a valid email`,
  });

  const schema = $derived(
    useSchema(
      v.object({
        email: v.nullish(
          v.pipe(v.string(), v.minLength(1, locale.required), v.email(locale.email)),
          '',
        ),
        password: v.nullish(v.pipe(v.string(), v.minLength(1, locale.required)), ''),
      }),
      form,
      valdn,
    ),
  );

  const submit = async () => {
    if (schema.validate()) {
      console.log('passed', form);

      const response = await fetch('/api/auth/sign-in', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ ...form }),
      });

      await response.json();

      if (browser) localStorage.setItem('accessToken', 'xxx');

      goto('/dashboard');
    }
  };

  let time = $state(new Date().toLocaleString());

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
      <TextField
        label="Email"
        bind:value={form.email}
        invalid={valdn.email}
        autocomplete="off"
      />

      <TextField
        label="Password"
        type="password"
        bind:value={form.password}
        invalid={valdn.password}
      />
    </div>

    <Button class="mt-6" onclick={submit}>Submit</Button>
  </div>

  <div class="text-center my-2">{time}</div>

  <div>
    <pre>{JSON.stringify(form, null, 2)}</pre>
    <pre>{JSON.stringify(valdn, null, 2)}</pre>
  </div>
</div>
