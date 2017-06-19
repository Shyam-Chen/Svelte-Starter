import { __moduleExports as mdRipple } from '@material/ripple/dist/mdc.ripple';
import { __moduleExports as mdTextfield } from '@material/textfield/dist/mdc.textfield';
import { __moduleExports as mdSnackbar } from '@material/snackbar/dist/mdc.snackbar';
import { __moduleExports as mdLinearProgress } from '@material/linear-progress/dist/mdc.linearProgress';

import { template as _ } from 'lodash';

import template from './admin.html';
import style from './admin.css';

import usersTemplate from './users.html';
import { users } from './users';

export const admin = (): void => {
  page('/admin', () => {
    document.querySelector('#app')
      .innerHTML = _(template, { imports: { style } })();

    const adminEmail = document.querySelector('#admin-email');
    const adminEmailLabel = document.querySelector('#admin-email + .mdc-textfield__label')
    const adminPassword = document.querySelector('#admin-password');
    const adminPasswordLabel = document.querySelector('#admin-password + .mdc-textfield__label');
    const adminSignIn = document.querySelector('#admin-sign-in');
    const adminSignOut = document.querySelector('#admin-sign-out');

    const signOutContent = document.querySelector('#sign-out-content');
    const signInContent = document.querySelectorAll('[data-sign-in]');

    const loginToastEl = document.querySelector('#login-toast');
    const loginToast = new mdSnackbar.MDCSnackbar(loginToastEl);

    const determinate = document.querySelector('.mdc-linear-progress');
    const linearProgress = mdLinearProgress.MDCLinearProgress.attachTo(determinate);

    adminSignIn.onclick = () => {
      firebase.auth()
        .signInWithEmailAndPassword(adminEmail.value, adminPassword.value)
        .then(() => {
          adminEmail.value = '';
          adminPassword.value = ''
          adminEmailLabel.classList.remove('mdc-textfield__label--float-above');
          adminPasswordLabel.classList.remove('mdc-textfield__label--float-above');
        })
        .catch(error => {
          loginToast.show({ message: error.message });
        });
    };

    adminSignOut.onclick = () => {
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

          firebase.database()
            .ref('users')
            .on('value', snapshot => {
              linearProgress.progress = 1;

              document.querySelector('#users')
                .innerHTML = _(usersTemplate, { imports: { snapshot } })();

              users();
            });
        } else {
          currentUID = null;
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
  });
};
