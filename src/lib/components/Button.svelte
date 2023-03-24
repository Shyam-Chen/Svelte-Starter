<script lang="ts">
</script>

<button class="button" {...$$restProps} on:click><slot /></button>

<style>
  .button {
    @apply inline-flex justify-center items-center vertical-middle;
    @apply min-w-16 px-4 py-1.5 rounded shadow;
    @apply text-sm;

    @apply text-white bg-blue-500;
  }
</style>
