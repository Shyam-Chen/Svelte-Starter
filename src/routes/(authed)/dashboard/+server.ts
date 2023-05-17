import type { RequestHandler } from './$types';
import { ChatEvent, chat_events } from './data';

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
