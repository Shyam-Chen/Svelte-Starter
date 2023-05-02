import type { ZodSchema } from 'zod';
import type { Writable } from 'svelte/store';

export default (schema: ZodSchema, form: Writable<any>, valdn: Writable<any>) => {
  let _form: any;

  let watch = false;

  form.subscribe((val) => {
    _form = val;

    if (watch) {
      validate();
    }
  });

  function validate() {
    watch = true;
    valdn.set({});

    const parsed = schema.safeParse(_form);

    if (!parsed.success) {
      for (let i = 0; i < parsed.error.issues.length; i++) {
        const issue = parsed.error.issues[i];

        valdn.update((curValdn) => ({
          ...curValdn,
          [issue.path.reduce((acc, cur) => {
            if (typeof cur === 'number') return acc + `[${cur}]`;
            return acc + `.${cur}`;
          })]: issue.message,
        }));
      }
    }

    return parsed.success;
  }

  return {
    validate,
    stop() {
      watch = false;
    },
  };
};
