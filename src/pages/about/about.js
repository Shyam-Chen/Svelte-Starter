// Third party
import { template } from 'lodash-es';
import { filter } from 'rxjs/operator/filter';
import { map } from 'rxjs/operator/map';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware, combineEpics } from '../../scripts/redux-observable';
import luyou from '../../scripts/luyou';

// Components
import { layout } from '../../components/layout';

// About
import tpl from './about.html';
import style from './about.css';
import LANGS_EN from './langs/en.json';
import LANGS_ZH from './langs/zh.json';

const imports = { 'imports': { style } };

const chart = () => {
  new Chart('pagespeed-insights', {
    type: 'bar',
    data: {
      labels: ["Mobile", "Desktop"],
      datasets: [
        {
          label: 'Score',
          data: [89, 95],
          backgroundColor: [
            'rgba(111, 99, 255, .2)',
            'rgba(111, 99, 255, .2)'
          ],
          borderColor: [
            'rgba(111, 99, 255, 1)',
            'rgba(111, 99, 255, 1)'
          ],
          borderWidth: 1
        }
      ]
    },
    options: {
      title: { display: true, text: 'PageSpeed Insights' },
      scales: { yAxes: [{ ticks: { beginAtZero:true } }] }
    }
  });
};

const counterGo = () => {
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

export const ABOUT_EN = () => {
  layout('en', 'about', template(tpl, imports)(LANGS_EN));
  chart();
  counterGo();
  componentHandler.upgradeAllRegistered();
};

export const ABOUT_ZH = () => {
  layout('zh', 'about', template(tpl, imports)(LANGS_ZH));
  chart();
  counterGo();
  componentHandler.upgradeAllRegistered();
};

export const about = () => {
  luyou('/en/about', ABOUT_EN);
  luyou('/zh/about', ABOUT_ZH);
};
