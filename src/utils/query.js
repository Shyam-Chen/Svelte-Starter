// @flow

/**
 * @example
 * $('.foo')
 */

export const $ = (selector: string): HTMLElement | null =>
  document.querySelector(selector);

/**
 * @example
 * $$('.foo')
 */

export const $$ = (selector: string): NodeList<HTMLElement> =>
  document.querySelectorAll(selector);
