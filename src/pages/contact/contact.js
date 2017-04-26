import { template as _ } from 'lodash';

import { layout } from '../../components/layout';

import template from './contact.html';
import style from './contact.css';
import data from './contact.json';
import dataZh from './contact-zh.json';
import dataJa from './contact-ja.json';

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

          if (language === 'en') sendToast.MaterialSnackbar.showSnackbar({ message: 'Thanks for your comment.' });
          if (language === 'zh') sendToast.MaterialSnackbar.showSnackbar({ message: '感谢您的评论' });
          if (language === 'ja') sendToast.MaterialSnackbar.showSnackbar({ message: 'あなたのコメントをありがとう' });

          comment.value = '';
          document.querySelector('#sign-in-content .mdl-textfield:nth-child(3)').classList.remove('is-dirty');
        } else {
          if (language === 'en') sendToast.MaterialSnackbar.showSnackbar({ message: 'Not valid!' });
          if (language === 'zh') sendToast.MaterialSnackbar.showSnackbar({ message: '無效！' });
          if (language === 'ja') sendToast.MaterialSnackbar.showSnackbar({ message: '有効ではありません！' });
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
    layout(_(template, { 'imports': { style } })(data), 'contact');
    common();
    componentHandler.upgradeAllRegistered();
  });

  page('/zh/contact', () => {
    layout(_(template, { 'imports': { style } })(dataZh), 'contact', 'zh');
    common('zh');
    componentHandler.upgradeAllRegistered();
  });

  page('/ja/contact', () => {
    layout(_(template, { 'imports': { style } })(dataJa), 'contact', 'ja');
    common('ja');
    componentHandler.upgradeAllRegistered();
  });
};
