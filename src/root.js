import { combineReducers, createStore, applyMiddleware } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';

import { incrementIfOddEpic, decrementIfEvenEpic, counter } from './pages/examples/counter';

const rootEpic = combineEpics(
  incrementIfOddEpic,
  decrementIfEvenEpic
);

const rootReducer = combineReducers({
  counter
});

const epicMiddleware = createEpicMiddleware(rootEpic);

export const store = createStore(
  rootReducer,
  applyMiddleware(
    epicMiddleware
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
