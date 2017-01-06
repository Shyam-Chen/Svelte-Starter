// Third party
import { template } from 'lodash-es';
import { filter } from 'rxjs/operator/filter';
import { map } from 'rxjs/operator/map';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { combineEpics, createEpicMiddleware } from 'rollducks';

// Components
import { layout } from '../../components/layout';

// Assets
import vanilla from '../../assets/images/vanilla.png';

// Main
import tpl from './home.html';
import style from './home.css';
import LANGS_EN from './langs/en.json';
import LANGS_ZH from './langs/zh.json';

const simpleCounter = () => {
  const INCREMENT = 'INCREMENT';
  const INCREMENT_IF_ODD = 'INCREMENT_IF_ODD';

  const increment = () => ({ type: INCREMENT });
  const incrementIfOdd = () => ({ type: INCREMENT_IF_ODD });

  const counter = (state = 0, action) => {
    switch (action.type) {
      case INCREMENT:
        return state + 1;

      default:
        return state;
    }
  };

  const rootReducer = combineReducers({ counter });

  const incrementIfOddEpic = (action$, store) =>
    action$.ofType(INCREMENT_IF_ODD)
      ::filter(() => store.getState().counter % 2 === 1)
      ::map(increment);

  const rootEpic = combineEpics(incrementIfOddEpic);
  const epicMiddleware = createEpicMiddleware(rootEpic);
  const store = createStore(rootReducer, applyMiddleware(epicMiddleware));

  const render = () => {
    const { counter } = store.getState();
    document.querySelector('#value').innerHTML = counter;
  };

  store.subscribe(render);
  render();

  document.querySelector('#increment').onclick = () => store.dispatch(increment());
  document.querySelector('#incrementIfOdd').onclick = () => store.dispatch(incrementIfOdd());
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
  simpleCounter();
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
  simpleCounter();
  componentHandler.upgradeAllRegistered();
};

export const home = () => {
  switch (true) {
    case /zh/.test(navigator.language):
      page('/', '/zh');
      break;
    default:
      page('/', '/en');
  }

  page('/en', HOME_EN);
  page('/zh', HOME_ZH);
};
