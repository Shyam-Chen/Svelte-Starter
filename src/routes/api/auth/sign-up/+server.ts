import { json } from '@sveltejs/kit';
import pbkdf2 from 'pbkdf2-passworder';

// import { mongo } from '$lib/server/mongodb';

import type { RequestHandler } from './$types';

export const POST = (async ({ request }) => {
  const { username, password } = await request.json();

  const hashedPassword = await pbkdf2.hash(password);

  console.log('username =', username);
  console.log('hashedPassword =', hashedPassword);

  return json({ message: 'Hi!' });
}) satisfies RequestHandler;
