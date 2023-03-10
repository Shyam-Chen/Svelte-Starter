import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST = (async ({ request }) => {
  const { username, password } = await request.json();

  console.log(username, password);

  return json({ message: 'Hi!' });
}) satisfies RequestHandler;
