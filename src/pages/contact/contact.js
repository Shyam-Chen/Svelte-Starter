/*
 * TODO: Firebase
 *   [x] Authentication
 *   [ ] Realtime Database
 *   [ ] Storage
 *   [ ] Cloud Messaging
 */

import { layout } from '../../components/layout';
import { fileUpload } from '../../components/file-upload';

import template from './contact.html';
import data from './contact.json';

const auth = () => {
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

export const contact = () => {
  page('/contact', () => {
    layout('contact', template(data));
    fileUpload('contact-image');
    auth();
    componentHandler.upgradeAllRegistered();
  });
};
