<script lang="ts">
  import { z } from 'zod';

  import TextField from '$lib/components/TextField.svelte';
  import Button from '$lib/components/Button.svelte';
  import UseSchema from '$lib/composables/UseSchema.svelte';

  let success = false;

  const schema = z.object({
    name: z
      .string({ required_error: 'This is a required field' })
      .nonempty('This is a required field'),
  });

  const form = {} as z.infer<typeof schema>;
  let valdn = {} as Record<string, string>;

  let touched = false;

  const submit = () => {
    touched = true;

    console.log('success', success);

    if (success) {
      console.log('passed', form);
    }
  };
</script>

<UseSchema bind:success {schema} {form} bind:valdn />

<div class="page">
  <div>Dashboard</div>

  <div class="max-w-100 p-6 shadow-md">
    <TextField label="Name" {touched} bind:value={form.name} errorMessage={valdn.name} />

    <Button class="mt-6" on:click={submit}>Submit</Button>
  </div>

  <pre>{JSON.stringify(form, null, 2)}</pre>
  <pre>{JSON.stringify(valdn, null, 2)}</pre>
</div>
