# Web GO (Beta)

:icecream: A boilerplate for :star2: HTML5 :star2:, Material, Firebase, Gulp, Rollup, Babel, PostHTML, and PostCSS.

[![Build Status](https://travis-ci.org/Shyam-Chen/Web-Starter-Kit.svg?branch=master)](https://travis-ci.org/Shyam-Chen/Web-Starter-Kit)
 //
[![dependencies Status](https://david-dm.org/Shyam-Chen/Web-Starter-Kit/status.svg)](https://david-dm.org/Shyam-Chen/Web-Starter-Kit)
[![devDependencies Status](https://david-dm.org/Shyam-Chen/Web-Starter-Kit/dev-status.svg)](https://david-dm.org/Shyam-Chen/Web-Starter-Kit?type=dev)

[Live Demo](https://Web-starter-kit.firebaseapp.com/)

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
* [x] HTML transformations with [**PostHTML**](https://github.com/posthtml/posthtml).
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
* [Known Issues](#known-issues)

## Getting Started

1) Clone this Boilerplate

```bash
$ git clone --depth 1 https://github.com/Shyam-Chen/Web-Starter-Kit.git <PROJECT_NAME>
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
$ yarn test
```

5) Stay up-to-date

```bash
$ git remote add upstream https://github.com/Shyam-Chen/Web-Starter-Kit.git
$ git pull upstream master
```

## Dockerization

1) Build the Image

```bash
$ docker build -t Web-Starter-Kit .
```

2) Run the Container

```bash
$ docker run -it -p 8000:8000 -p 8080:8080 --name app Web-Starter-Kit
```

3) Just Compose

```bash
$ docker-compose up
```

## Configuration

Application configuration

```js
export const DEV_PORT = 8000;
export const TEST_PORT = 8080;
export const APP_BASE = '/';
```

Environment configuration

```bash
$ yarn run gulp -- <TASK_NAME> --prod --watch --serve
```

## Using Libraries

Example of Component

```html
<!-- new-component.html -->
<div block="card" mods="theme:light">
  <div elem="title" mods="size:big">${ _.title }</div>
  <div elem="content">${ _.content }</div>
</div>
```

```scss
/* new-component.css */
.card {  // block
  ...
  &__title {  // elem
    ...
    &--size {  // mods
      ...
      &-big { ... }
      &-small { ... }
    }
  }
  &__content { ... }  // elem
  &--theme {  // mods
    ...
    &-dark { ... }
    &-light { ... }
  }
}
```

```js
// new-component.js
import './new-component.css';

import template from './new-component.html';

export const newComponent = (name, title, content) => {
  document.querySelector(`#${name}`).innerHTML = template({ title, content });
};
```

```js
import { newComponent } from '../../components/new-component';

newComponent('ex', 'Component - Title', 'Component - Content');
```

```html
<div id="ex"></div>
```

Example of Route

```js
page('/new', () => document.querySelector('#app').innerHTML = 'New Route');
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
const rootReducer = combineReducers({ counterReducer });
const epicMiddleware = createEpicMiddleware(rootEpic);
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
import 'd3-selection-multi';

import { Observable } from 'rxjs/Observable';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { select } from 'd3-selection';
import { transition } from 'd3-transition';
import { Set } from 'immutable';

Observable::fromEvent(document, 'click')
  .subscribe(() => {
    const exEl = select('#ex');
    const elText = Set(['Hello', 'Goodbye']);

    exEl.text(`${elText.first()} D3`)
      .styles({
        'text-align': 'center',
        'line-height': '10rem',
        'font-size': '7rem'
      })
      ::transition()
      .duration(500)
      .style('color', '#F44336');
  });
```

```html
<div id="ex"></div>
```

For more examples, please see the branch.

## All Commands

```bash
$ yarn run dev
$ yarn run prod

$ yarn run lint
$ yarn run unit
$ yarn run e2e

$ yarn run clean
$ yarn run reset
$ yarn run reinstall

$ yarn run deploy
```

## Directory Structure

```
.
├── functions  -> server-side rules ...
├── scripts  -> shell scripts ...
├── src
│   ├── assets  -> audios, datas, fonts, images, videos ...
│   ├── components  -> presentational components ...
│   │   └── <feature>
│   │       ├── <feature>.{html,css,js,json,spec.js}  -> reusable component ...
│   │       └── index.js
│   ├── containers  -> container components ...
│   │   └── <feature>
│   │       ├── actions.{js,spec.js}  -> action types, action creators ...
│   │       ├── epics.{js,spec.js}  -> side effects ...
│   │       ├── reducer.{js,spec.js}  -> reducer function ...
│   │       ├── <feature>.{html,css,js,json,spec.js}  -> feature component ...
│   │       └── index.js
│   ├── pages  -> parent pages, child pages ...
│   │   └── <parent-page>
│   │       ├── <parent-page>.{html,css,js,json,spec.js}  -> page component ...
│   │       ├── index.js
│   │       └── <child-page>
│   │           ├── <child-page>.{html,css,js,json,spec.js}  -> page component ...
│   │           └── index.js
│   ├── utils  -> utility functions ...
│   ├── app.css
│   ├── app.js
│   ├── index.html
│   ├── polyfills.js  -> polyfills, shims, prevendor ...
│   ├── root.css  -> root variables, root mixins, custom selectors ...
│   ├── root.js  -> root epics, root reducers, configure store ...
│   └── vendor.js  -> third-party libraries ...
├── tools
│   ├── config
│   │   └── {babel,karma,postcss,posthtml,protractor,rollup}.js
│   ├── tasks
│   │   └── {app,build,chunkhash,copy,e2e,entrypoint,lint,polyfills,precache,serve,sitemap,unit,vendor,watch}.js
│   ├── utils
│   │   └── {e2e-server,handle-errors,index,resolve-id,service-worker}.js
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

## Known Issues
* ---------- **Easy** ----------
* ...
* ---------- **Medium** ----------
* Switch to `material-components-web` ([Repository](https://github.com/material-components/material-components-web))
* Switch to `karma-chrome-launcher` (Chrome headless, [PR](https://github.com/karma-runner/karma-chrome-launcher/pull/111))
* ---------- **Hard** ----------
* Render posthtml template ([`rollup-plugin-posthtml-template`](https://github.com/Vanilla-IceCream/rollup-plugin-posthtml-template))
* Prerender static HTML (`gulp-prerender`)
* ---------- **Other** ----------
* Update `postcss-cssnext` to v2.9.0+ ([Issue](https://github.com/MoOx/postcss-cssnext/issues/357))
* Update `rxjs` to v5.0.2+ ([Issue](https://github.com/ReactiveX/rxjs/issues/2460))
* Update `firebase` to v3.6.3+ ([Issue](https://github.com/rollup/rollup/issues/1275))
* Update `immutable` to support ES modules ([Issue](https://github.com/facebook/immutable-js/issues/1190))
