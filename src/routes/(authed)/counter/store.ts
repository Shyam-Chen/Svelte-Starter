import { writable, derived, get } from 'svelte/store';

import { browser } from '$app/environment';

const data = {
  count: 0,
  text: '',
};

const initial = structuredClone(data);

export const initialized = writable(false);

export const state = writable(data);

export const doubleCount = derived(state, ($state) => $state.count * 2);

export const increment = () => {
  const value = get(state);
  state.set({ ...value, count: (value.count += 1) });
};

export const reset = () => {
  state.set(structuredClone(initial));
};

export const initialize = () => {
  if (browser) {
    const counter = sessionStorage.getItem('counter');

    if (counter) {
      state.set(structuredClone(JSON.parse(counter)));
    }

    state.subscribe((value) => {
      if (browser) {
        sessionStorage.setItem('counter', JSON.stringify(value));
      }
    });
  }
};
