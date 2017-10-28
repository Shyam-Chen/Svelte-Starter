// @flow

export const $ = (selector: string): HTMLElement | null =>
  document.querySelector(selector);

export const $$ = (selector: string): NodeList<HTMLElement> =>
  document.querySelectorAll(selector);
