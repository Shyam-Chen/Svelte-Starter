import './assets/styles/global.css';
import App from './App.svelte';

// const isHot = !!import.meta.hot;

const app = new App({
  target: document.querySelector('#app-root'),
  // hydrate: !isHot,
});

// if (isHot) {
//   import.meta.hot.dispose(() => {
//     app.$destroy();
//   });

//   import.meta.hot.accept();
// }

export default app;
