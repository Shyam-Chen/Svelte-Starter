// Lodash
import { lowerFirst, pad } from 'lodash';

// ReactiveX
// import { Observable, Subject } from 'rxjs';
// import { timer, of } from 'rxjs/observable';
// import { mapTo, combineAll } from 'rxjs/operator';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/interval';

// MobX
import { observable, action, autorun } from 'mobx';

// Immutable
import { Map, Set } from 'immutable';

// D3
import { select, selectAll } from 'd3-selection';
import { transition, active } from 'd3-transition';

// Three
import { Scene, WebGLRenderer } from 'three';

describe('Test', () => {
  describe('Lodash', () => {
    it('should be able to use', () => {
      expect(lowerFirst).toBeDefined();
      expect(lowerFirst('Fred')).toBe('fred');

      expect(pad).toBeDefined();
      expect(pad('abc', 8, '-')).toBe('--abc---');
    });
  });

  describe('ReactiveX', () => {
    it('should be able to use', () => {
      // expect(Observable).toBeDefined();
      // expect(Subject).toBeDefined();
      // expect(timer).toBeDefined();
      // expect(of).toBeDefined();
      // expect(mapTo).toBeDefined();
      // expect(combineAll).toBeDefined();
      // Observable.interval(0)
      //   .subscribe(value => console.log(value));
    });

    // it('should be able to use', done => {
    //   Observable::timer(1000)
    //     ::mapTo(Observable::of('Hello', 'World'))
    //     ::combineAll()
    //     .subscribe(value => {
    //       expect(value).toBeDefined();
    //       done();
    //     });
    // });

    // it('should be able to use', done => {
    //   const source$ = new Observable(observer => {
    //     observer.next(1);
    //     observer.next(2);
    //     observer.next(3);
    //     observer.complete();
    //   });
    //
    //   source$::observeOn(Scheduler.async)
    //     .subscribe(value => {
    //       expect(value).toBeDefined();
    //       done();
    //     });
    // });
  });

  describe('MobX', () => {
    it('should be able to use', () => {
      expect(observable).toBeDefined();
      expect(action).toBeDefined();
      expect(autorun).toBeDefined();
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

  describe('Three', () => {
    it('should be able to use', () => {
      expect(Scene).toBeDefined();
      expect(WebGLRenderer).toBeDefined();
    });
  });
});
