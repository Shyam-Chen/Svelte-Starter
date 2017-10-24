import { __moduleExports as mdRipple } from '@material/ripple/dist/mdc.ripple';
import { __moduleExports as mdTextfield } from '@material/textfield/dist/mdc.textfield';
import { __moduleExports as mdSnackbar } from '@material/snackbar/dist/mdc.snackbar';
import { template as _ } from 'lodash';

import { $, $$ } from '~/utils';

import template from './admin.html';
import style from './admin.css';
import { users } from './users';

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
    const loginToast = new mdSnackbar.MDCSnackbar(loginToastEl);

    adminSignIn.onclick = (): void => {
      firebase.auth()
        .signInWithEmailAndPassword(adminEmail.value, adminPassword.value)
        .then(() => {
          [].forEach.call(
            $$('.mdc-textfield__input'),
            textfieldInput => textfieldInput.value = ''
          );

          [].forEach.call(
            $$('.mdc-textfield__label'),
            textfieldLabel => textfieldLabel.classList.remove('mdc-textfield__label--float-above')
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
        let currentUID;

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
      ripple => mdRipple.MDCRipple.attachTo(ripple)
    );

    [].forEach.call(
      $$('.mdc-textfield'),
      textfield => mdTextfield.MDCTextfield.attachTo(textfield)
    );
  });
};
