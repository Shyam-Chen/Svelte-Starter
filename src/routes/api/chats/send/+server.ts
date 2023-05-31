import { json, error } from '@sveltejs/kit';

import { send_chat } from '$lib/server/chat-emitter';

import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
  const { name, message } = await request.json();

  if (!name || !message) {
    throw error(400, { message: 'Name or message required!' });
  }

  send_chat({ user: name, message, type: 'message' });
  return json({ user: name, sent: true });
};
