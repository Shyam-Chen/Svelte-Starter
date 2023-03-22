<script lang="ts">
  import { browser } from '$app/environment';
  import { goto } from '$app/navigation';

  import { z } from 'zod';

  let username = '';
  let password = '';

  interface MyForm {
    username?: string;
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
      .nonempty({ message: 'This is a required field' }),
    startDate: z
      .string()
      .optional()
      .refine((val) => !(!val && myForm.endDate), { message: 'This is a required field' }),
    endDate: z
      .string()
      .optional()
      .refine(
        (val) => {
          if (!val && myForm.startDate) return false;
          return true;
        },
        { message: 'This is a required field' },
      ),
    table: z.array(z.object({ field: z.string().nonempty() })).optional(),
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

  const reset = () => {
    trigger = false;
    errors = {};
  };

  $: trigger && validate(myForm);
</script>

<div>
  <div class="text-3xl font-bold">My Form</div>

  <div class="form-field">
    <label for="username" class="form-label">Username:</label>
    <input id="username" type="text" class="form-control" bind:value={myForm.username} />

    <div class="text-red-500">{errors.username ? errors.username : ''}</div>
  </div>

  <div class="flex gap-2">
    Date:
    <div>
      <input type="date" class="form-control" bind:value={myForm.startDate} />
      <div class="text-red-500">{errors.startDate ? errors.startDate : ''}</div>
    </div>
    ~
    <div>
      <input type="date" class="form-control" bind:value={myForm.endDate} />
      <div class="text-red-500">{errors.endDate ? errors.endDate : ''}</div>
    </div>
  </div>

  <div>
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
  <button class="button primary" on:click={reset}>Reset</button>

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

<button class="border border-blue-500" on:click={signIn}>Sign in</button>

<style lang="scss">
  $primary-color: 'blue';

  .form-field {
    @apply my-2;
  }

  .form-label {
    color: $primary-color;
  }

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
