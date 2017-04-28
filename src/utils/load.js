import { Observable } from 'rxjs/Observable';

/**
 * @param {string} url
 *
 * @example
 * load('...')
 *   .subscribe((result) => {
 *     // ...
 *   });
 */

export const load = url => {
  return new Observable(observer => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = () => {
      if (xhr.status === 200) {
        observer.next(xhr.response);
        observer.complete();
      } else {
        observer.error(new Error(xhr.statusText));
      }
    };
    xhr.onerror = () => observer.error(new Error('Network Error.'));
    xhr.send();
  });
};
