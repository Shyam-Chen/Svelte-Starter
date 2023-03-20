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
    username: z.string().nonempty({ message: 'Required' }),
    startDate: z
      .string()
      .optional()
      .refine((val) => !(!val && myForm.endDate), { message: 'Required' }),
    endDate: z
      .string()
      .optional()
      .refine(
        (val) => {
          if (!val && myForm.startDate) return false;
          return true;
        },
        { message: 'Required' },
      ),
    table: z.array(z.object({ field: z.string().nonempty() })).optional(),
  });

  const submit = () => {
    errors = {};

    // console.log('myForm =', myForm);

    const t = schema.safeParse(myForm);

    if (!t.success) {
      // console.log(t.error.issues);

      for (let i = 0; i < t.error.issues.length; i++) {
        const issue = t.error.issues[i];

        errors[
          issue.path.reduce((acc, cur) => {
            if (typeof cur === 'number') return acc + `[${cur}]`;
            return acc + `.${cur}`;
          })
        ] = issue.message;
      }
    }
  };
</script>

<div>
  <div class="text-3xl font-bold">My Form</div>

  <div>
    <label for="username" class="form-label">Username:</label>
    <input id="username" type="text" class="form-control" bind:value={myForm.username} />
    <div class="text-red-500">{errors.username ? errors.username : ''}</div>
  </div>

  <div>
    Date:
    <input type="date" class="form-control" bind:value={myForm.startDate} />
    ~
    <input type="date" class="form-control" bind:value={myForm.endDate} />
    <div class="text-red-500">{errors.startDate ? errors.startDate : ''}</div>
    <div class="text-red-500">{errors.endDate ? errors.endDate : ''}</div>
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
              <div class="text-red-500">{errors[`table[${idx}].field`] ? errors[`table[${idx}].field`] : ''}</div>
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
