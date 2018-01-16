import { Observable } from 'rxjs';

/**
 * @example
 * load$('...')
 *   .subscribe(result => {
 *     // ...
 *   });
 */

export const load$ = (url: string): Observable<string> => {
  const xhr = new XMLHttpRequest();

  return new Observable(observer => {
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
