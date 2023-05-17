import { fail } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';
import { chats, send_chat } from './data';

export const load: PageServerLoad = ({ depends }) => {
  depends('chats');
  return { chats };
};

export const actions: Actions = {
  async join({ request }) {
    const form = await request.formData();
    const name = form.get('name')?.toString();

    if (!name) return fail(400, { message: 'Please fill your name!' });

    send_chat({ user: name, message: '', type: 'join' });
    return { user: name, join: true };
  },

  async send({ request }) {
    const form = await request.formData();
    const name = form.get('name')?.toString();
    const message = form.get('message')?.toString();

    if (!name || !message) {
      return fail(400, { message: 'Name or message required!' });
    }

    send_chat({ user: name, message, type: 'message' });
    return { user: name, sent: true };
  },
};
