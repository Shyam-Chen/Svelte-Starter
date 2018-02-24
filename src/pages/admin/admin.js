import { MDCRipple } from '@material/ripple';
import { MDCTextField } from '@material/textfield';
import { MDCSnackbar } from '@material/snackbar';
import page from 'page';
import { template as _ } from 'lodash';

import { $, $$ } from '~/utils';

import { users } from './_components/users';

import template from './admin.html';
import style from './admin.css';

export const admin = (): void => {
  page('/admin', (): void => {
    $('#app').innerHTML = _(template, { imports: { style } })();

    const adminEmail = $('#admin-email');
    const adminPassword = $('#admin-password');
    const adminSignIn = $('#admin-sign-in');
    const adminSignOut = $('#admin-sign-out');

    const signOutContent = $('#sign-out-content');
    const signInContent = $$('[data-sign-in]');

    const loginToastEl = $('#login-toast');
    const loginToast = new MDCSnackbar(loginToastEl);

    adminSignIn.onclick = (): void => {
      firebase.auth()
        .signInWithEmailAndPassword(adminEmail.value, adminPassword.value)
        .then(() => {
          [].forEach.call(
            $$('.mdc-text-field__input'),
            textfieldInput => textfieldInput.value = ''
          );

          [].forEach.call(
            $$('.mdc-text-field__label'),
            textfieldLabel => textfieldLabel.classList.remove('mdc-text-field__label--float-above')
          );
        })
        .catch(error => {
          loginToast.show({ message: error.message });
        });
    };

    adminSignOut.onclick = (): void => {
      firebase.auth().signOut();
      signOutContent.style.display = '';
      [].forEach.call(signInContent, content => content.style.display = 'none');
    };

    signOutContent.style.display = '';
    [].forEach.call(signInContent, content => content.style.display = 'none');

    firebase.auth()
      .onAuthStateChanged(user => {
        let currentUID = null;

        if (user && currentUID === user.uid) return;

        if (user) {
          if (user.isAnonymous) return;

          currentUID = user.uid;

          signOutContent.style.display = 'none';
          [].forEach.call(signInContent, content => content.style.display = '');

          users('admin');
        } else {
          currentUID = null;
        }
      });

    [].forEach.call(
      $$('.mdc-button'),
      ripple => MDCRipple.attachTo(ripple)
    );

    [].forEach.call(
      $$('.mdc-text-field'),
      textfield => MDCTextField.attachTo(textfield)
    );
  });
};
