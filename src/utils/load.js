/**
 * @param {string} url
 *
 * @example
 * load('...')
 *   .then((result) => {
 *     // ...
 *   });
 */

export const load = url => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(xhr.response);
      } else {
        reject(new Error('Failed to load.'));
      }
    };
    xhr.onerror = () => reject(new Error('Network Error.'));
    xhr.send();
    return xhr.responseText;
  });
};
