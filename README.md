# Frontend Starter Kit (Beta)

:icecream: A boilerplate for :star2: HTML5 :star2:, Material, Firebase, Gulp, Rollup, Babel, PostHTML, and PostCSS.

[![Build Status](https://travis-ci.org/Shyam-Chen/Frontend-Starter-Kit.svg?branch=master)](https://travis-ci.org/Shyam-Chen/Frontend-Starter-Kit)
 //
[![dependencies Status](https://david-dm.org/Shyam-Chen/Frontend-Starter-Kit/status.svg)](https://david-dm.org/Shyam-Chen/Frontend-Starter-Kit)
[![devDependencies Status](https://david-dm.org/Shyam-Chen/Frontend-Starter-Kit/dev-status.svg)](https://david-dm.org/Shyam-Chen/Frontend-Starter-Kit?type=dev)

[Live Demo](https://frontend-starter-kit.firebaseapp.com/)

This seed repository provides the following features:
* ---------- **Primary Key** ----------
* [x] Client-side platform with [**HTML5**](https://platform.html5.org/).
* [x] User interface components with [**Material**](https://material.io/).
* [x] Backend cloud services with [**Firebase**](https://firebase.google.com/).
* [x] Routing and navigation with [**Page**](http://visionmedia.github.io/page.js/).
* ---------- **Secondary Key** ----------
* [x] Utility functions with [**Lodash**](https://lodash.com/).
* [x] Reactive extensions with [**ReactiveX**](http://reactivex.io/).
* [x] State container with [**Redux**](http://redux.js.org/).
* [x] Immutable collections with [**Immutable**](http://facebook.github.io/immutable-js/).
* [x] Data visualizations with [**D3**](https://d3js.org/).
* ---------- **Dev Tools** ----------
* [x] Build system with [**Gulp**](https://github.com/gulpjs/gulp).
* [x] Module bundler with [**Rollup**](https://github.com/rollup/rollup).
* [ ] HTML transformations with [**PostHTML**](https://github.com/posthtml/posthtml).
* [x] Future CSS features with [**PostCSS**](https://github.com/postcss/postcss).
* [x] Next generation JavaScript with [**Babel**](https://github.com/babel/babel).
* [x] Synchronised browser with [**BrowserSync**](https://github.com/BrowserSync/browser-sync).
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

## Table of Contents
* [Getting Started](#getting-started)
* [Dockerization](#dockerization)
* [Configuration](#configuration)
* [Using Libraries](#using-libraries)
* [All Commands](#all-commands)
* [Directory Structure](#directory-structure)
* [To-Do List](#to-do-list)

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

4) Run the Test

```bash
# pre-test
$ yarn run lib

$ yarn test
```

5) Run the E2E test

```bash
# pre-e2e
$ yarn run webdriver
$ yarn run prod

$ yarn run e2e
```

6) Stay up-to-date

```bash
$ git remote add upstream https://github.com/Shyam-Chen/Frontend-Starter-Kit.git
$ git pull upstream master
```

## Dockerization

1) Build the Image

```bash
$ docker build -t Frontend-Starter-Kit .
```

2) Run the Container

```bash
$ docker run -it -p 3000:3000 -p 9876:9876 --name app Frontend-Starter-Kit
```

3) Just Compose

```bash
$ docker-compose up
```

## Configuration

Application configuration

```js
export const DEV_PORT = 3000;
export const TEST_PORT = 9876;
export const APP_BASE = '/';
```

Environment configuration

```bash
$ npm run gulp -- <TASK_NAME> --mode [dev|prod] --watch [on|off] --serve [on|off]
```

Custom Environments

```js
import { env } from 'gulp-util';

env.<ENV_NAME> === '<ENV_VALUE>';
```

```bash
$ npm run gulp -- <TASK_NAME> --<ENV_NAME> <ENV_VALUE>
```

## Using Libraries

Example of Component

```html
<!-- new.html -->
<div class="<%= style.new %>">
  A New Component
</div>
```

```css
/* new.css */
.new {
  color: #F44336;
}
```

```js
// new.js
import { template } from 'lodash';

import tpl from './new.html';
import style from './new.css';

const compiled = template(tpl, { 'imports': { style } });

export const new = () => {
  // ...
};
```

Example of Route

```js
page('/a', () => console.log('A'));
page('/b', () => console.log('B'));

// ...
```

Example of Lodash

```js
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { lowerFirst, pad } from 'lodash';

Observable::of(lowerFirst('Hello'), pad('World', 5))
  .subscribe(value => console.log(value));
  // hello
  // World
```

Example of ReactiveX

```js
import { Observable } from 'rxjs/Observable';
import { timer } from 'rxjs/observable/timer';
import { of } from 'rxjs/observable/of';
import { mapTo } from 'rxjs/operator/mapTo';
import { combineAll } from 'rxjs/operator/combineAll';

Observable::timer(2000)
  ::mapTo(Observable::of('Hello', 'World'))
  ::combineAll()
  .subscribe(value => console.log(value));
  // ["Hello"]
  // ["World"]
```

Example of Redux

```js
import { filter } from 'rxjs/operator/filter';
import { map } from 'rxjs/operator/map';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { Map } from 'immutable';

const INCREMENT = 'INCREMENT';
const INCREMENT_IF_ODD = 'INCREMENT_IF_ODD';

const increment = () => ({ type: INCREMENT });
const incrementIfOdd = () => ({ type: INCREMENT_IF_ODD });

const counterReducer = (state = Map({ counter: 0 }), action) => {
  switch (action.type) {
    case INCREMENT:
      return state.update('counter', value => value + 1);
    default:
      return state;
  }
};

const incrementIfOddEpic = (action$, store) =>
  action$.ofType(INCREMENT_IF_ODD)
    ::filter(() => store.getState().counterReducer.get('counter') % 2 === 1)
    ::map(increment);

const rootEpic = combineEpics(incrementIfOddEpic);
const epicMiddleware = createEpicMiddleware(rootEpic);
const rootReducer = combineReducers({ counterReducer });
const store = createStore(rootReducer, applyMiddleware(epicMiddleware));

store.subscribe(() => {
  const { counterReducer } = store.getState();
  console.log(counterReducer.get('counter'));
});

store.dispatch(increment());  // 1
store.dispatch(incrementIfOdd());  // 1 -> 2
```

Example of Immutable

```js
import { Observable } from 'rxjs/Observable';
import { from } from 'rxjs/observable/from';
import { Map } from 'immutable';

const map1 = Map({ a: 1, b: 2, c: 3 });
const map2 = map1.set('b', 4);

Observable::from(map2)
  .subscribe(value => console.log(value));
  // ["a", 1]
  // ["b", 4]
  // ["c", 3]
```

Example of D3

```js
import { Observable } from 'rxjs/Observable';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { select } from 'd3-selection';
import { transition } from 'd3-transition';

Observable::fromEvent(document, 'click')
  .subscribe(() => {
    const exEl = select('#ex');

    exEl.text('Hello World')
      .style('text-align', 'center')
      .style('line-height', '10rem')
      .style('font-size', '7rem')
      ::transition()
      .duration(500)
      .style('color', '#F44336');
  });
```

```html
<div id="ex"></div>
```

## All Commands

```bash
$ yarn run dev
$ yarn run dev-watch

$ yarn run test
$ yarn run test-watch

$ yarn run prod
$ yarn run e2e

$ yarn run lint
$ yarn run lib
$ yarn run webdriver

$ yarn run clean
$ yarn run reset
$ yarn run reinstall

$ yarn run deploy
```

## Directory Structure

```
.
├── functions
│   └── server-side logic ...
├── scripts
│   └── build|deploy|test.sh
├── src
│   ├── actions
│   │   └── index.js
│   ├── assets
│   │   └── audios, datas, fonts, images, videos ...
│   ├── components
│   │   └── shared components, reusable components ...
│   ├── containers
│   │   └── index.js
│   ├── epics
│   │   └── index.js
│   ├── pages
│   │   └── all pages, child pages ...
│   ├── reducers
│   │   └── index.js
│   ├── utils
│   │   └── index.js
│   ├── app.js
│   ├── global.css
│   ├── index.html
│   ├── polyfills.js
│   ├── root.css
│   ├── store.js
│   ├── types.js
│   └── vendor.js
├── tools
│   ├── config
│   │   └── karma.conf|protractor.conf|rollup.config.js
│   ├── tasks
│   │   └── app|build|chunkhash|copy|e2e|entrypoint|lint|polyfills|precache|prerender|serve|unit|vendor|watch.js
│   ├── utils
│   │   └── e2e-server|handle-errors|index|resolve-id|service-worker.js
│   └── constants.js
├── .babelrc
├── .editorconfig
├── .eslintrc
├── .firebaserc
├── .gitattributes
├── .gitignore
├── .htmlhintrc
├── .stylelintrc
├── .travis.yml
├── Dockerfile
├── LICENSE
├── README.md
├── database.rules.json
├── docker-compose.yml
├── firebase.json
├── gulpfile.babel.js
├── package.json
└── yarn.lock
```

## To-Do List
* ---------- **Easy** ----------
* Integration PostHTML to Rollup (`rollup-plugin-posthtml`)
* Import file as a blob (`rollup-plugin-binary`)
* ---------- **Medium** ----------
* Update to gulp-protractor v3.0.0+
* Update to postcss-cssnext v2.9.0+
* Update to rxjs v5.0.2+
* Update to firebase v3.6.3+
* ---------- **Hard** ----------
* Prerenders static HTML (`gulp-prerender`)
* Hot module replacement (`rollup-plugin-hmr`)
* **--------------------**
* Migrate from `material-design-lite` to `material-components-web`
* Firebase Examples (Contact Page)
* Reforming static analysis (`.htmlhintrc`, `.stylelintrc`, `.eslintrc`)
* Modular ReactiveX builds ([Issue Page](https://github.com/ReactiveX/rxjs/issues/2460))
