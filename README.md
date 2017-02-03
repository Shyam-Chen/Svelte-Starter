# Frontend Starter Kit (Beta)

:icecream: A boilerplate for :star2: HTML5 :star2:, Material, Firebase, Gulp, Rollup, Babel, PostHTML, and PostCSS.

[![Build Status](https://travis-ci.org/Shyam-Chen/Frontend-Starter-Kit.svg?branch=master)](https://travis-ci.org/Shyam-Chen/Frontend-Starter-Kit)
 //
[![dependencies Status](https://david-dm.org/Shyam-Chen/Frontend-Starter-Kit/status.svg)](https://david-dm.org/Shyam-Chen/Frontend-Starter-Kit)
[![devDependencies Status](https://david-dm.org/Shyam-Chen/Frontend-Starter-Kit/dev-status.svg)](https://david-dm.org/Shyam-Chen/Frontend-Starter-Kit?type=dev)

[Live Demo](https://test-1498d.firebaseapp.com/)

This seed repository provides the following features:
* ---------- **Primary Key** ----------
* [x] Client-side platform with [**HTML5**](https://html5.org/).
* [x] User interface components with [**Material**](https://material.io/).
* [x] Backend cloud services with [**Firebase**](https://firebase.google.com/).
* ---------- **Secondary Key** ----------
* [x] Utility functions with [**Lodash**](https://lodash.com/).
* [x] Reactive extensions with [**ReactiveX**](http://reactivex.io/).
* [x] State container with [**Redux**](http://redux.js.org/).
* [x] Immutable collections with [**Immutable**](http://facebook.github.io/immutable-js/).
* ---------- **Dev Tools** ----------
* [x] Build system with [**Gulp**](https://github.com/gulpjs/gulp).
* [x] Module bundler with [**Rollup**](https://github.com/rollup/rollup).
* [ ] HTML transformations with [**PostHTML**](https://github.com/posthtml/posthtml).
* [x] Future CSS features with [**PostCSS**](https://github.com/postcss/postcss).
* [x] Next generation JavaScript with [**Babel**](https://github.com/babel/babel).
* [x] Development server with [**BrowserSync**](https://github.com/BrowserSync/browser-sync).
* ---------- **Test Tools** ----------
* [x] HTML static code analyzer with [**HTMLHint**](https://github.com/yaniswang/HTMLHint).
* [x] CSS static code analyzer with [**StyleLint**](https://github.com/stylelint/stylelint).
* [x] JavaScript static code analyzer with [**ESLint**](https://github.com/eslint/eslint).
* [x] Testing framework with [**Jasmine**](https://github.com/jasmine/jasmine).
* [x] Unit tests with [**Karma**](https://github.com/karma-runner/karma).
* [x] End-to-end tests with [**Protractor**](https://github.com/angular/protractor).
* ---------- **Environment** ----------
* [x] Operating system with [**Linux**](https://github.com/torvalds/linux).
* [x] Text editor with [**Atom**](https://github.com/atom/atom).
* [x] Version control with [**Git**](https://github.com/git/git).
* [x] Fast and deterministic builds with [**Yarn**](https://github.com/yarnpkg/yarn).
* [x] Software container with [**Docker**](https://github.com/docker/docker).
* [x] Continuous integration with [**Travis**](https://github.com/travis-ci/travis-ci).

## Getting Started

1) Clone this Boilerplate
```bash
$ git clone --depth 1 https://github.com/Shyam-Chen/Frontend-Starter-Kit.git <PROJECT_NAME>
$ cd <PROJECT_NAME>
```

2) Install Dependencies
```bash
$ yarn install
```

3) Run the Application
```bash
$ yarn start
```

4) Stay up-to-date
```bash
$ git remote add upstream https://github.com/Shyam-Chen/Frontend-Starter-Kit.git
$ git pull upstream master
```

## Using Docker

1) Build the Image
```bash
$ docker build -t Frontend-Starter-Kit .
```

2) Run the Container
```bash
$ docker run -it -p 3000:3000 --name app Frontend-Starter-Kit
```

3) Just Compose
```bash
$ docker-compose up
```

## Using Libraries

1) Example of Lodash
```js
import { partition } from 'lodash-es';

console.log(partition([1, 2, 3, 4], n => n % 2));
// [ [ 1, 3 ], [ 2, 4 ] ]
```

2) Example of ReactiveX
```js
import { Observable } from 'rxjs/Observable';

import { timer } from 'rxjs/observable/timer';
import { of } from 'rxjs/observable/of';

import { mapTo } from 'rxjs/operator/mapTo';
import { combineAll } from 'rxjs/operator/combineAll';

Observable::timer(2000)
  ::mapTo(Observable::of('Hello', 'World'))
  ::combineAll()
  .subscribe(result => console.log(result));
  // ["Hello"]
  // ["World"]
```

3) Example of Redux
```js
import { filter } from 'rxjs/operator/filter';
import { map } from 'rxjs/operator/map';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable-es';

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

store.subscribe(() => {
  const { counterReducer } = store.getState();
  console.log(counterReducer);
});

store.dispatch(increment());
// 1

store.dispatch(incrementIfOdd());
// 1
// 2

store.dispatch(decrementIfEven());
// 2
// 1

store.dispatch(reset());
// 0

store.dispatch(decrement());
// -1
```

4) Example of Immutable
```js
import { Observable } from 'rxjs/Observable';

import { from } from 'rxjs/observable/from';

import { Map } from 'immutable';

const map1 = Map({ a: 1, b: 2, c: 3 });
const map2 = map1.set('b', 4);

Observable::from(map2)
  .subscribe(val => console.log(val));
  // ["a", 1]
  // ["b", 4]
  // ["c", 3]
```

## Other Commands

```bash
$ yarn run dev
$ yarn run dev-watch

$ yarn run test
$ yarn run test-watch

$ yarn run prod
$ yarn run e2e

$ yarn run lint

$ yarn run webdriver

$ yarn run clean
$ yarn run reset
$ yarn run reinstall

$ yarn run deploy
```

## Directory Structure

```
.
├── scripts
│   └── build|deploy|install|test|window.sh
├── src
│   ├── assets
│   │   └── datas, images, fonts, videos, audios, files ...
│   ├── components
│   │   └── shared components, reusable components ...
│   ├── pages
│   │   └── pages, child pages ...
│   ├── scripts
│   │   └── js, functions, action-types, configure-store, reducers, actions, epics ...
│   ├── styles
│   │   └── css, variables, custom css ...
│   ├── templates
│   │   └── html, child templates ... (not yet)
│   ├── app.js
│   ├── index.html
│   └── polyfills|vendor.js
├── tools
│   ├── config
│   │   └── karma.conf|protractor.conf|rollup.config.js
│   ├── tasks
│   │   └── more tasks ...
│   ├── utils
│   │   └── e2e-server|handle-errors|index|resolve-reactivex|service-worker.js
│   └── constants.js
├── gulpfile.babel.js
└── package.json
```
