# Frontend Starter Kit

:icecream: A boilerplate for :star2: HTML5 :star2:, Material, Firebase, Gulp, Rollup, Babel, Reshape, and PostCSS.

[![Build Status](https://travis-ci.org/Shyam-Chen/Frontend-Starter-Kit.svg?branch=master)](https://travis-ci.org/Shyam-Chen/Frontend-Starter-Kit)
 //
[![dependencies Status](https://david-dm.org/Shyam-Chen/Frontend-Starter-Kit/status.svg)](https://david-dm.org/Shyam-Chen/Frontend-Starter-Kit)
[![devDependencies Status](https://david-dm.org/Shyam-Chen/Frontend-Starter-Kit/dev-status.svg)](https://david-dm.org/Shyam-Chen/Frontend-Starter-Kit?type=dev)

[Live Demo](https://web-go-demo.firebaseapp.com/) | [Code Examples](https://web-go-demo.firebaseapp.com/examples) | [Admin Page](https://web-go-demo.firebaseapp.com/admin)

This seed repository provides the following features:

* ---------- **Essentials** ----------
* [x] User interface components with [**Material**](https://material.io/).
* [x] Backend cloud services with [**Firebase**](https://firebase.google.com/).
* [x] Utility functions with [**Lodash**](https://lodash.com/).
* [x] Reactive extensions with [**ReactiveX**](http://reactivex.io/).
* [x] Scalable state management with [**MobX**](https://mobx.js.org/).
* [x] Immutable collections with [**Immutable**](http://facebook.github.io/immutable-js/).
* [x] Data visualizations with [**D3**](https://d3js.org/).
* [x] 3D scene graph with [**Three**](https://threejs.org/).
* ---------- **Tools** ----------
* [x] Build system with [**Gulp**](http://gulpjs.com/).
* [x] Module bundler with [**Rollup**](https://rollupjs.org/).
* [x] HTML transformations with [**Reshape**](https://reshape.ml/).
* [x] Future CSS features with [**PostCSS**](http://postcss.org/).
* [x] Next generation JavaScript with [**Babel**](https://babeljs.io/).
* [x] Type annotations with [**Flow**](https://flow.org/).
* [x] Synchronised browser with [**BrowserSync**](https://browsersync.io/).
* [x] HTML static code analyzer with [**HTMLHint**](http://htmlhint.com/).
* [x] CSS static code analyzer with [**StyleLint**](https://stylelint.io/).
* [x] JavaScript static code analyzer with [**ESLint**](https://eslint.org).
* [x] Testing framework with [**Jasmine**](https://jasmine.github.io/).
* [x] Unit tests with [**Karma**](http://karma-runner.github.io/).
* [x] End-to-end tests with [**Protractor**](http://www.protractortest.org/).
* ---------- **Environments** ----------
* [x] Client-side platform with [**HTML5**](https://platform.html5.org/).
* [x] Operating system with [**Linux**](https://www.linux.org/).
* [x] Text editor with [**Atom**](https://atom.io/).
* [x] Version control with [**Git**](https://git-scm.com/).
* [x] Code repository with [**GitHub**](https://github.com/).
* [x] Fast and deterministic builds with [**Yarn**](https://yarnpkg.com/).
* [x] Software container with [**Docker**](https://www.docker.com/).
* [x] Continuous integration with [**Travis**](https://travis-ci.org/).

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

export const newComponent = (name, data) =>
  document.querySelector(`#${name}`)
    .innerHTML = _(template, { imports: { style } })(data);
```

```js
// src/shared/new-component/index.js
export * from './new-component';
```

```js
// use the new component
import { newComponent } from '~/components/new-component';

newComponent('ex-1', { title: 'Title 1', content: 'Content 1' });
newComponent('ex-2', { title: 'Title 2', content: 'Content 2' });
```

```html
<!-- use the new component -->
<div id="ex-1"></div>
<div id="ex-2"></div>
```

2. Example of Route

```js
// src/pages/new-route/new-route.js
import { template as _ } from 'lodash';

import { layout } from '~/components/layout';

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
import axios from 'axios';

const API_LIST = 'https://web-go-demo.herokuapp.com/__/list';

axios.get(API_LIST)
  .then(res => console.log(res.data))
  .then(() => console.log('done'));

let searchText = 'a';
axios.get(`${API_LIST}?text=${searchText}`)
  .then(res => console.log(res.data))
  .then(() => console.log('done'));

let addText = 'Web GO';
axios.post(API_LIST, { text: addText })
  .then(res => console.log(res.data))
  .then(() => console.log('done'));

let putListId = '5943881e058f440012d4ae47';
let updateText = 'Web GO';
axios.put(`${API_LIST}/${putListId}`, { text: updateText })
  .then(res => console.log(res.data))
  .then(() => console.log('done'));

let deleteListId = '594388af058f440012d4ae49';
axios.delete(`${API_LIST}/${deleteListId}`)
  .then(res => console.log(res.data))
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
      query List {
        list { _id text }
      }
    `
  })
  .then(res => console.log(res.data));

let searchText = 'a';
client.query({
    query: gql`
      query List {
        list(text: "${searchText}") { _id text }
      }
    `
  })
  .then(res => console.log(res.data));

let addText = 'Web GO';
client.mutate({
    mutation: gql`
      mutation List {
        addText(text: "${addText}") { _id text }
      }
    `
  })
  .then(res => console.log(res.data));

let editListId = '5943881e058f440012d4ae47';
let updateText = 'Web GO';
client.mutate({
    mutation: gql`
      mutation List {
        updateText(_id: "${editListId}", text: "${updateText}") { _id text }
      }
    `
  })
  .then(res => console.log(res.data));

let deleteListId = '594388af058f440012d4ae49';
client.mutate({
    mutation: gql`
      mutation List {
        deleteText(_id: "${deleteListId}") { _id text }
      }
    `
  })
  .then(res => console.log(res.data));
```

5. Example of Socket

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
import { lowerFirst, pad } from 'lodash';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable';

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

8. Example of MobX

```js
import { observable, action, autorun } from 'mobx';

const store = observable({
  value: 0,

  increment: action(() => store.value++),
  decrement: action(() => store.value--),
  incrementAsync: action(() => setTimeout(() => store.increment(), 1000)),
  incrementIfOdd: action(() => {
    if (Math.abs(store.value % 2) === 1) {
      store.increment();
    }
  }),

  get evenOrOdd() {
    return store.value % 2 === 0 ? 'even' : 'odd';
  }
});

autorun(() => {
  console.log(store.value, store.evenOrOdd);  // 0, even
  store.increment();  // 0 -> 1
  console.log(store.value, store.evenOrOdd);  // 1, odd
  store.incrementAsync();  // 1 -> 2
  store.incrementAsync();  // 2 -> 3
  console.log(store.value, store.evenOrOdd);  // 3, odd
  store.incrementIfOdd();  // 3 -> 4
  store.incrementIfOdd();  // 4 -> 4
  onsole.log(store.value, store.evenOrOdd);  // 4, even
});
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
├── public  -> client-side public
├── scripts  -> shell scripts ...
├── src
│   ├── assets  -> audios, datas, fonts, images, videos ...
│   ├── pages
│   │   └── <feature>
│   │       ├── <feature>.{html,css,js,json,spec.js,e2e-spec.js}
│   │       └── index.js
│   ├── shared  -> shared components ...
│   ├── utils  -> utility functions ...
│   ├── app.css
│   ├── app.js
│   ├── index.html
│   ├── polyfills.js  -> polyfills, shims, prevendor ...
│   └── vendor.js  -> third-party libraries ...
├── tools
│   ├── config
│   │   └── {babel,karma,postcss,protractor,reshape,rollup}.js
│   ├── rules
│   │   └── database.rules.json,storage.rules
│   ├── tasks
│   │   └── {app,build,chunkhash,copy,e2e,entrypoint,lint,polyfills,precache,serve,sitemap,unit,vendor,watch}.js
│   ├── utils
│   │   └── {e2e-server,handle-errors,index,inject-service,resolve-id,service-worker}.js
│   ├── constants.js
│   └── render.js
├── .babelrc
├── .editorconfig
├── .eslintrc
├── .firebaserc
├── .flowconfig
├── .gitattributes
├── .gitignore
├── .htmlhintrc
├── .stylelintrc
├── .travis.yml
├── Dockerfile
├── LICENSE
├── README.md
├── docker-compose.yml
├── firebase.json
├── gulpfile.babel.js
├── package.json
└── yarn.lock
```

## Known Issues

* ---------- **P0: Critical** ----------
* [Feature] Server-side Rendering with Cloud Functions
* [Feature] Prerenders static `.html` pages with `pre-render`
* ---------- **P1: Urgent** ----------
* [Enhancement] Offline Google Analytics
* [Enhancement] Real Flow types
* [Enhancement] Use more Reshape plugins
* ---------- **P2: Required** ----------
* [Feature] HTTP mocking with `nock`
* [Feature] Add code coverage reports
* [Feature] Add unit tests for Cloud Functions with Jest
* ---------- **P3: Important** ----------
* [Example] Do more examples
* [Example] Write more tests
* ---------- **P4: Nice to have** ----------
* [Feature] Remove unused CSS with PurifyCSS
* [Feature] Integration with Hot Module Replacement (`rollup-plugin-hmr`)
