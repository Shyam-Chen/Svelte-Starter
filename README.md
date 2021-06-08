# Svelte Starter

:icecream: A boilerplate for Svelte, Tailwind, Iconify, Babel, and PostCSS.

## Table of Contents

- [Project Setup](#project-setup)
- [Key Features](#key-features)
- Dockerization
- Configuration
- Directory Structure
- [Microservices](#microservices)

## Project Setup

Follow steps to execute this boilerplate.

### Install dependencies

```sh
$ yarn install
```

### Compiles and hot-reloads for development

```sh
$ yarn serve
```

### Compiles and minifies for production

```sh
$ yarn build
```

### Lints and fixes files

Files: `src/**/*.{js,css,svelte}`

```sh
$ yarn lint
```

### Runs unit tests

Files: `src/**/*.spec.js`

```sh
$ yarn unit
```

### Runs end-to-end tests

Files: `e2e/**/*.spec.js`

```sh
# Before running the `e2e` command, make sure to run the following commands.
$ yarn build
$ yarn preview

# If it's not setup, run it.
$ yarn setup

$ yarn e2e
```

### Measures site's URLs

Files: `e2e/**/*.meas.js`

```sh
# Before running the `meas` command, make sure to run the following commands.
$ yarn build
$ yarn preview

# If it's not setup, run it.
$ yarn setup

$ yarn meas
```

### Mock requests

[`mock/requests`](./mock/requests) is a fork of [Koa-Starter](https://github.com/Shyam-Chen/Koa-Starter) that was made easy and quick way to run mock APIs locally.

```sh
# If it's not active, run it.
$ yarn active

$ yarn mock
```

## Key Features

This seed repository provides the following features:


- ---------- **Essentials** ----------
- [x] [Svelte](https://github.com/sveltejs/svelte)
- [x] [Svelte Navigator](https://github.com/mefechoel/svelte-navigator)
- ---------- **Tools** ----------
- [ ] [Vite](https://github.com/vitejs/vite)
- [ ] [Tailwind CSS](https://github.com/tailwindlabs/tailwindcss)
- [ ] [Iconify](https://github.com/iconify/iconify)
- [ ] [Workbox](https://github.com/GoogleChrome/workbox)
- [ ] [ESLint](https://github.com/eslint/eslint)
- [ ] [Prettier](https://github.com/prettier/prettier)
- [ ] [Jest](https://github.com/facebook/jest)
- [ ] [Playwright](https://github.com/microsoft/playwright)
- [ ] [Lighthouse](https://github.com/GoogleChrome/lighthouse)
- ---------- **Environments** ----------
- [x] [Node.js](https://nodejs.org/en/)
- [x] [Yarn](https://classic.yarnpkg.com/lang/en/)
- [ ] [Caddy](https://caddyserver.com/)
- [ ] [Netlify](https://www.netlify.com/)

## Microservices

> Techniques, strategies and recipes for building a **modern web app** with **multiple teams** that can **ship features independently**.

See [Micro-Fullstack's Micro Frontends](https://github.com/Shyam-Chen/Micro-Fullstack/tree/main/mfe) for instructions on how to create microservices from source code.
