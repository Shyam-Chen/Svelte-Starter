// Lodash
import { lowerFirst, pad } from 'lodash';

// ReactiveX
// import { Observable, Subject } from 'rxjs';
// import { timer, of } from 'rxjs/observable';
// import { mapTo, combineAll } from 'rxjs/operator';

// Redux
import { combineReducers, createStore, applyMiddleware } from 'redux';
// import { combineEpics, createEpicMiddleware } from 'redux-observable';

// Immutable
import { Map, Set } from 'immutable';

// D3
import { select, selectAll } from 'd3-selection';
import { transition, active } from 'd3-transition';

describe('Test', () => {
  describe('Lodash', () => {
    it('should be able to use', () => {
      expect(lowerFirst).toBeDefined();
      expect(pad).toBeDefined();
    });
  });

  describe('ReactiveX', () => {
    // it('should be able to use', () => {
    //   expect(Observable).toBeDefined();
    //   expect(Subject).toBeDefined();
    //   expect(timer).toBeDefined();
    //   expect(of).toBeDefined();
    //   expect(mapTo).toBeDefined();
    //   expect(combineAll).toBeDefined();
    // });

    // it('should be able to use', () => {
    //   const source$ = new Observable(observer => {
    //     observer.next(1);
    //     observer.next(2);
    //     observer.next(3);
    //     observer.complete();
    //   });
    //
    //   source$::observeOn(Scheduler.async)
    //     .subscribe(
    //       value => console.log(value),
    //       error => console.error(error),
    //       () => console.log('done')
    //     );
    // });
  });

  describe('Redux', () => {
    it('should be able to use', () => {
      expect(combineReducers).toBeDefined();
      expect(createStore).toBeDefined();
      expect(applyMiddleware).toBeDefined();
      // expect(combineEpics).toBeDefined();
      // expect(createEpicMiddleware).toBeDefined();
    });
  });

  describe('Immutable', () => {
    it('should be able to use', () => {
      expect(Map).toBeDefined();
      expect(Set).toBeDefined();
    });
  });

  describe('D3', () => {
    it('should be able to use', () => {
      expect(select).toBeDefined();
      expect(selectAll).toBeDefined();
      expect(transition).toBeDefined();
      expect(active).toBeDefined();
    });
  });
});
