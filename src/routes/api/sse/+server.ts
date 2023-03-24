import type { RequestHandler } from './$types';

function writeEvent(source: any): string {
  let payload = '';

  if (source.id) payload += `id: ${source.id}\n`;
  if (source.event) payload += `event: ${source.event}\n`;
  if (source.data) payload += `data: ${JSON.stringify(source.data)}\n`;
  if (source.retry) payload += `retry: ${source.retry}\n`;
  if (!payload) return '';
  payload += '\n';

  return payload;
}

export const GET = (async () => {
  const stream = new ReadableStream({
    start(controller) {
      controller.enqueue(writeEvent({ id: 1, event: 'message', data: { foo: 'bar ' } }));
    },
    // cancel() {
    //   // ...
    // },
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive',
    },
  });
}) satisfies RequestHandler;
