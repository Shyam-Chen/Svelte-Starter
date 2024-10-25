<script lang="ts">
  import type { Snippet } from 'svelte';

  import type { PageData } from './$types';

  interface Props {
    children?: Snippet;
    data: PageData;
  }

  let { children, data }: Props = $props();
</script>

<div class="user">
  <h2 class="text-2xl">User {data.params.username}</h2>
  {@render children?.()}
</div>
