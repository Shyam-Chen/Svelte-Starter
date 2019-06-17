import './assets/styles/global.css';
import App from './App';

const app = new App({
  target: document.querySelector('#app-root'),
});

window.app = app;

export default app;
