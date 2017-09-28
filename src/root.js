import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import loggerMiddleware from 'redux-logger';

import { counterEpic, counterReducer } from './pages/examples/counter';

const rootEpic = combineEpics(
  counterEpic
);

const rootReducer = combineReducers({
  counter: counterReducer
});

export const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    createEpicMiddleware(rootEpic),
    loggerMiddleware
  )
);
