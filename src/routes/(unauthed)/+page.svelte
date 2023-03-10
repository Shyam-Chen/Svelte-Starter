<script lang="ts">
  import { browser } from '$app/environment';
  import { goto } from '$app/navigation';

  let username = '';
  let password = '';

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
</script>

Username: <input
  type="text"
  class="border border-blue-500 rounded focus:outline-0 focus:ring-2 focus:ring-blue-400"
  bind:value={username}
/>
Password: <input type="password" class="border border-blue-500" bind:value={password} />

<button class="border border-blue-500" on:click={signIn}>Sign in</button>
