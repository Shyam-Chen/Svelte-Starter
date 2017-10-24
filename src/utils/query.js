export const $ = (selector: string): HTMLElement =>
  document.querySelector(selector);

export const $$ = (selector: string): HTMLElement[] =>
  document.querySelectorAll(selector);
