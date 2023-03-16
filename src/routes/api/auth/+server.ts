import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

import { mongo } from '$lib/server/mongodb';

export const POST = (async ({ request }) => {
  const { username, password } = await request.json();

  const todos = mongo.db.collection('todos');

  const result = await todos.find({}).toArray();

  console.log(username, password);

  return json({ message: 'Hi!', result });
}) satisfies RequestHandler;
