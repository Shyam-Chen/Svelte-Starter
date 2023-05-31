import { chats } from '$lib/server/chat-emitter';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ depends }) => {
  depends('chats');
  return { chats };
};
