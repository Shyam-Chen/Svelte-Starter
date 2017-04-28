import { template as _, noop } from 'lodash';

import { layout } from '../../components/layout';

import template from './contact.html';
import style from './contact.css';
import data from './contact.json';

import dataZh from './languages/contact-zh.json';
import dataJa from './languages/contact-ja.json';

const common = (language = 'en') => {
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

          language === 'en' ? sendToast.MaterialSnackbar.showSnackbar({ message: 'Thanks for your comment.' }) : noop();
          language === 'zh' ? sendToast.MaterialSnackbar.showSnackbar({ message: '感谢您的评论' }) : noop();
          language === 'ja' ? sendToast.MaterialSnackbar.showSnackbar({ message: 'あなたのコメントをありがとう' }) : noop();

          comment.value = '';
          document.querySelector('#sign-in-content .mdl-textfield:nth-child(3)').classList.remove('is-dirty');
        } else {
          language === 'en' ? sendToast.MaterialSnackbar.showSnackbar({ message: 'Not valid!' }) : noop();
          language === 'zh' ? sendToast.MaterialSnackbar.showSnackbar({ message: '無效！' }) : noop();
          language === 'ja' ? sendToast.MaterialSnackbar.showSnackbar({ message: '有効ではありません！' }) : noop();
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

  const unAuth = () => {
    signInButton.style.display = '';
    signOutButton.style.display = 'none';
    signInContent.style.display = 'none';
  };

  signOutButton.onclick = () => {
    firebase.auth().signOut();
    unAuth();
  };

  firebase.auth().onAuthStateChanged(onAuthStateChanged);
  unAuth();
};

const imports = {
  style
};

export const contact = () => {
  page('/contact', () => {
    layout(_(template, { imports })(data), 'contact');
    common();
    componentHandler.upgradeAllRegistered();
  });

  page('/zh/contact', () => {
    layout(_(template, { imports })(dataZh), 'contact', 'zh');
    common('zh');
    componentHandler.upgradeAllRegistered();
  });

  page('/ja/contact', () => {
    layout(_(template, { imports })(dataJa), 'contact', 'ja');
    common('ja');
    componentHandler.upgradeAllRegistered();
  });
};
