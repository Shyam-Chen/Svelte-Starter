<script lang="ts">
  import { browser } from '$app/environment';
  import { goto } from '$app/navigation';

  import { z } from 'zod';

  const schema = z
    .object({
      username: z.string().nonempty({ message: '此欄位必填' }),
      startDate: z.string().optional(),
      endDate: z.string().optional(),
      table: z.array(z.object({ field: z.string().nonempty() })),
    })
    .refine(
      ({ startDate, endDate }) => {
        if (startDate && !endDate) return false;
        return true;
      },
      { message: '日期區間必填', path: ['startDate'] },
    )
    .refine(
      ({ startDate, endDate }) => {
        if (endDate && !startDate) return false;
        return true;
      },
      { message: '日期區間必填', path: ['endDate'] },
    );

  let startDate = '';
  let endDate = '';

  let username = '';
  let password = '';

  const myForm = {};

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

  const table = z.array(
    z.object({
      field: z.string().nonempty(),
    }),
  );

  let errors = {} as Record<string, string>;

  const testZod = () => {
    errors = {};

    const t = schema.safeParse({
      startDate,
      endDate,
      username,
      table: [{ field: 'xxx' }, { field: '' }],
    });
    console.log(t);

    if (!t.success) {
      console.log(t.error.issues);

      for (let i = 0; i < t.error.issues.length; i++) {
        const issue = t.error.issues[i];

        errors[issue.path.join('.')] = issue.message;
      }
    }
  };
</script>

<div>
  <div class="text-3xl font-bold">My Form</div>

  <label for="username" class="form-label">Username:</label>
  <input id="username" type="text" class="form-control" bind:value={username} />

  <input type="date" class="form-control" bind:value={startDate} /> ~
  <input type="date" class="form-control" bind:value={endDate} />
</div>

<input type="date" bind:value={startDate} /> ~ <input type="date" bind:value={endDate} />

<input type="date" bind:value={startDate} /> ~ <input type="date" bind:value={endDate} />
<button class="border border-blue-500" on:click={testZod}>Zod</button>

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
    @apply border border-blue-500 rounded focus\:outline-0 focus\:ring-2 focus\:ring-blue-400 my-2;
  }
</style>
