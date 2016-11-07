# Vanilla Starter Kit (Alpha)

> A boilerplate for vanilla HTML/CSS/JS, Gulp, and Rollup. ([Live Demo](https://test-1498d.firebaseapp.com/))

[![Build Status](https://travis-ci.org/Shyam-Chen/Vanilla-Starter-Kit.svg?branch=master)](https://travis-ci.org/Shyam-Chen/Vanilla-Starter-Kit)
 //
[![Dependency Status](https://david-dm.org/Shyam-Chen/Vanilla-Starter-Kit.svg)](https://david-dm.org/Shyam-Chen/Vanilla-Starter-Kit)
[![devDependency Status](https://david-dm.org/Shyam-Chen/Vanilla-Starter-Kit/dev-status.svg)](https://david-dm.org/Shyam-Chen/Vanilla-Starter-Kit?type=dev)

This repository provides the following features:
* [x] Start coding vanilla **HTML/CSS/JS** right now.
* [x] Build system using **Gulp** and **Rollup** for working.
* [x] UI components with **Material**.
* [x] Back-end service with **Firebase**.
* [x] **CSS.Next** and **JS.Next** syntax support.
* [x] **Node.js** built-in support.
* [x] Routing with **Page**.
* [ ] Internationalization with **I18next** (TODO: Example).
* [x] Development server with **BrowserSync**.
* [x] Static code analyzer with **HTMLHint**, **StyleLint**, and **ESLint**.
* [x] Testing framework with **Jasmine**.
* [ ] Unit tests with **Karma** (TODO: Rollup).
* [ ] End-to-end tests with **Protractor** (TODO: Use `browser.driver`, Babel).
* [x] Version control with **Git**.
* [x] Fast and determinsitic builds with **Yarn**.
* [x] Virtual machine with **Docker** and **Compose**.
* [x] Continuous Integration and Continous Delivery with **Travis**.

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

### Test the Application
```bash
$ yarn test
$ yarn run e2e
```

### Clean the Application
```bash
$ yarn run clean
```

### Reset the Application
```bash
$ yarn run reset
```

### Reinstall the Application
```bash
$ yarn run reinstall
```
