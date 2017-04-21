import { combineReducers, createStore, applyMiddleware } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';

const rootEpic = combineEpics(/* ... */);

const rootReducer = combineReducers({ /* ... */ });

const epicMiddleware = createEpicMiddleware(rootEpic);

export const store = createStore(rootReducer, applyMiddleware(epicMiddleware));
