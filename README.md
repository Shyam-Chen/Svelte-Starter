# Frontend Starter Kit

:icecream: A boilerplate for :star2: HTML5 :star2:, Material, Firebase, Gulp, Rollup, Babel, Reshape, and PostCSS.

[![Build Status](https://travis-ci.org/Shyam-Chen/Frontend-Starter-Kit.svg?branch=master)](https://travis-ci.org/Shyam-Chen/Frontend-Starter-Kit)
 //
[![dependencies Status](https://david-dm.org/Shyam-Chen/Frontend-Starter-Kit/status.svg)](https://david-dm.org/Shyam-Chen/Frontend-Starter-Kit)
[![devDependencies Status](https://david-dm.org/Shyam-Chen/Frontend-Starter-Kit/dev-status.svg)](https://david-dm.org/Shyam-Chen/Frontend-Starter-Kit?type=dev)

[Live Demo](https://web-go-demo.firebaseapp.com/) | [Admin Demo](https://web-go-demo.firebaseapp.com/admin) (Account: `ecmatc39@gmail.com`, `123456`)

This seed repository provides the following features:

* ---------- **Essentials** ----------
* [x] User interface components with [**Material**](https://material.io/).
* [x] Backend cloud services with [**Firebase**](https://firebase.google.com/).
* [x] Utility functions with [**Lodash**](https://lodash.com/).
* [x] Reactive extensions with [**ReactiveX**](http://reactivex.io/).
* [x] State container with [**Redux**](http://redux.js.org/).
* [x] Immutable collections with [**Immutable**](http://facebook.github.io/immutable-js/).
* [x] Data visualizations with [**D3**](https://d3js.org/).
* [x] 3D scene graph with [**Three**](https://threejs.org/).
* ---------- **Tools** ----------
* [x] Build system with [**Gulp**](https://github.com/gulpjs/gulp).
* [x] Module bundler with [**Rollup**](https://github.com/rollup/rollup).
* [x] HTML transformations with [**Reshape**](https://github.com/reshape/reshape).
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
* [x] Client-side platform with [**HTML5**](https://platform.html5.org/).
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
$ git clone --depth 1 https://github.com/Shyam-Chen/Frontend-Starter-Kit.git <PROJECT_NAME>
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
$ git remote add upstream https://github.com/Shyam-Chen/Frontend-Starter-Kit.git
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
<!-- src/shared/new-component/new-component.html -->
<div class="${ style.card }">
  <div class="${ style.card__title }">${ title }</div>
  <div class="${ style.card__content }">${ content }</div>
</div>
```

```scss
// src/shared/new-component/new-component.css
.card {
  // ...
  &__title { /* ... */ }
  &__content { /* ... */ }
}
```

```js
// src/shared/new-component/new-component.js
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
// src/shared/new-component/index.js
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

client.query(
  {
    query: gql`
      {
        list {
          text
        }
      }
    `
  }
).then(res => console.log(res.data));
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
import { select } from 'd3-selection';

const exWidth = 400;
const exHeight = 200;
const exDataset = [5, 10, 15, 20, 15, 10, 15, 20, 15, 10, 5];

const exSvgEl = select('#ex')
  .append('svg')
  .attr('width', exWidth)
  .attr('height', exHeight);

exSvgEl.selectAll('rect')
  .data(exDataset)
  .enter()
  .append('rect')
  .attr('x', (data, index) => index * (exWidth / exDataset.length))
  .attr('fill', data => `rgba(200, 100, 200, ${data / 25})`)
  .attr('y', data => exHeight - (data * 4))
  .attr('width', exWidth / exDataset.length - 1)
  .attr('height', data => data * 4);
```

```html
<div id="ex"></div>
```

11. Example of Three

```js
import { PerspectiveCamera, Scene, BoxGeometry, MeshBasicMaterial, Mesh, WebGLRenderer } from 'three';

let camera, scene, renderer, geometry, material, mesh;

const init = () => {
  camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
  camera.position.z = 1000;

  scene = new Scene();

  geometry = new BoxGeometry(200, 200, 200);
  material = new MeshBasicMaterial({ color: 0xff0000, wireframe: true });

  mesh = new Mesh(geometry, material);
  scene.add(mesh);

  renderer = new WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);

  document.querySelector('#ex')
    .appendChild(renderer.domElement);
};

const animate = () => {
  requestAnimationFrame(animate);

  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.02;

  renderer.render(scene, camera);
};

init();
animate();
```

```html
<div id="ex"></div>
```

## All Commands

```bash
$ yarn dev
$ yarn prod

$ yarn lint
$ yarn unit
$ yarn e2e

$ yarn reset
$ yarn reinstall

$ yarn deploy
```

## Directory Structure

```
.
├── functions  -> server-side rules ...
├── scripts  -> shell scripts ...
├── src
│   ├── assets  -> audios, datas, fonts, images, videos ...
│   ├── pages  -> parent pages, child pages ...
│   │   └── <page>
│   │       ├── <component>  -> presentational components ...
│   │       │   ├── <feature>.{html,css,js,json,spec.js}  -> feature component ...
│   │       │   └── index.js
│   │       ├── <container>  -> container components ...
│   │       │   ├── constants.js
│   │       │   ├── actions.js  -> action creators ...
│   │       │   ├── effects.js  -> side effects ...
│   │       │   ├── reducer.js  -> reducer function ...
│   │       │   ├── <feature>.{html,css,js,json,spec.js}  -> feature component ...
│   │       │   └── index.js
│   │       ├── <feature>.{html,css,js,json,spec.js,e2e-spec.js}  -> feature component ...
│   │       └── index.js
│   ├── shared  -> shared components ...
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
│   │   └── {babel,karma,postcss,protractor,reshape,rollup}.js
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
* Serve dynamic content (ref, https://firebase.google.com/docs/hosting/functions)
* ---------- **P1: Urgent** ----------
* `rxjs` can't import
* `rxjs-es` can't use
* `socket.io-client` can't import
* `axios` can't import (`superagent` -> `axios`)
* Need to mock HTTP (tests)
* Add code coverage reports
* Add unit tests for Cloud Functions (Jest)
* ---------- **P2: Required** ----------
* Do more examples
* Write more tests
* ---------- **P3: Important** ----------
* Think about Webpack (Rollup -> Webpack)
* Think about Jest (Jasmine & Karma -> Jest)
* Think about Nightwatch (Protractor -> Nightwatch)
* ---------- **P4: Nice to have** ----------
* ...
