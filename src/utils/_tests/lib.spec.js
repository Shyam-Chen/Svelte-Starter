// Lodash
import { lowerFirst, pad } from 'lodash';

// ReactiveX
import { Observable } from 'rxjs';
import { timer, of } from 'rxjs/observable';
import { mapTo, combineAll } from 'rxjs/operator';

// MobX
import { observable, action, autorun } from 'mobx';

// Immutable
import { Map, Set } from 'immutable';

// D3
import { select, selectAll } from 'd3-selection';
import { transition, active } from 'd3-transition';

// Three
import { Scene, WebGLRenderer } from 'three';

describe('Libraries', () => {
  describe('Lodash', () => {
    it('should be able to use', () => {
      expect(lowerFirst).toBeDefined();
      expect(lowerFirst('Fred')).toBe('fred');

      expect(pad).toBeDefined();
      expect(pad('abc', 8, '-')).toBe('--abc---');
    });
  });

  describe('ReactiveX', () => {
    it('should be able to use', done => {
      expect(Observable).toBeDefined();
      expect(timer).toBeDefined();
      expect(of).toBeDefined();
      expect(mapTo).toBeDefined();
      expect(combineAll).toBeDefined();

      Observable::timer(2000)
        ::mapTo(Observable::of('Hello', 'World'))
        ::combineAll()
        .subscribe(value => {
          expect(value).toBeDefined();
          done();
        });
    });
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
