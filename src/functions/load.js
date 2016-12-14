/**
 * @example
 * load('...')
 *   .then((data) => {
 *     // ...
 *   });
 */

export const load = (url) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        resolve(xhr.response);
      } else {
        reject(new Error('Failed to load.'));
      }
    };
    xhr.send();
    return xhr.responseText;
  });
};
