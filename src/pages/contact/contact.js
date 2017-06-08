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

const common = (language: string = 'en'): void => {
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

  firebase.auth()
    .onAuthStateChanged(user => {
      if (user) {
        // console.log('Anonymous user signed-in.', user);
        sendButton.onclick = () => {
          if (name.value !== '' && email.value !== '' && comment.value !== '') {
            firebase.database()
              .ref(`users/${user.uid}`)
              .push({ name: name.value, email: email.value, comment: comment.value });

            name.value = '';
            email.value = '';
            comment.value = '';
            nameLabel.classList.remove('mdc-textfield__label--float-above');
            emailLabel.classList.remove('mdc-textfield__label--float-above');
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
        // console.log('There was no anonymous session. Creating a new anonymous user.');
        firebase.auth().signInAnonymously();
      }
    });

  [].forEach.call(
    document.querySelectorAll('.mdc-button'),
    ripple => mdRipple.MDCRipple.attachTo(ripple)
  );

  [].forEach.call(
    document.querySelectorAll('.mdc-textfield'),
    textfield => mdTextfield.MDCTextfield.attachTo(textfield)
  );
};

export const contact = (): void => {
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
