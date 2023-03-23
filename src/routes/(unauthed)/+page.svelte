<script lang="ts">
  import { z } from 'zod';

  import { browser } from '$app/environment';
  import { goto } from '$app/navigation';
  import TextField from '$lib/components/TextField.svelte';

  let username = '';
  let password = '';

  interface MyForm {
    username?: string;
    email?: string;
    startDate?: string;
    endDate?: string;
    table?: Array<{ field?: string }>;
  }

  const myForm = {} as MyForm;

  // valdn

  let result = {};

  const signIn = async () => {
    const response = await fetch('/api/auth', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    result = await response.json();

    if (browser) localStorage.setItem('accessToken', 'xxx');

    goto('/dashboard');
  };

  let errors = {} as Record<string, string>;

  const add = () => {
    myForm.table = [...(myForm.table || []), {}];
  };

  const del = (idx: number) => {
    const arr = [...(myForm.table || [])];
    arr.splice(idx, 1);
    myForm.table = arr;
  };

  const schema = z.object({
    username: z
      .string({ required_error: 'This is a required field' })
      .nonempty('This is a required field'),
    email: z
      .string({ required_error: 'This is a required field' })
      .email('')
      .nonempty('This is a required field'),
    startDate: z
      .string()
      .optional()
      .refine((val) => !(!val && myForm.endDate), 'This is a required field'),
    endDate: z
      .string()
      .optional()
      .refine((val) => !(myForm.startDate && !val), 'This is a required field'),
    table: z
      .array(
        z.object({
          field: z
            .string({ required_error: 'This is a required field' })
            .nonempty('This is a required field'),
        }),
      )
      .optional(),
  });

  const validate = (target: any) => {
    errors = {};

    const parsed = schema.safeParse(target);

    if (!parsed.success) {
      for (let i = 0; i < parsed.error.issues.length; i++) {
        const issue = parsed.error.issues[i];

        errors[
          issue.path.reduce((acc, cur) => {
            if (typeof cur === 'number') return acc + `[${cur}]`;
            return acc + `.${cur}`;
          })
        ] = issue.message;
      }
    }

    return parsed.success;
  };

  let trigger = false;

  const submit = () => {
    trigger = true;

    if (validate(myForm)) {
      //
    }
  };

  // const reset = () => {
  //   trigger = false;
  //   errors = {};
  // };

  $: validate(myForm);
</script>

<div>
  <div class="text-3xl font-bold">My Form</div>

  <div class="grid grid-cols-2 gap-4">
    <TextField
      label="Username:"
      bind:value={myForm.username}
      touched={trigger}
      errorMessage={errors.username}
    />
    <TextField
      label="Email:"
      bind:value={myForm.email}
      touched={trigger}
      errorMessage={errors.email}
    />

    <div class="flex flex-col">
      Date Range:
      <div class="flex items-baseline gap-2">
        <TextField
          type="date"
          bind:value={myForm.startDate}
          touched={trigger}
          errorMessage={errors.startDate}
        />
        ~
        <TextField
          type="date"
          bind:value={myForm.endDate}
          touched={trigger}
          errorMessage={errors.endDate}
        />
      </div>
    </div>
  </div>

  <div class="my-4">
    <button class="button primary" on:click={add}>Add</button>

    <table>
      <tbody>
        {#each myForm.table || [] as { field }, idx}
          <tr>
            <td>{idx}</td>
            <td>
              <input type="text" bind:value={field} class="form-control" />
              <div class="text-red-500">
                {errors[`table[${idx}].field`] ? errors[`table[${idx}].field`] : ''}
              </div>
            </td>
            <td>
              <button class="border border-blue-500" on:click={() => del(idx)}>Del</button>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>

  <button class="button primary" on:click={submit}>Submit</button>
  <!-- <button class="button primary" on:click={reset}>Reset</button> -->

  <pre>{JSON.stringify(errors, null, 2)}</pre>
</div>

<hr class="my-4" />

Username:
<input
  type="text"
  class="border border-blue-500 rounded focus:outline-0 focus:ring-2 focus:ring-blue-400"
  bind:value={username}
/>
Password: <input type="password" class="border border-blue-500" bind:value={password} />

<button class="button primary" on:click={signIn}>Sign in</button>

<style lang="scss">
  .form-control {
    @apply border border-blue-500 rounded focus\:outline-0 focus\:ring-2 focus\:ring-blue-400;
  }

  .button {
    @apply flex justify-center items-center gap-2 px-6 py-2 border rounded uppercase text-sm font-medium;
    @apply shadow-md hover\:shadow-lg;
    @apply focus\:outline-none focus\:ring-2 focus\:ring-blue-400 focus\:shadow-lg;
  }

  .primary {
    @apply bg-blue-600 text-blueGray-200 border-blue-600;

    //   @apply hover\:text-blueGray-300 hover\:bg-blue-700;
    //   @apply dark\:hover\:text-blueGray-300 dark\:hover\:bg-blue-700;

    //   @apply active\:bg-blue-400 dark\:active:bg-blue-800;
  }
</style>
