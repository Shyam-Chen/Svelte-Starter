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

const epicMiddleware = createEpicMiddleware(rootEpic);

export const store = createStore(rootReducer, applyMiddleware(epicMiddleware));
