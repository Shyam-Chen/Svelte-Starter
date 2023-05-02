<script lang="ts">
  import { writable } from 'svelte/store';
  import { z } from 'zod';

  import TextField from '$lib/components/TextField.svelte';
  import Button from '$lib/components/Button.svelte';
  import useSchema from '$lib/composables/useSchema';

  const form = writable<{ name?: string; email?: string }>({});
  const valdn = writable<Record<string, string>>({});

  const msgs = {
    required: 'This is a required field',
  };

  const schema = useSchema(
    z.object({
      name: z.string({ required_error: msgs.required }).nonempty(msgs.required),
      email: z.string({ required_error: msgs.required }).nonempty(msgs.required),
    }),
    form,
    valdn,
  );

  const submit = () => {
    if (schema.validate()) {
      console.log('passed', $form);
    }
  };
</script>

<div class="page">
  <div>Dashboard</div>

  <div class="max-w-100 p-6 shadow-md">
    <div class="flex flex-col gap-3">
      <TextField label="Name" bind:value={$form.name} errorMessage={$valdn.name} />
      <TextField label="Email" bind:value={$form.email} errorMessage={$valdn.email} />
    </div>

    <Button class="mt-6" on:click={submit}>Submit</Button>
  </div>

  <pre>{JSON.stringify($form, null, 2)}</pre>
  <pre>{JSON.stringify($valdn, null, 2)}</pre>
</div>
