import type { RequestHandler } from './$types';

interface MessageEvent {
  id?: string;
  event?: string;
  data: string | object;
  retry?: number;
}

function writeMessage(event: MessageEvent): string {
  let payload = '';

  if (event.id) payload += `id: ${event.id}\n`;
  if (event.event) payload += `event: ${event.event}\n`;
  if (event.data) payload += `data: ${JSON.stringify(event.data)}\n`;
  if (event.retry) payload += `retry: ${event.retry}\n`;
  if (!payload) return '';
  payload += '\n';

  return payload;
}

export const GET = (async () => {
  let timer: ReturnType<typeof setInterval>;

  const stream = new ReadableStream({
    start(controller) {
      timer = setInterval(() => {
        controller.enqueue(
          writeMessage({
            id: String(timer),
            event: 'message',
            data: new Date().toLocaleString(),
          }),
        );
      }, 1000);
    },
    cancel() {
      clearInterval(timer);
    },
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive',
    },
  });
}) satisfies RequestHandler;
