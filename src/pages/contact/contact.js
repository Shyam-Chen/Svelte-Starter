import { layout } from '../../components/layout';

import template from './contact.html';
import data from './contact.json';
import dataZh from './contact-zh.json';
import dataJp from './contact-jp.json';

const common = () => {
  const signInButton = document.querySelector('#sign-in-button');
  const signOutButton = document.querySelector('#sign-out-button');
  const signInContent = document.querySelector('#sign-in-content');
  const name = document.querySelector('#name');
  const email = document.querySelector('#email');
  const comment = document.querySelector('#comment');
  const sendButton = document.querySelector('#send-button');
  const sendToast = document.querySelector('#send-toast');

  const postData = (userId, name, email, comment) => {
    firebase.database()
      .ref(`users/${userId}`)
      .push({ name, email, comment });
  };

  let currentUID;

  const onAuthStateChanged = user => {
    if (user && currentUID === user.uid) return;

    if (user) {
      currentUID = user.uid;

      signInButton.style.display = 'none';
      signOutButton.style.display = '';
      signInContent.style.display = '';

      name.value = `${user.displayName}`;
      email.value = `${user.email}`;

      sendButton.onclick = () => {
        if (comment.value !== '') {
          postData(user.uid, user.displayName, user.email, comment.value);

          sendToast.MaterialSnackbar.showSnackbar({ message: 'Thanks for your comment.' });
          comment.value = '';
          document.querySelector('#sign-in-content .mdl-textfield:nth-child(3)').classList.remove('is-dirty');
        } else {
          sendToast.MaterialSnackbar.showSnackbar({ message: 'Not valid!' });
        }
      };
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

    signInContent.style.display = 'none';
    signOutButton.style.display = 'none';
    signInButton.style.display = '';
  };

  firebase.auth().onAuthStateChanged(onAuthStateChanged);

  signInContent.style.display = 'none';
  signOutButton.style.display = 'none';
  signInButton.style.display = '';
};

export const contact = () => {
  page('/contact', () => {
    layout(template(data), 'contact');
    common();
    componentHandler.upgradeAllRegistered();
  });

  page('/zh/contact', () => {
    layout(template(dataZh), 'contact', 'zh');
    common();
    componentHandler.upgradeAllRegistered();
  });

  page('/jp/contact', () => {
    layout(template(dataJp), 'contact', 'jp');
    common();
    componentHandler.upgradeAllRegistered();
  });
};
