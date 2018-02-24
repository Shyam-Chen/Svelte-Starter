import { MDCRipple } from '@material/ripple';
import { MDCTextField } from '@material/textfield';
import { MDCSnackbar } from '@material/snackbar';
import page from 'page';
import { template as _, noop } from 'lodash';

import { layout } from '~/shared/layout';
import { $, $$ } from '~/utils';

import template from './contact.html';
import style from './contact.css';
import english from './_languages/english.json';
import chinese from './_languages/chinese.json';
import japanese from './_languages/japanese.json';

const imports = { style };

const common = (language: string = 'en'): void => {
  const name = $('#name');
  const email = $('#email');
  const comment = $('#comment');
  const sendButton = $('#send-button');

  const sendToastEl = $('#send-toast');
  const sendToast = new MDCSnackbar(sendToastEl);

  firebase.auth()
    .onAuthStateChanged((user: { uid: string }): void => {
      if (user) {
        sendButton.onclick = (): void => {
          const textfieldInputs = $$('.mdc-text-field__input');
          const empty = [].filter.call(textfieldInputs, textfieldInput => textfieldInput.value === '');

          if (!empty.length) {
            firebase.firestore()
              .collection('users')
              .add({ id: user.uid, name: name.value, email: email.value, message: comment.value })
              .catch(error => console.error(`Error adding document: ${error}`));

            [].forEach.call(
              textfieldInputs,
              textfieldInput => textfieldInput.value = ''
            );

            [].forEach.call(
              $$('.mdc-text-field__label'),
              textfieldLabel => textfieldLabel.classList.remove('mdc-text-field__label--float-above')
            );

            language === 'en' ? sendToast.show({ message: 'Thanks for your comment.' }) : noop();
            language === 'zh' ? sendToast.show({ message: '感謝您的評論' }) : noop();
            language === 'ja' ? sendToast.show({ message: 'あなたのコメントをありがとう' }) : noop();
          } else {
            language === 'en' ? sendToast.show({ message: 'Not valid!' }) : noop();
            language === 'zh' ? sendToast.show({ message: '無效！' }) : noop();
            language === 'ja' ? sendToast.show({ message: '有効ではありません！' }) : noop();
          }
        };
      } else {
        firebase.auth().signInAnonymously();
      }
    });

  [].forEach.call(
    $$('.mdc-button'),
    button => MDCRipple.attachTo(button)
  );

  [].forEach.call(
    $$('.mdc-text-field'),
    textfield => MDCTextField.attachTo(textfield)
  );
};

export const contact = (): void => {
  page('/contact', () => {
    layout(_(template, { imports })(english), 'contact');
    common();
  });

  page('/en/contact', () => {
    layout(_(template, { imports })(english), 'contact', 'en');
    common();
  });

  page('/zh/contact', () => {
    layout(_(template, { imports })(chinese), 'contact', 'zh');
    common('zh');
  });

  page('/ja/contact', () => {
    layout(_(template, { imports })(japanese), 'contact', 'ja');
    common('ja');
  });
};
