import type { PageLoad } from './$types';

export const load = (({ params }) => {
  return {
    params,
  };
}) satisfies PageLoad;
