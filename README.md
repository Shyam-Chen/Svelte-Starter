# Vanilla Starter Kit (Beta)

> A single-page application boilerplate for Vanilla, Material, Firebase, Gulp, Rollup, PostCSS, and Babel. ([Live Demo](https://test-1498d.firebaseapp.com/))

[![Build Status](https://travis-ci.org/Shyam-Chen/Vanilla-Starter-Kit.svg?branch=master)](https://travis-ci.org/Shyam-Chen/Vanilla-Starter-Kit)
 //
[![Dependency Status](https://david-dm.org/Shyam-Chen/Vanilla-Starter-Kit.svg)](https://david-dm.org/Shyam-Chen/Vanilla-Starter-Kit)
[![devDependency Status](https://david-dm.org/Shyam-Chen/Vanilla-Starter-Kit/dev-status.svg)](https://david-dm.org/Shyam-Chen/Vanilla-Starter-Kit?type=dev)

This seed repository provides the following features:
* [x] Start coding **Vanilla HTML/CSS/JS** right now.
* [x] UI components with **Material**.
* [x] Back-end service with **Firebase**.
* [x] Routing and navigation with **Page.js**.
* [x] Build system with **Gulp**.
* [x] Module bundler with **Rollup**.
* [x] Future CSS features with **PostCSS**.
* [x] Next generation JS with **Babel**.
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
* [x] CSS with Block Element Modifier ([GO](http://getbem.com/)).
* [x] Functional Programming in JavaScript ([GO](https://github.com/getify/Functional-Light-JS)).
* [ ] ...

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
