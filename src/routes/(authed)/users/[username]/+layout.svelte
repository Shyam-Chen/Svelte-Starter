<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<div class="user">
  <h2 class="text-2xl">User {data.params.username}</h2>
  <slot></slot>
</div>
