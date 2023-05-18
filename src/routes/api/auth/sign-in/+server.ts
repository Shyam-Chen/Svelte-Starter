import { json } from '@sveltejs/kit';
// import { randomUUID } from 'crypto';
// import pbkdf2 from 'pbkdf2-passworder';
// import jwt from 'fast-jwt';

// import { mongo } from '$lib/server/mongodb';

import type { RequestHandler } from './$types';

export const POST = (async ({ request }) => {
  const { username, password } = await request.json();

  console.log(username, password);

  // const users = mongo.db.collection('users');
  // const user = await users?.findOne({ username: { $eq: username } });

  // const isMatch = await pbkdf2.compare(password, user.password);

  // const signSync = jwt.createSigner({ key: 'secret' });
  // const uuid = randomUUID();
  // const accessToken = signSync({ a: 1, b: 2, c: 3, expiresIn: '10m' });
  // const refreshToken = signSync({ a: 1, b: 2, c: 3, expiresIn: '1d' });

  // const todos = mongo.db.collection('todos');
  // const result = await todos.find({}).toArray();

  return json({ message: 'Hi!' });
}) satisfies RequestHandler;
