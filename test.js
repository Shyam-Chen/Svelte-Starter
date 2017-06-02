import { lowerFirst, pad } from 'lodash';

import { Observable } from 'rxjs/Observable';
import { timer } from 'rxjs/observable/timer';
import { of } from 'rxjs/observable/of';
import { mapTo } from 'rxjs/operator/mapTo';
import { combineAll } from 'rxjs/operator/combineAll';

import { combineReducers, createStore, applyMiddleware } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';

import { Map, Set } from 'immutable';

import { select } from 'd3-selection';
import { transition } from 'd3-transition';

describe('Test', () => {
  describe('Lodash', () => {
    it('should be able to use', () => {
      expect(lowerFirst).toBeDefined();
      expect(pad).toBeDefined();
    });
  });

  describe('ReactiveX', () => {
    it('should be able to use', () => {
      expect(Observable).toBeDefined();
      expect(timer).toBeDefined();
      expect(of).toBeDefined();
      expect(mapTo).toBeDefined();
      expect(combineAll).toBeDefined();
    });
  });

  describe('Redux', () => {
    it('should be able to use', () => {
      expect(combineReducers).toBeDefined();
      expect(createStore).toBeDefined();
      expect(applyMiddleware).toBeDefined();
      expect(combineEpics).toBeDefined();
      expect(createEpicMiddleware).toBeDefined();
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
      expect(transition).toBeDefined();
    });
  });
});
