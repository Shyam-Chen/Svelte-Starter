import { json, error } from '@sveltejs/kit';

import type { RequestHandler } from './$types';
import { ChatEvent, chat_events, send_chat } from '$lib/server/chat-emitter';

export const GET: RequestHandler = () => {
  const event = new ChatEvent();
  chat_events.push(event);

  const stream = new ReadableStream({
    start(controller) {
      event.on('chat', () => {
        controller.enqueue('event: message\ndata:\n\n');
      });
    },
    cancel() {
      const index = chat_events.indexOf(event);
      if (~index) chat_events.splice(index, 1);
    },
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive',
    },
  });
};

export const POST: RequestHandler = async ({ request }) => {
  const { name } = await request.json();

  if (!name) throw error(400, { message: 'Please fill your name!' });

  send_chat({ user: name, message: '', type: 'join' });
  return json({ user: name, join: true });
};
