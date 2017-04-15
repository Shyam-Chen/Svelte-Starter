import { combineReducers, createStore, applyMiddleware } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';

const rootEpic = combineEpics(

);

const rootReducer = combineReducers({

});

export const store = createStore(rootReducer, applyMiddleware(createEpicMiddleware(rootEpic)));
