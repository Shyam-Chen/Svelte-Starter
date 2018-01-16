/**
 * @example
 * getTitle();
 */

export const getTitle = (): string => {
  return document.title;
};

/**
 * @example
 * setTitle('This is my great title');
 */

export const setTitle = (newTitle: string): void => {
  document.title = newTitle;
};
