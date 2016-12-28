// Third party
import { template } from 'lodash-es';
import { createStore } from 'redux';

// Error
// import { createEpicMiddleware, combineEpics } from 'redux-observable';

// OK
// import { Observable } from '@reactivex/rxjs/dist/es6/Observable';
// import '@reactivex/rxjs/dist/es6/add/observable/of';
// console.log( Observable.of(1, 2, 3) );

// Error
// import { Observable } from 'rxjs/Observable';
// import { of } from 'rxjs/observable/of';
// console.log( Observable::of(1, 2, 3) );

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

const counter = () => {
  function counter(state, action) {
    if (typeof state === 'undefined') return 0;

    switch (action.type) {
      case 'INCREMENT':
        return state + 1;
      case 'DECREMENT':
        return state - 1;
      default:
        return state;
    }
  }

  let store = createStore(counter);
  let valueEl = document.getElementById('value');

  function render() {
    valueEl.innerHTML = store.getState().toString();
  }

  render();

  store.subscribe(render);

  document.getElementById('increment')
    .addEventListener('click', function() {
      store.dispatch({ type: 'INCREMENT' });
    });

  document.getElementById('decrement')
    .addEventListener('click', function() {
      store.dispatch({ type: 'DECREMENT' });
    });

  document.getElementById('incrementIfOdd')
    .addEventListener('click', function() {
      if (store.getState() % 2 !== 0) {
        store.dispatch({ type: 'INCREMENT' });
      }
    });

  document.getElementById('incrementAsync')
    .addEventListener('click', function() {
      setTimeout(function() {
        store.dispatch({ type: 'INCREMENT' });
      }, 1000);
    });
};

export const ABOUT_EN = () => {
  layout('en', 'about', template(tpl, imports)(LANGS_EN));
  chart();
  counter();
  componentHandler.upgradeAllRegistered();
};

export const ABOUT_ZH = () => {
  layout('zh', 'about', template(tpl, imports)(LANGS_ZH));
  chart();
  counter();
  componentHandler.upgradeAllRegistered();
};
