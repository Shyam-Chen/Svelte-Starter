import { EventEmitter } from 'node:events';

type Chat = {
  user: string;
  message: string;
  type?: 'join' | 'message';
};

export const chats: Chat[] = [];

export class ChatEvent extends EventEmitter {
  notify() {
    this.emit('chat');
  }
}

export const chat_events: ChatEvent[] = [];

export function send_chat(chat: Chat) {
  chats.push(chat);

  for (const event of chat_events) {
    event.notify();
  }
}
