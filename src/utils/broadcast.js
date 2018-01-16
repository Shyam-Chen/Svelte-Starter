import { Observable, Subject } from 'rxjs';
import { filter, map } from 'rxjs/operator';

interface BroadcastEvent {
  key: any;
  data?: any;
}

/**
 * @example
 * const b$ = new Broadcast();
 *
 * b$.broadcast('thing', { foo: 'bar' });
 *
 * b$.on('thing')
 *   .subscribe(data => console.log(data));
 */

export class Broadcast {
  eventBusinessLogic: Subject<BroadcastEvent>;

  constructor() {
    this.eventBusinessLogic = new Subject();
  }

  broadcast(key: any, data?: any): void {
    this.eventBusinessLogic.next({ key, data });
  }

  on<T>(key: any): Observable<T> {
    return this.eventBusinessLogic
      .asObservable()
      ::filter(event => event.key === key)
      ::map(event => event.data);
  }
}
