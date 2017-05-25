import { __moduleExports as mdTextfield } from '@material/textfield/dist/mdc.textfield';
import { __moduleExports as mdSnackbar } from '@material/snackbar/dist/mdc.snackbar';
import { template as _ } from 'lodash';

import { layout } from '../../components/layout';

import template from './contact.html';
import style from './contact.css';
import data from './contact.json';

import dataZh from './languages/contact-zh.json';
import dataJa from './languages/contact-ja.json';

const imports = {
  style
};

const common = (/* language = 'en'*/) => {
  const signInButton = document.querySelector('#sign-in-button');
  const signOutButton = document.querySelector('#sign-out-button');
  const signInContent = document.querySelector('#sign-in-content');
  const name = document.querySelector('#name');
  const email = document.querySelector('#email');
  const comment = document.querySelector('#comment');
  const sendButton = document.querySelector('#send-button');
  const sendToast = document.querySelector('#send-toast');

  signInButton.style.display = '';
  signOutButton.style.display = 'none';
  signInContent.style.display = 'none';

  signInButton.onclick = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  };

  signOutButton.onclick = () => {
    firebase.auth().signOut();
    signInButton.style.display = '';
    signOutButton.style.display = 'none';
    signInContent.style.display = 'none';
  };

  const MDCSnackbar = mdSnackbar.MDCSnackbar;
  const snackbar = new MDCSnackbar(sendToast)

  firebase.auth()
    .onAuthStateChanged(user => {
      let currentUID;

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
            firebase.database()
              .ref(`users/${user.uid}`)
              .push({
                name: user.displayName,
                email: user.email,
                comment: comment.value
              });

            snackbar.show({ message: 'Thanks for your comment.' });
            // language === 'en' ? sendToast.MaterialSnackbar.showSnackbar({ message: 'Thanks for your comment.' }) : noop();
            // language === 'zh' ? sendToast.MaterialSnackbar.showSnackbar({ message: '感谢您的评论' }) : noop();
            // language === 'ja' ? sendToast.MaterialSnackbar.showSnackbar({ message: 'あなたのコメントをありがとう' }) : noop();

            comment.value = '';
            document.querySelector('#sign-in-content .mdc-textfield:nth-child(3) > .mdc-textfield__label').classList.remove('mdc-textfield__label--float-above');
          } else {


            snackbar.show({ message: 'Not valid!' });
            // language === 'en' ? sendToast.MaterialSnackbar.showSnackbar({ message: 'Not valid!' }) : noop();
            // language === 'zh' ? sendToast.MaterialSnackbar.showSnackbar({ message: '無效！' }) : noop();
            // language === 'ja' ? sendToast.MaterialSnackbar.showSnackbar({ message: '有効ではありません！' }) : noop();
          }
        };
      } else {
        currentUID = null;
        signInButton.style.display = '';
      }
    });



    [].forEach.call(
      document.querySelectorAll('.mdc-textfield:not([data-demo-no-auto-js])'),
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
