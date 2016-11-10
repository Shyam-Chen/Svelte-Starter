# Vanilla Starter Kit (Beta)

> A boilerplate for vanilla HTML/CSS/JS, Gulp, and Rollup. ([Live Demo](https://test-1498d.firebaseapp.com/))

[![Build Status](https://travis-ci.org/Shyam-Chen/Vanilla-Starter-Kit.svg?branch=master)](https://travis-ci.org/Shyam-Chen/Vanilla-Starter-Kit)
 //
[![Dependency Status](https://david-dm.org/Shyam-Chen/Vanilla-Starter-Kit.svg)](https://david-dm.org/Shyam-Chen/Vanilla-Starter-Kit)
[![devDependency Status](https://david-dm.org/Shyam-Chen/Vanilla-Starter-Kit/dev-status.svg)](https://david-dm.org/Shyam-Chen/Vanilla-Starter-Kit?type=dev)

This seed repository provides the following features:
* [x] Start coding vanilla **HTML/CSS/JS** right now.
* [x] Build system using **Gulp** and **Rollup** for working.
* [x] **CSS.Next** and **JS.Next** syntax support.
* [x] **Node.js** built-in support.
* [x] UI components with **Material**.
* [x] Back-end service with **Firebase**.
* [x] Routing and navigation with **Page.js**.
* [x] Development server with **BrowserSync**.
* [x] Static code analyzer with **HTMLHint**, **StyleLint**, and **ESLint**.
* [x] Testing framework with **Jasmine**.
* [x] Unit tests with **Karma**.
* [x] End-to-end tests with **Protractor**.
* [x] Version control with **Git**.
* [x] Fast and determinsitic builds with **Yarn**.
* [x] Virtual machine with **Docker** and **Compose**.
* [x] Continuous integration and deployment with **Travis**.

The following helpful resources to use this seed repository:
* Learning CSS.Next ([GO](http://cssnext.io/features/), article)
* Learning JS.Next ([GO](http://exploringjs.com/es6/index.html), book)
* Learning Node.js ([GO](http://shop.oreilly.com/product/0636920046936.do), book, $)
* Learning Material ([GO](https://webdesign.tutsplus.com/series/learning-material-design-lite--cms-888), article)
* Learning Firebase ([GO](https://github.com/firebase/quickstart-js), example)
* Learning Page.js ([GO](https://github.com/visionmedia/page.js/tree/master/examples), example)
* Learning CSS Block Element Modifier ([GO](https://css-tricks.com/bem-101/), article)
* Learning JS Functional Programming ([GO](https://www.packtpub.com/web-development/functional-programming-javascript), book, $)
* Learning Jasmine ([GO](https://www.packtpub.com/web-development/jasmine-javascript-testing-second-edition), book, $)
* Learning WebDriver ([GO](https://www.packtpub.com/books/content/testing-ui-using-webdriverjs), article)

## Getting Started

1) Clone this Boilerplate
```bash
$ git clone --depth 1 https://github.com/Shyam-Chen/Vanilla-Starter-Kit.git <PROJECT_NAME>
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

## Using Docker

1) Build the Image
```bash
$ docker build -t vanilla-starter-kit .
```

2) Run the Container
```bash
$ docker run -it -p 3000:3000 --name app vanilla-starter-kit
```

3) Or use Compose
```bash
$ docker-compose up  # equivalent to steps one and two
```

## Other Commands

```bash
$ yarn run dev
$ yarn run dev-watch  # no serve
```

```bash
$ yarn run test
$ yarn run test-watch  # no single run
```

```bash
$ yarn run prod
```

```bash
$ yarn run e2e  # pre: yarn run prod && yarn run webdriver
```

```bash
$ yarn run clean
```

```bash
$ yarn run reset
```

```bash
$ yarn run reinstall
```

## ToDo List
* [ ] Home Page (MDL & Firebase CRUD example)
* [ ] About Page (Seed project features)
