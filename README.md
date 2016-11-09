# Vanilla Starter Kit (Beta)

> A boilerplate for vanilla HTML/CSS/JS, Gulp, and Rollup. ([Live Demo](https://test-1498d.firebaseapp.com/))

[![Build Status](https://travis-ci.org/Shyam-Chen/Vanilla-Starter-Kit.svg?branch=master)](https://travis-ci.org/Shyam-Chen/Vanilla-Starter-Kit)
 //
[![Dependency Status](https://david-dm.org/Shyam-Chen/Vanilla-Starter-Kit.svg)](https://david-dm.org/Shyam-Chen/Vanilla-Starter-Kit)
[![devDependency Status](https://david-dm.org/Shyam-Chen/Vanilla-Starter-Kit/dev-status.svg)](https://david-dm.org/Shyam-Chen/Vanilla-Starter-Kit?type=dev)

This seed repository provides the following features:
* [x] Start coding vanilla **HTML/CSS/JS** right now.
* [x] Build system using **Gulp** and **Rollup** for working.
* [x] UI components with **Material**.
* [x] Back-end service with **Firebase**.
* [x] **CSS.Next** and **JS.Next** syntax support.
* [x] **Node.js** built-in support.
* [x] Routing with **Page.js**.
* [ ] Internationalization with **I18nextify**.
* [x] Data visualization with **Chart.js**.
* [x] Development server with **BrowserSync**.
* [x] Static code analyzer with **HTMLHint**, **StyleLint**, and **ESLint**.
* [x] Testing framework with **Jasmine**.
* [x] Unit tests with **Karma**.
* [x] End-to-end tests with **Protractor**.
* [x] Version control with **Git**.
* [x] Fast and determinsitic builds with **Yarn**.
* [x] Virtual machine with **Docker** and **Compose**.
* [x] Continuous Integration and Continous Delivery with **Travis**.

The following helpful resources to use this seed repository:
* Learning Material ([GO](https://webdesign.tutsplus.com/series/learning-material-design-lite--cms-888), article)
* Learning Firebase ([GO](https://github.com/firebase/quickstart-js), example)
* Learning CSS.Next ([GO](http://cssnext.io/features/), article)
* Learning JS.Next ([GO-1](http://exploringjs.com/es6/index.html), [GO-2](https://leanpub.com/understandinges6/read), book)
* Learning Page.js ([GO](https://github.com/visionmedia/page.js/tree/master/examples), example)
* Learning I18nextify ([GO](https://github.com/i18next/i18nextify/tree/master/example), example)
* Learning Chart.js ([GO](https://www.sitepoint.com/introduction-chart-js-2-0-six-examples/), article)
* Learning Block Element Modifier ([GO](https://css-tricks.com/bem-101/), article)
* Learning Functional Programming ([GO](https://www.packtpub.com/web-development/functional-programming-javascript), book, $)
* Learning Node.js ([GO](http://shop.oreilly.com/product/0636920046936.do), book, $)
* Learning Jasmine ([GO](https://www.packtpub.com/web-development/jasmine-javascript-testing-second-edition), book, $)
* Learning WebDriverJS ([GO](https://www.packtpub.com/books/content/testing-ui-using-webdriverjs), article)

## Getting Started

### Clone this Boilerplate
```bash
$ git clone --depth 1 https://github.com/Shyam-Chen/Vanilla-Starter-Kit.git <PROJECT_NAME>
$ cd <PROJECT_NAME>
```

### Install Dependencies
```bash
$ yarn install
```

### Run the Application
```bash
$ yarn start
```

## Using Docker

### Run the Application
```bash
$ docker build -t vanilla-starter-kit .
$ docker run -it -p 3000:3000 --name app vanilla-starter-kit
```

### Run the Application with Compose
```bash
$ docker-compose up
```

## Other Commands

```bash
$ yarn run dev
$ yarn run dev-watch  # TODO
```

```bash
$ yarn run test
$ yarn run test-watch
```

```bash
$ yarn run prod
```

```bash
# Pre - yarn run prod && yarn run webdriver
$ yarn run e2e
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
