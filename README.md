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
$ pnpm install
```

### Compiles and hot-reloads for development

```sh
$ pnpm serve
```

### Compiles and minifies for production

```sh
$ pnpm build
```

### Lints and fixes files

Files: `src/**/*.{js,css,svelte}`

```sh
$ pnpm lint
```

### Runs unit tests

Files: `src/**/*.spec.js`

```sh
$ pnpm unit
```

### Runs end-to-end tests

Files: `e2e/**/*.spec.js`

```sh
# Before running the `e2e` command, make sure to run the following commands.
$ pnpm build
$ pnpm preview

# If it's not setup, run it.
$ pnpm setup

$ pnpm e2e
```

### Measures site's URLs

Files: `e2e/**/*.meas.js`

```sh
# Before running the `meas` command, make sure to run the following commands.
$ pnpm build
$ pnpm preview

# If it's not setup, run it.
$ pnpm setup

$ pnpm meas
```

### Mock requests

[`mock/requests`](./mock/requests) is a fork of [Koa-Starter](https://github.com/Shyam-Chen/Koa-Starter) that was made easy and quick way to run mock APIs locally.

```sh
# If it's not active, run it.
$ pnpm active

$ pnpm mock
```

## Key Features

This seed repository provides the following features:


- ---------- **Essentials** ----------
- [x] [Svelte](https://github.com/sveltejs/svelte)
- [x] [Svelte Navigator](https://github.com/mefechoel/svelte-navigator)
- ---------- **Tools** ----------
- [ ] [Vite](https://github.com/vitejs/vite)
- [ ] [Windi CSS](https://github.com/windicss/windicss)
- [ ] [Iconify](https://github.com/iconify/iconify)
- [ ] [Workbox](https://github.com/GoogleChrome/workbox)
- [ ] [ESLint](https://github.com/eslint/eslint)
- [ ] [Prettier](https://github.com/prettier/prettier)
- [ ] [Jest](https://github.com/facebook/jest)
- [ ] [Playwright](https://github.com/microsoft/playwright)
- [ ] [Lighthouse](https://github.com/GoogleChrome/lighthouse)
- ---------- **Environments** ----------
- [x] [Node.js](https://nodejs.org/en/)
- [x] [Pnpm](https://pnpm.io/)
- [ ] [Caddy](https://caddyserver.com/)
- [ ] [Netlify](https://www.netlify.com/)

## Microservices

> Techniques, strategies and recipes for building a **modern web app** with **multiple teams** that can **ship features independently**.

See [Micro-Fullstack's Micro Frontends](https://github.com/Shyam-Chen/Micro-Fullstack/tree/main/mfe) for instructions on how to create microservices from source code.
