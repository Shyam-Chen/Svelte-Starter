# Frontend Starter Kit

:icecream: A boilerplate for HTML5, Material, Firebase, Parcel, Babel, PostHTML, and PostCSS.

[![Build Status](https://img.shields.io/circleci/project/Shyam-Chen/Frontend-Starter-Kit/master.svg)](https://circleci.com/gh/Shyam-Chen/Frontend-Starter-Kit)
[![Coverage Status](https://img.shields.io/codecov/c/github/Shyam-Chen/Frontend-Starter-Kit/master.svg)](https://codecov.io/gh/Shyam-Chen/Frontend-Starter-Kit)
 //
[![dependencies Status](https://david-dm.org/Shyam-Chen/Frontend-Starter-Kit/status.svg)](https://david-dm.org/Shyam-Chen/Frontend-Starter-Kit)
[![devDependencies Status](https://david-dm.org/Shyam-Chen/Frontend-Starter-Kit/dev-status.svg)](https://david-dm.org/Shyam-Chen/Frontend-Starter-Kit?type=dev)

[Live Demo](https://web-go-demo.firebaseapp.com/)

This seed repository provides the following features:

* ---------- **Essentials** ----------
* [x] User interface components with [**Material**](https://material.io/).
* [x] Backend cloud services with [**Firebase**](https://firebase.google.com/).
* [x] Routing and navigation with [**Page**](http://visionmedia.github.io/page.js/).
* [x] Utility functions with [**Lodash**](https://lodash.com/).
* [x] Reactive extensions with [**ReactiveX**](http://reactivex.io/).
* [x] Scalable state management with [**MobX**](https://mobx.js.org/).
* [x] Immutable collections with [**Immer**](https://github.com/mweststrate/immer).
* [x] Data visualizations with [**D3**](https://d3js.org/).
* [x] 3D scene graphs with [**Three**](https://threejs.org/).
* ---------- **Tools** ----------
* [ ] Module bundler with [**Parcel**](https://parceljs.org/).
* [ ] HTML transformations with [**PostHTML**](https://github.com/posthtml/posthtml).
* [x] Future CSS features with [**PostCSS**](http://postcss.org/).
* [x] Next generation JavaScript with [**Babel**](https://babeljs.io/).
* [x] Synchronised browser with [**BrowserSync**](https://browsersync.io/).
* [x] HTML static code analyzer with [**HTMLHint**](http://htmlhint.com/).
* [x] CSS static code analyzer with [**StyleLint**](https://stylelint.io/).
* [x] JavaScript static code analyzer with [**ESLint**](https://eslint.org).
* [x] Type annotations with [**Flow**](https://flow.org/).
* [x] Testing platform with [**Jest**](http://facebook.github.io/jest/).
* [x] UI testing with [**Puppeteer**](https://github.com/GoogleChrome/puppeteer).
* [x] Test coverage integration with [**Codecov**](https://codecov.io/).
* [x] Error tracking with [**Sentry**](https://sentry.io/).
* ---------- **Environments** ----------
* [x] Client-side platform with [**HTML5**](https://platform.html5.org/).
* [x] Operating system with [**Linux**](https://www.linux.org/).
* [x] Text editor with [**Atom**](https://atom.io/).
* [x] Version control with [**Git**](https://git-scm.com/).
* [x] Code repository with [**GitHub**](https://github.com/).
* [x] Fast and deterministic builds with [**Yarn**](https://yarnpkg.com/).
* [x] Software container with [**Docker**](https://www.docker.com/).
* [x] Continuous integration with [**CircleCI**](https://circleci.com/).

Here are some related seed repositories:

* ---------- **Client-side** ----------
* [Frontend Starter Kit](https://github.com/Shyam-Chen/Frontend-Starter-Kit) - Make for Progressive Web Apps.
* [Cordova Phonegap Starter](https://github.com/Shyam-Chen/Cordova-Phonegap-Starter) - Make for Cross-platform Mobile Apps.
* [Electron Chromium Starter](https://github.com/Shyam-Chen/Electron-Chromium-Starter) - Make for Cross-platform Desktop Apps.
* ---------- **Server-side** ----------
* [Backend Starter Kit](https://github.com/Shyam-Chen/Backend-Starter-Kit) - Make for Flexible Cloud Platform.
* [Firebase Functions Starter](https://github.com/Shyam-Chen/Firebase-Functions-Starter) - Make for Serverless Cloud Functions.
* [Kubernetes Engine Starter](https://github.com/Shyam-Chen/Kubernetes-Engine-Starter) - Make for Containerized Cloud Infrastructure.

## Table of Contents

* [Getting Started](#getting-started)
* [Dockerization](#dockerization)
* [Configuration](#configuration)
* [Using Libraries](#using-libraries)
* [Directory Structure](#directory-structure)

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

4. Test the Application

```bash
$ yarn test
```

5. Build the application

```bash
$ yarn build
```

6. Deploy the application

```bash
$ yarn firebase use <PROJECT_ENV>
$ yarn firebase deploy
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

Default configuration

```js
// tools/env.js
export const SITE_URL = process.env.SITE_URL || 'https://web-go-demo.firebaseapp.com';
export const FUNC_URL = process.env.FUNC_URL || 'https://us-central1-web-go-demo.cloudfunctions.net';

// for index.html
export const INDEX_ENV = {
  APP_BASE: process.env.APP_BASE || '/',
  GOOGLE_ANALYTICS: process.env.GOOGLE_ANALYTICS || 'UA-84381641-2'
};

// for app.js
export const APP_ENV = {
  FIREBASE_CONFIG: {
    apiKey: process.env.FIREBASE_KEY || 'AIzaSyDBA0yVS0JuIqGaoN9nafvPFxPSVgmxwnw',
    authDomain: process.env.FIREBASE_DOMAIN || 'web-go-demo.firebaseapp.com',
    databaseURL: process.env.FIREBASE_PROJECT || 'https://web-go-demo.firebaseio.com',
    projectId: process.env.FIREBASE_DATABASE || 'web-go-demo',
    storageBucket: process.env.FIREBASE_STORAGE || 'web-go-demo.appspot.com',
    messagingSenderId: process.env.FIREBASE_MESSAGING || '584431831746'
  },
  SENTRY_URL: process.env.SENTRY_URL || 'https://70484e0dda784a1081081ca9c8237792@sentry.io/236866',
  FUNC_URL
};

export const DEV_PORT = process.env.DEV_PORT || 8000;
export const TEST_PORT = process.env.TEST_PORT || 8080;

export const PROXY_URL = process.env.PROXY_URL || 'http://localhost:3000'
```

## Using Libraries

1. Example of Component

```html
<!-- src/shared/new-component/new-component.html -->
<div class="<%= style['card'] %>">
  <div class="<%= style['card-title'] %>"><%= title %></div>
  <div class="<%= style['card-content'] %>"><%= content %></div>
</div>

<div class="<%= style['card'] %>">
  <div class="<%= style['card-title'] %> <%= style['card-title--unfancy'] %>"><%= title %></div>
  <div class="<%= style['card-content'] %>"><%= content %></div>
</div>
```

```styl
/* src/shared/new-component/new-component.css */
.card {  // element
  // ...

  &-title {  // element
    // ...

    &--unfancy {  // modifier
      // ...
    }
  }

  &-content {  // element
    // ...
  }
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

const API_LIST = 'https://web-go-demo.herokuapp.com/__/text-list';

axios.get(API_LIST)
  .then(res => console.log(res.data))
  .then(() => console.log('done'));

axios.get(API_LIST, { params: { text: 'a' } })
  .then(res => console.log(res.data))
  .then(() => console.log('done'));

axios.post(API_LIST, { text: 'Web GO' })
  .then(res => console.log(res.data))
  .then(() => console.log('done'));

axios.put(`${API_LIST}/5943881e058f440012d4ae47`, { text: 'Web GO' })
  .then(res => console.log(res.data))
  .then(() => console.log('done'));

axios.delete(`${API_LIST}/594388af058f440012d4ae49`)
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

client
  .query({
    query: gql`
      query List {
        list { _id text }
      }
    `
  })
  .then(res => console.log(res.data));

client
  .query({
    query: gql`
      query List {
        list(text: "a") { _id text }
      }
    `
  })
  .then(res => console.log(res.data));

client
  .mutate({
    mutation: gql`
      mutation List {
        addText(text: "Web GO") { _id text }
      }
    `
  })
  .then(res => console.log(res.data));

client
  .mutate({
    mutation: gql`
      mutation List {
        updateText(_id: "5943881e058f440012d4ae47", text: "Web GO") { _id text }
      }
    `
  })
  .then(res => console.log(res.data));

client
  .mutate({
    mutation: gql`
      mutation List {
        deleteText(_id: "594388af058f440012d4ae49") { _id text }
      }
    `
  })
  .then(res => console.log(res.data));
```

5. Example of Socket Client

```js
import io from 'socket.io-client';

const socket = io('wss://web-go-demo.herokuapp.com/');

socket.on('connect', () => console.log('Accept a connection.'));

socket.on('A', data => {
  console.log(data);
  socket.emit('B', { foo: 'baz' });
});
```

6. Example of GraphQL Subscriptions

```js
import { SubscriptionClient } from 'subscriptions-transport-ws';
import ApolloClient from 'apollo-client';

const client = new SubscriptionClient(
  'wss://web-go-demo.herokuapp.com/__/graphql',
  { reconnect: true }
);

const apolloClient = new ApolloClient({
  networkInterface: client
});
```

7. Example of Lodash

```js
import { lowerFirst, pad } from 'lodash';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable';

Observable::of(lowerFirst('Hello'), pad('World', 5))
  .subscribe(value => console.log(value));
  // hello
  // World
```

8. Example of ReactiveX

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

9. Example of MobX

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

10. Example of Immer

```js
import produce from 'immer';

const baseState = [
  { label: 'Babel', done: true },
  { label: 'Flow', done: false }
];

const nextState = produce(baseState, draftState => {
  draftState.push({ label: 'TypeScript' });
  draftState[1].done = true;
});

baseState.length;  // 2
nextState.length;  // 3
```

11. Example of D3

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

12. Example of Three

```js
import { PerspectiveCamera, Scene, BoxGeometry, MeshBasicMaterial, Mesh, WebGLRenderer } from 'three';

let [camera, scene, renderer, geometry, material, mesh] = [];

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

## Directory Structure

```
.
├── flow-typed  -> module types
├── src
│   ├── assets  -> audios, datas, fonts, images, styles, videos
│   ├── pages
│   │   └── <feature>
│   │       ├── _components  -> feature components
│   │       │   └── <feature>
│   │       │       ├── <feature>.{html,css,js,spec.js}
│   │       │       └── index.js
│   │       ├── _languages  -> internationalization
│   │       ├── _templates  -> lite components
│   │       │   └── <feature>.html
│   │       ├── <feature>.{html,css,js,spec.js}
│   │       └── index.js
│   ├── shared  -> shared components
│   ├── utils  -> utility functions
│   ├── app.js
│   ├── index.html
│   ├── polyfills.js  -> shims, pre-vendor
│   └── vendor.js  -> third-party libraries
├── test  -> E2E testing
├── tools
│   ├── config
│   │   └── {babel,postcss,reshape,rollup}.js
│   ├── rules
│   │   └── database.json,storage
│   ├── tasks
│   │   └── {app,build,chunkhash,copy,entrypoint,lint,polyfills,precache,serve,sitemap,vendor,watch}.js
│   ├── utils
│   │   └── {empty-mapper,handle-errors,index,inject-service,resolve-id,service-worker,setup-files}.js
│   └── env.js
├── .babelrc
├── .editorconfig
├── .eslintrc
├── .firebaserc
├── .flowconfig
├── .gitattributes
├── .gitignore
├── .htmlhintrc
├── .stylelintrc
├── Dockerfile
├── LICENSE
├── README.md
├── circle.yml
├── docker-compose.yml
├── firebase.json
├── gulpfile.babel.js
├── jest.config.js
├── package.json
└── yarn.lock
```
