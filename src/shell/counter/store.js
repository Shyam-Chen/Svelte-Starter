/* eslint-disable import/prefer-default-export */
import { writable } from 'svelte/store';

const createCount = () => {
  const { subscribe, set, update } = writable(0);

  return {
    subscribe,
    increment: () => update(val => val + 1),
    decrement: () => update(val => val - 1),
    reset: () => set(0),
  };
};

export const count = createCount();
