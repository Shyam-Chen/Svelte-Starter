<script lang="ts">
  import { z } from 'zod';

  import TextField from '$lib/components/TextField.svelte';
  import UseSchema from '$lib/composables/UseSchema.svelte';

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
  };
</script>

<UseSchema {schema} {form} bind:valdn />

<div>Dashboard</div>

<TextField label="Name" {touched} bind:value={form.name} errorMessage={valdn.name} />

<pre>{JSON.stringify(form, null, 2)}</pre>
<pre>{JSON.stringify(valdn, null, 2)}</pre>

<button class="border border-blue-500" on:click={submit}>Submit</button>
