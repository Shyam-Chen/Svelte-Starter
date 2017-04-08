import { filter } from 'rxjs/operator/filter';
import { map } from 'rxjs/operator/map';
import { Map } from 'immutable';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';
export const INCREMENT_IF_ODD = 'INCREMENT_IF_ODD';
export const DECREMENT_IF_EVEN = 'DECREMENT_IF_EVEN';

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const reset = () => ({ type: RESET });
export const incrementIfOdd = () => ({ type: INCREMENT_IF_ODD });
export const decrementIfEven = () => ({ type: DECREMENT_IF_EVEN });

// export default function(state = Map({ counter: 0 }), action) {
export const counterReducer = (state = Map({ counter: 0 }), action) => {
  switch (action.type) {
    case INCREMENT:
      return state.update('counter', value => value + 1);
    case DECREMENT:
      return state.update('counter', value => value - 1);
    case RESET:
      return 0;
    default:
      return state;
  }
};

const incrementIfOddEpic = (action$, store) =>
  action$.ofType(INCREMENT_IF_ODD)
    ::filter(() => store.getState().counterReducer.get('counter') % 2 === 1)
    ::map(increment);

const decrementIfEvenEpic = (action$, store) =>
  action$.ofType(DECREMENT_IF_EVEN)
    ::filter(() => store.getState().counterReducer.get('counter') % 2 === 0)
    ::map(decrement);

// ------------------------------

import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';

// import counter, { incrementIfOddEpic, decrementIfEvenEpic } from './counter';

export const rootEpic = combineEpics(
  incrementIfOddEpic,
  decrementIfEvenEpic
);

export const rootReducer = combineReducers({
  counterReducer // counter
});

// ------------------------------

import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

const epicMiddleware = createEpicMiddleware(rootEpic);

export default function configureStore() {
  const store = createStore(
    rootReducer,
    applyMiddleware(epicMiddleware)
  );

  return store;
}

// ------------------------------

import store from './store';

import template from './counter.html';
import data from './counter.json';

export const counter = (name) => {
  document.querySelector(`#${name}[data-counter]`).innerHTML = template(data);

  const renderThing = () => {
    const { counterReducer /* counter */ } = store.getState();
    document.querySelector('#value').innerHTML = counterReducer;  // counter
  };

  store.subscribe(renderThing);
  renderThing();

  document.querySelector('#increment').onclick = () => store.dispatch(increment());
  document.querySelector('#decrement').onclick = () => store.dispatch(decrement());
  document.querySelector('#reset').onclick = () => store.dispatch(reset());
  document.querySelector('#incrementIfOdd').onclick = () => store.dispatch(incrementIfOdd());
  document.querySelector('#decrementIfEven').onclick = () => store.dispatch(decrementIfEven());
};
