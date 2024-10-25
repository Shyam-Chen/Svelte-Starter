<script lang="ts">
  import { browser } from '$app/environment';
  import { goto } from '$app/navigation';
  import TopAppBar from '$lib/components/TopAppBar.svelte';

  import type { Snippet } from 'svelte';

  interface Props {
    children?: Snippet;
  }

  let { children }: Props = $props();

  if (browser) {
    if (!localStorage.getItem('accessToken')) goto('/');

    // const expiresIn = localStorage.getItem('expiresIn');
    // if (expiresIn && new Date().toISOString() >= expiresIn) goto('/');
  }
</script>

<TopAppBar />

<div class="container mx-auto px-4 pt-16 min-h-screen">
  <ul>
    <li><a href="/dashboard" class="text-purple-500">/dashboard</a></li>
    <li></li>
    <li><a href="/users/eduardo" class="text-yellow-500">/users/eduardo</a></li>
    <li><a href="/users/eduardo/profile" class="text-red-500">/users/eduardo/profile</a></li>
    <li><a href="/users/eduardo/posts" class="text-blue-500">/users/eduardo/posts</a></li>
    <li></li>
    <li><a href="/counter" class="text-purple-500">Counter</a></li>
  </ul>

  {@render children?.()}
</div>
