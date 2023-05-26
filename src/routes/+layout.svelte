<script lang="ts">
  import '@unocss/reset/tailwind.css';
  import 'uno.css';
</script>

<svelte:head>
  <script>
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  </script>
</svelte:head>

<div class="h-full antialiased text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900">
  <slot />
</div>
