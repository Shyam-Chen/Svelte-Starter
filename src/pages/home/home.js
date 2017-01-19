// Third party
import luyou from 'luyou';
import { template } from 'lodash-es';
import { filter } from 'rxjs/operator/filter';
import { map } from 'rxjs/operator/map';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable-es';

// Components
import { layout } from '../../components/layout';

// Assets
import vanilla from '../../assets/images/vanilla.png';

// Main
import tpl from './home.html';
import style from './home.css';
import LANGS_EN from './langs/en.json';
import LANGS_ZH from './langs/zh.json';

const counter = () => {

  // Types
  const INCREMENT = 'INCREMENT';
  const DECREMENT = 'DECREMENT';
  const RESET = 'RESET';
  const INCREMENT_IF_ODD = 'INCREMENT_IF_ODD';
  const DECREMENT_IF_EVEN = 'DECREMENT_IF_EVEN';

  // Reducers
  const counterReducer = (state = 0, action) => {
    switch (action.type) {
      case INCREMENT:
        return state + 1;
      case DECREMENT:
        return state - 1;
      case RESET:
        return 0;
      default:
        return state;
    }
  };

  // Actions
  const increment = () => ({ type: INCREMENT });
  const decrement = () => ({ type: DECREMENT });
  const reset = () => ({ type: RESET });
  const incrementIfOdd = () => ({ type: INCREMENT_IF_ODD });
  const decrementIfEven = () => ({ type: DECREMENT_IF_EVEN });

  // Epics
  const incrementIfOddEpic = (action$, store) =>
    action$.ofType(INCREMENT_IF_ODD)
      ::filter(() => store.getState().counterReducer % 2 === 1)
      ::map(increment);

  const decrementIfEvenEpic = (action$, store) =>
    action$.ofType(DECREMENT_IF_EVEN)
      ::filter(() => store.getState().counterReducer % 2 === 0)
      ::map(decrement);

  const rootEpic = combineEpics(incrementIfOddEpic, decrementIfEvenEpic);
  const epicMiddleware = createEpicMiddleware(rootEpic);

  // Store
  const rootReducer = combineReducers({ counterReducer });
  const store = createStore(rootReducer, applyMiddleware(epicMiddleware));

  const render = () => {
    const { counterReducer } = store.getState();
    document.querySelector('#value').innerHTML = counterReducer;
  };

  store.subscribe(render);
  render();

  document.querySelector('#increment').onclick = () => store.dispatch(increment());
  document.querySelector('#decrement').onclick = () => store.dispatch(decrement());
  document.querySelector('#reset').onclick = () => store.dispatch(reset());
  document.querySelector('#incrementIfOdd').onclick = () => store.dispatch(incrementIfOdd());
  document.querySelector('#decrementIfEven').onclick = () => store.dispatch(decrementIfEven());
};

export const HOME_EN = () => {
  const content = template(tpl, {
    'imports': {
      style,
      'image': { 'vanilla': vanilla.src },
      'TODAY': new Intl.DateTimeFormat('en').format(new Date())
    }
  })(LANGS_EN);

  layout('en', 'home', content);
  counter();
  componentHandler.upgradeAllRegistered();
};

export const HOME_ZH = () => {
  const content = template(tpl, {
    'imports': {
      style,
      'image': {
        'vanilla': vanilla.src
      },
      'TODAY': new Intl.DateTimeFormat('zh').format(new Date())
    }
  })(LANGS_ZH);

  layout('zh', 'home', content);
  counter();
  componentHandler.upgradeAllRegistered();
};

export const home = () => {
  switch (true) {
    case /zh/.test(navigator.language):
      luyou('/', '/zh');
      break;
    default:
      luyou('/', '/en');
  }

  luyou('/en', HOME_EN);
  luyou('/zh', HOME_ZH);
};
