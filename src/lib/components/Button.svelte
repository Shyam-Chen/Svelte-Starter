<script lang="ts">
</script>

<button class="button {$$props.class}" on:click><slot /></button>

<style lang="scss">
  .button {
    --at-apply: inline-flex justify-center items-center vertical-middle;
    --at-apply: w-full min-w-16 px-4 py-1.5 rounded shadow;
    --at-apply: text-sm;

    --at-apply: text-white bg-blue-500;
  }
</style>
