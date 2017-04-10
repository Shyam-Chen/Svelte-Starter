import { combineReducers, createStore, applyMiddleware } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';

import { incrementIfOddEpic, decrementIfEvenEpic, counterReducer } from './containers/counter';

const rootEpic = combineEpics(
  incrementIfOddEpic,
  decrementIfEvenEpic
);

const rootReducer = combineReducers({
  counterReducer
});

export const store = createStore(rootReducer, applyMiddleware(createEpicMiddleware(rootEpic)));
