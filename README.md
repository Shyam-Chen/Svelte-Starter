# Web Starter Kit (Beta)

> A boilerplate for Lodash, ReactiveX, Redux, Material, Firebase, and Chart.

[![Build Status](https://travis-ci.org/Shyam-Chen/Web-Starter-Kit.svg?branch=master)](https://travis-ci.org/Shyam-Chen/Web-Starter-Kit)
 //
[![Dependency Status](https://david-dm.org/Shyam-Chen/Web-Starter-Kit.svg)](https://david-dm.org/Shyam-Chen/Web-Starter-Kit)
[![devDependency Status](https://david-dm.org/Shyam-Chen/Web-Starter-Kit/dev-status.svg)](https://david-dm.org/Shyam-Chen/Web-Starter-Kit?type=dev)

[Live Demo](https://test-1498d.firebaseapp.com/)

This seed repository provides the following features:
* ---------- **Primary Key** ----------
* [x] Utility functions with **Lodash**.
* [x] Reactive extensions with **ReactiveX**.
* [x] State container with **Redux**.
* [x] User interface components with **Material**.
* [x] Backend cloud services with **Firebase**.
* [x] Data visualization with **Chart**.
* ---------- **Dev Tools** ----------
* [x] Build system with **Gulp**.
* [x] Module bundler with **Rollup**.
* [ ] HTML transformations with **PostHTML**.
* [x] Future CSS features with **PostCSS**.
* [x] Next generation JavaScript with **Babel**.
* [x] Development server with **BrowserSync**.
* ---------- **Test Tools** ----------
* [x] HTML static code analyzer with **HTMLHint**.
* [x] CSS static code analyzer with **StyleLint**.
* [x] JavaScript static code analyzer with **ESLint**.
* [x] Testing framework with **Jasmine**.
* [x] Unit tests with **Karma**.
* [x] End-to-end tests with **Protractor**.
* ---------- **Environment** ----------
* [x] Operating system with **Linux**.
* [x] Text editor with **Atom**.
* [x] Version control with **Git**.
* [x] Fast and deterministic builds with **Yarn**.
* [x] Containers with **Docker**.
* [x] Continuous integration with **Travis**.

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

$ yarn run clean
$ yarn run reset
$ yarn run reinstall
```

## Folder Name
* ---------- 1 ----------
* `routes` - isomorphic javascript (not yet - `universal-router`)
* ---------- 2 ----------
* `pages` - pages, child pages ...
* ---------- 3 ----------
* `components` - shared components, reusable components ...
* ---------- 4 ----------
* `scripts` - js, functions, states ...
* `styles` - css, variables, custom css ...
* `templates` - html, child templates ... (not yet - `posthtml`)
* ---------- 5 ----------
* `assets` - datas, images, fonts, videos, audios, files ...

## TODO List
* Service Workers and Web App Manifest - Progressive web application
* Async functions
* Migrate from `page.js` to `universal-router` - Universal web application
* Try it - `rxjs`, `redux-observable` ...
* Migrate from `material-design-lite` to `@material/*` - Modular components
* Individually installable `firebase` features - Modular components
* ...
