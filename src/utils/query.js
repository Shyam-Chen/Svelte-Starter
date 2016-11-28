export const query = (selector = 'body') => {
  return document.querySelector(`${selector}`);
};
