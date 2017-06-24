# Web Starter Kit (Beta)

:icecream: A boilerplate for :star2: HTML5 :star2:, Material, Firebase, Gulp, Rollup, Babel, PostHTML, and PostCSS.

[![Build Status](https://travis-ci.org/Shyam-Chen/Web-Starter-Kit.svg?branch=master)](https://travis-ci.org/Shyam-Chen/Web-Starter-Kit)
 //
[![dependencies Status](https://david-dm.org/Shyam-Chen/Web-Starter-Kit/status.svg)](https://david-dm.org/Shyam-Chen/Web-Starter-Kit)
[![devDependencies Status](https://david-dm.org/Shyam-Chen/Web-Starter-Kit/dev-status.svg)](https://david-dm.org/Shyam-Chen/Web-Starter-Kit?type=dev)

[Live Demo](https://web-go-demo.firebaseapp.com/) | [Admin Demo](https://web-go-demo.firebaseapp.com/admin) (Account: ecmatc39@gmail.com, 123456)

This seed repository provides the following features:

* ---------- **Essentials** ----------
* [x] Client-side platform with [**HTML5**](https://platform.html5.org/).
* [x] User interface components with [**Material**](https://material.io/).
* [x] Backend cloud services with [**Firebase**](https://firebase.google.com/).
* [x] Routing and navigation with [**Page**](http://visionmedia.github.io/page.js/).
* [x] Utility functions with [**Lodash**](https://lodash.com/).
* [x] Reactive extensions with [**ReactiveX**](http://reactivex.io/).
* [x] State container with [**Redux**](http://redux.js.org/).
* [x] Immutable collections with [**Immutable**](http://facebook.github.io/immutable-js/).
* [x] Data visualizations with [**D3**](https://d3js.org/).
* ---------- **Tools** ----------
* [x] Build system with [**Gulp**](https://github.com/gulpjs/gulp).
* [x] Module bundler with [**Rollup**](https://github.com/rollup/rollup).
* [ ] HTML transformations with [**PostHTML**](https://github.com/posthtml/posthtml).
* [x] Future CSS features with [**PostCSS**](https://github.com/postcss/postcss).
* [x] Next generation JavaScript with [**Babel**](https://github.com/babel/babel).
* [x] Type annotations with [**Flow**](https://github.com/facebook/flow).
* [x] Synchronised browser with [**BrowserSync**](https://github.com/BrowserSync/browser-sync).
* [x] HTML static code analyzer with [**HTMLHint**](https://github.com/yaniswang/HTMLHint).
* [x] CSS static code analyzer with [**StyleLint**](https://github.com/stylelint/stylelint).
* [x] JavaScript static code analyzer with [**ESLint**](https://github.com/eslint/eslint).
* [x] Testing framework with [**Jasmine**](https://github.com/jasmine/jasmine).
* [x] Unit tests with [**Karma**](https://github.com/karma-runner/karma).
* [x] End-to-end tests with [**Protractor**](https://github.com/angular/protractor).
* ---------- **Environments** ----------
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

1. Clone this Boilerplate

```bash
$ git clone --depth 1 https://github.com/Shyam-Chen/Web-Starter-Kit.git <PROJECT_NAME>
$ cd <PROJECT_NAME>
```

2. Install Dependencies

```bash
$ yarn install
```

3. Run the Application

```bash
$ yarn start
```

4. Run the Test

```bash
$ yarn test
```

5. Stay up-to-date

```bash
$ git remote add upstream https://github.com/Shyam-Chen/Web-Starter-Kit.git
$ git pull upstream master
```

## Dockerization

1. Build and run the Container

```bash
$ docker-compose up
```

2. Run a command in a running container

```bash
$ docker-compose exec app <COMMAND>
```

3. Remove the old container before creating the new one

```bash
$ docker-compose rm -fs
```

## Configuration

1. Application configuration

```js
export const DEV_PORT = 8000;
export const TEST_PORT = 8080;
export const APP_BASE = '/';
```

2. Environment configuration

```bash
$ yarn run gulp -- <TASK_NAME> --prod --watch --serve
```

## Using Libraries

1. Example of Component

```html
<!-- src/components/new-component/new-component.html -->
<div class="${ style.card }">
  <div class="${ style.card__title }">${ title }</div>
  <div class="${ style.card__content }">${ content }</div>
</div>
```

```scss
// src/components/new-component/new-component.css
.card {
  // ...
  &__title { /* ... */ }
  &__content { /* ... */ }
}
```

```js
// src/components/new-component/new-component.js
import { template as _ } from 'lodash';

import template from './new-component.html';
import style from './new-component.css';

export const newComponent = (name, data) => {
  const imports = { style };
  document.querySelector(`#${name}`)
    .innerHTML = _(template, { imports })(data);
};
```

```js
// src/components/new-component/index.js
export * from './new-component';
```

```js
import { newComponent } from '../../components/new-component';

newComponent('ex', { title: 'Title here', content: 'Content here' });
```

```html
<div id="ex"></div>
```

2. Example of Route

```js
// src/pages/new-route/new-route.js
import { template as _ } from 'lodash';

import { layout } from '../../components/layout';

export const newRoute = () => {
  page('/ex', () => {
    layout(_(`<p>New Route</p>`)(), 'ex');
  });
};
```

```js
// src/pages/new-route/index.js
export * from './new-route';
```

```js
// src/app.js
import { newRoute } from './pages/new-route';

newRoute();
```

3. Example of REST

```js
import xhr from 'superagent';

xhr.get('https://web-go-demo.herokuapp.com/__/list')
  .then(res => console.log(res.text))
  .then(() => console.log('done'));

const getListId = '5910223ae1dea61c944c6011';
xhr.get(`https://web-go-demo.herokuapp.com/__/list/${getListId}`)
  .then(res => console.log(res.text))
  .then(() => console.log('done'));

xhr.post('https://web-go-demo.herokuapp.com/__/list/')
  .send({ text: 'Web GO' })
  .then(res => console.log(res.text))
  .then(() => console.log('done'));

const putListId = '5943881e058f440012d4ae47';
xhr.put(`https://web-go-demo.herokuapp.com/__/list/${putListId}`)
  .send({ text: 'Web GO' })
  .then(res => console.log(res.text))
  .then(() => console.log('done'));

const deleteListId = '594388af058f440012d4ae49';
xhr.delete(`https://web-go-demo.herokuapp.com/__/list/${deleteListId}`)
  .then(res => console.log(res.text))
  .then(() => console.log('done'));
```

4. Example of GraphQL

```js
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import gql from 'graphql-tag';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'https://web-go-demo.herokuapp.com/__/graphql'
  })
});

client.query({
    query: gql`
      {
        users {
          name
        }
      }
    `
  })
  .then(res => console.log(res));
```

5. Example of Sockets

```js
import io from 'socket.io-client';

const socket = io('https://web-go-demo.herokuapp.com/');

socket.on('connect', () => console.log('WS: Accept a connection.'));

socket.on('A', data => {
  console.log(data);
  socket.emit('B', { foo: 'baz' });
});
```

6. Example of Lodash

```js
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable';
import { lowerFirst, pad } from 'lodash';

Observable::of(lowerFirst('Hello'), pad('World', 5))
  .subscribe(value => console.log(value));
  // hello
  // World
```

7. Example of ReactiveX

```js
import { Observable } from 'rxjs';
import { timer, of } from 'rxjs/observable';
import { mapTo, combineAll } from 'rxjs/operator';

Observable::timer(2000)
  ::mapTo(Observable::of('Hello', 'World'))
  ::combineAll()
  .subscribe(value => console.log(value));
  // ["Hello"]
  // ["World"]
```

8. Example of Redux

```js
import { filter, map } from 'rxjs/operator';
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

9. Example of Immutable

```js
import { Observable } from 'rxjs';
import { from } from 'rxjs/observable';
import { map } from 'rxjs/operator';
import { Set } from 'immutable';

Observable::from(Set([1, 2, 3]))
  ::map(value => value * 2)
  .subscribe(value => console.log(value));
  // 2
  // 4
  // 6
```

10. Example of D3

```js
import 'd3-selection-multi';

import { Observable } from 'rxjs';
import { fromEvent } from 'rxjs/observable';
import { Set } from 'immutable';
import { select } from 'd3-selection';
import { transition } from 'd3-transition';

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
│   │   └── <page>
│   │       ├── <page>.{html,css,js,json,spec.js,e2e-spec.js}  -> page component ...
│   │       └── index.js
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
├── storage.rules
└── yarn.lock
```

## Known Issues

* ---------- **P0: Critical** ----------
* Serve dynamic content with Cloud Functions (ref, https://firebase.google.com/docs/hosting/functions)
* ---------- **P1: Urgent** ----------
* `rxjs` not working
* ---------- **P2: Required** ----------
* Write more tests
* ---------- **P3: Important** ----------
* ...
* ---------- **P4: Nice to have** ----------
* ...
