import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
// import { combineEpics, createEpicMiddleware } from 'redux-observable';
// import loggerMiddleware from 'redux-logger';

// import { incrementIfOddEpic, decrementIfEvenEpic, counter } from './pages/examples/counter';
import { counter } from './pages/examples/counter';

// const rootEpic = combineEpics(
//   incrementIfOddEpic,
//   decrementIfEvenEpic
// );

const rootReducer = combineReducers({
  counter
});

export const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    // createEpicMiddleware(rootEpic),
    // loggerMiddleware
  )
);


// import { values } from 'lodash';
//
// import * as counterEffects from './pages/examples/counter';
//
// const importedEpics = {
//   ...counterEffects,
// };
//
// const epics = values(importedEpics).filter(item => typeof item === 'function');
//
// const rootEpic = (action$, store) => combineEpics(...epics)(action$, store);
