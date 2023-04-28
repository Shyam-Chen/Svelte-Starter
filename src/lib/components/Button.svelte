<script lang="ts">
</script>

<button class="button {$$props.class}" on:click><slot /></button>

<style lang="scss">
  .button {
    @apply inline-flex justify-center items-center vertical-middle;
    @apply w-full min-w-16 px-4 py-1.5 rounded shadow;
    @apply text-sm;

    @apply text-white bg-blue-500;
  }
</style>
