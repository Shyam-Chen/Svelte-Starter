# Web Starter Kit (Beta)

> A boilerplate for Lodash, RxJS, Redux, Material, Firebase, and Chart.js.

[![Build Status](https://travis-ci.org/Shyam-Chen/Web-Starter-Kit.svg?branch=master)](https://travis-ci.org/Shyam-Chen/Web-Starter-Kit)
 //
[![Dependency Status](https://david-dm.org/Shyam-Chen/Web-Starter-Kit.svg)](https://david-dm.org/Shyam-Chen/Web-Starter-Kit)
[![devDependency Status](https://david-dm.org/Shyam-Chen/Web-Starter-Kit/dev-status.svg)](https://david-dm.org/Shyam-Chen/Web-Starter-Kit?type=dev)

[Live Demo](https://test-1498d.firebaseapp.com/)

This seed repository provides the following features:
* ---------- **Primary Key** ----------
* [x] Utility functions with [**Lodash**](https://lodash.com/).
* [x] Reactive functions with [**Reactivex**](http://reactivex.io/rxjs/).
* [x] State container with [**Redux**](http://redux.js.org/).
* [x] Data visualization with [**D3**](https://d3js.org/).
* [x] User interface components with [**Material**](https://material.io/).
* [x] Backend cloud services with [**Firebase**](https://firebase.google.com/).
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

The default prepared third-party tool libraries:
* `lodash` - `import { defaults, partition } from 'lodash-es';`
* `rxjs`
  * `import { Observable } from 'rxjs/Observable';`
  * `import { timer } from 'rxjs/observable/timer';`
  * `import { mapTo } from 'rxjs/operator/mapTo';`
* `redux` - `import { combineReducers, createStore, applyMiddleware } from 'redux';`
* `redux-observable` - `import { combineEpics, createEpicMiddleware } from 'roll-redux-observable';`
* `d3` - `import { scaleLinear } from 'd3-scale';`

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

4) Stay up-to-date
```bash
$ git remote add upstream https://github.com/Shyam-Chen/Web-Starter-Kit.git
$ git pull upstream master
```

## Using Docker

1) Build the Image
```bash
$ docker build -t Web-Starter-Kit .
```

2) Run the Container
```bash
$ docker run -it -p 3000:3000 --name app Web-Starter-Kit
```

3) Just Compose
```bash
$ docker-compose up
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

## TODO List
* ---------- 1 ----------
* Service Worker
* Web App Manifest
* PostHTML support ... then release
* ---------- 2 ----------
* `async/await` support
* Migrate from `material-design-lite` to `material-components-web`
* Migrate from `chart.js` to `d3`
* Code refactoring
* more ...
