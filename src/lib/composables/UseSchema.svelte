<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { ZodSchema } from 'zod';

  export let schema: ZodSchema;
  export let form: Record<string, unknown>;
  export let valdn: Record<string, unknown>;

  const dispatch = createEventDispatcher();

  const validate = (form: Record<string, unknown>) => {
    valdn = {};

    const parsed = schema.safeParse(form);

    if (!parsed.success) {
      for (let i = 0; i < parsed.error.issues.length; i++) {
        const issue = parsed.error.issues[i];

        valdn[
          issue.path.reduce((acc, cur) => {
            if (typeof cur === 'number') return acc + `[${cur}]`;
            return acc + `.${cur}`;
          })
        ] = issue.message;
      }
    }

    dispatch('valdn', valdn);
    return parsed.success;
  };

  $: validate(form);
</script>
