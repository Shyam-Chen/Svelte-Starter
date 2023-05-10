import type { ZodSchema } from 'zod';
import type { Writable } from 'svelte/store';

const debounce = (fn: any, ms = 300) => {
  let timeoutId: ReturnType<typeof setTimeout>;

  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};

export default (schema: ZodSchema, form: Writable<any>, valdn: Writable<any>) => {
  let watch = false;

  const debouncing = debounce(() => {
    validate();
  });

  let _form: any;

  form.subscribe((val) => {
    _form = val;
    if (watch) debouncing();
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
