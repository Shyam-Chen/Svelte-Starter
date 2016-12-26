/*
 * TODO: Firebase
 *   [x] Authentication
 *   [ ] Realtime Database
 *   [ ] Storage
 *   [ ] Cloud Messaging
 */

 // Third party
import { template } from 'lodash-es';

// Components
import { layout } from '../../components/layout';
import { fileUpload } from '../../components/file-upload';

// Main
import tpl from './contact.html';
import style from './contact.css';
import LANGS_EN from './langs/en.json';
import LANGS_ZH from './langs/zh.json';

const contact = () => {
  const signInButton = document.querySelector('#sign-in-button');
  const signOutButton = document.querySelector('#sign-out-button');
  const content = document.querySelector('#content');

  let currentUID;
  const onAuthStateChanged = (user) => {
    if (user && currentUID === user.uid) return;

    if (user) {
      currentUID = user.uid;
      signInButton.style.display = 'none';
      content.style.display = '';
      signOutButton.style.display = '';
      document.querySelector('#username').value = `${user.displayName}`;
      document.querySelector('#useremail').value = `${user.email}`;
    } else {
      currentUID = null;
      signInButton.style.display = '';
    }
  };

  signInButton.onclick = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  };

  signOutButton.onclick = () => {
    firebase.auth().signOut();
    content.style.display = 'none';
    signOutButton.style.display = 'none';
    signInButton.style.display = '';
  };

  firebase.auth().onAuthStateChanged(onAuthStateChanged);

  content.style.display = 'none';
  signOutButton.style.display = 'none';
  signInButton.style.display = '';
};

export const CONTACT_EN = () => {
  const content = template(tpl, { 'imports': { style } })(LANGS_EN);
  layout('en', 'contact', content);
  fileUpload('contact-image');
  contact();
	componentHandler.upgradeAllRegistered();
};

export const CONTACT_ZH = () => {
  const content = template(tpl, { 'imports': { style } })(LANGS_ZH);
  layout('zh', 'contact', content);
  fileUpload('contact-image', '選擇一個檔案');
  contact();
  componentHandler.upgradeAllRegistered();
};
