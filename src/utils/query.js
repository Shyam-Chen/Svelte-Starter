// @flow

export const $ = (selector: string) =>
  document.querySelector(selector);

export const $$ = (selector: string) =>
  document.querySelectorAll(selector);
