/**
 * @name Material
 */
// import '@material/animation/dist/mdc.animation.css';
// import '@material/animation/dist/mdc.animation';
// import '@material/auto-init/dist/mdc.autoInit';
// import '@material/base/dist/mdc.base';
// import '@material/button/dist/mdc.button.css';
// import '@material/card/dist/mdc.card.css';
// import '@material/checkbox/dist/mdc.checkbox.css';
// import '@material/checkbox/dist/mdc.checkbox';
// import '@material/drawer/dist/mdc.drawer.css';
// import '@material/drawer/dist/mdc.drawer';
// import '@material/elevation/dist/mdc.elevation.css';
// import '@material/fab/dist/mdc.fab.css';
// import '@material/form-field/dist/mdc.form-field.css';
// import '@material/icon-toggle/dist/mdc.icon-toggle.css';
// import '@material/icon-toggle/dist/mdc.iconToggle';
// import '@material/list/dist/mdc.list.css';
// import '@material/menu/dist/mdc.menu.css';
// import '@material/menu/dist/mdc.menu';
// import '@material/radio/dist/mdc.radio.css';
// import '@material/radio/dist/mdc.radio';
// import '@material/ripple/dist/mdc.ripple.css';
// import '@material/ripple/dist/mdc.ripple';
// import '@material/select/dist/mdc.select.css';
// import '@material/select/dist/mdc.select';
// import '@material/snackbar/dist/mdc.snackbar.css';
// import '@material/snackbar/dist/mdc.snackbar';
// import '@material/textfield/dist/mdc.textfield.css';
// import '@material/textfield/dist/mdc.textfield';
// import '@material/theme/dist/mdc.theme.css';
// import '@material/typography/dist/mdc.typography.css';
import 'material-design-lite/dist/material.indigo-pink.min.css';  // @deprecated
import 'material-design-lite/material';  // @deprecated

/**
 * @name Firebase
 */
import 'firebase/firebase-auth';
// import 'firebase/firebase-database';
// import 'firebase/firebase-storage';
// import 'firebase/firebase-messaging';

/**
 * @name Router
 */
import 'page/page';

/**
 * @name Load
 */
import { load } from './utils';

Promise.all([
    load('https://fonts.googleapis.com/icon?family=Material+Icons')  // @deprecated
  ])
  .then(result => {
    const style = document.createElement('style');
    style.innerHTML = result;
    document.head.appendChild(style);
  });
