import { __moduleExports as mdRipple } from '@material/ripple/dist/mdc.ripple';
import { __moduleExports as mdTextfield } from '@material/textfield/dist/mdc.textfield';
import { __moduleExports as mdSnackbar } from '@material/snackbar/dist/mdc.snackbar';
import { template as _, noop } from 'lodash';

import { layout } from '../../components/layout';

import template from './contact.html';
import style from './contact.css';
import data from './contact.json';

import dataZh from './languages/contact-zh.json';
import dataJa from './languages/contact-ja.json';

const imports = {
  style
};

const common = (language = 'en') => {
  const signInButton = document.querySelector('#sign-in-button');
  const signOutButton = document.querySelector('#sign-out-button');

  const name = document.querySelector('#name');
  const nameLabel = document.querySelector('#name + .mdc-textfield__label');
  const email = document.querySelector('#email');
  const emailLabel = document.querySelector('#email + .mdc-textfield__label');
  const comment = document.querySelector('#comment');
  const commentLabel = document.querySelector('#comment + .mdc-textfield__label');
  const sendButton = document.querySelector('#send-button');

  const sendToast = document.querySelector('#send-toast');
  const MDCSnackbar = mdSnackbar.MDCSnackbar;
  const snackbar = new MDCSnackbar(sendToast);

  signInButton.style.display = '';
  signOutButton.style.display = 'none';

  signInButton.onclick = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  };

  signOutButton.onclick = () => {
    firebase.auth().signOut();
    signInButton.style.display = '';
    signOutButton.style.display = 'none';
  };

  sendButton.onclick = () => {
    language === 'en' ? snackbar.show({ message: 'Please login first.' }) : noop();
    language === 'zh' ? snackbar.show({ message: '請先登入' }) : noop();
    language === 'ja' ? snackbar.show({ message: '最初にログインしてください' }) : noop();
  };

  firebase.auth()
    .onAuthStateChanged(user => {
      let currentUID;

      if (user && currentUID === user.uid) return;

      if (user) {
        currentUID = user.uid;

        signInButton.style.display = 'none';
        signOutButton.style.display = '';

        name.value = `${user.displayName}`;
        email.value = `${user.email}`;
        name.setAttribute('readonly', '');
        email.setAttribute('readonly', '');
        nameLabel.classList.add('mdc-textfield__label--float-above');
        emailLabel.classList.add('mdc-textfield__label--float-above');

        sendButton.onclick = () => {
          if (comment.value !== '') {
            firebase.database()
              .ref(`users/${user.uid}`)
              .push({
                name: user.displayName,
                email: user.email,
                comment: comment.value
              });

            comment.value = '';
            commentLabel.classList.remove('mdc-textfield__label--float-above');

            language === 'en' ? snackbar.show({ message: 'Thanks for your comment.' }) : noop();
            language === 'zh' ? snackbar.show({ message: '感謝您的評論' }) : noop();
            language === 'ja' ? snackbar.show({ message: 'あなたのコメントをありがとう' }) : noop();
          } else {
            language === 'en' ? snackbar.show({ message: 'Not valid!' }) : noop();
            language === 'zh' ? snackbar.show({ message: '無效！' }) : noop();
            language === 'ja' ? snackbar.show({ message: '有効ではありません！' }) : noop();
          }
        };
      } else {
        currentUID = null;

        signInButton.style.display = '';

        name.value = '';
        email.value = '';
        name.removeAttribute('readonly');
        email.removeAttribute('readonly');
        nameLabel.classList.remove('mdc-textfield__label--float-above');
        emailLabel.classList.remove('mdc-textfield__label--float-above');

        sendButton.onclick = () => {
          language === 'en' ? snackbar.show({ message: 'Please login first.' }) : noop();
          language === 'zh' ? snackbar.show({ message: '請先登入' }) : noop();
          language === 'ja' ? snackbar.show({ message: '最初にログインしてください' }) : noop();
        };
      }
    });


  [].forEach.call(
    document.querySelectorAll('.mdc-button'),
    surface => mdRipple.MDCRipple.attachTo(surface)
  );

  [].forEach.call(
    document.querySelectorAll('.mdc-textfield'),
    surface => mdTextfield.MDCTextfield.attachTo(surface)
  );
};

export const contact = () => {
  page('/contact', () => {
    layout(_(template, { imports })(data), 'contact');
    common();
  });

  page('/zh/contact', () => {
    layout(_(template, { imports })(dataZh), 'contact', 'zh');
    common('zh');
  });

  page('/ja/contact', () => {
    layout(_(template, { imports })(dataJa), 'contact', 'ja');
    common('ja');
  });
};
