import { __moduleExports as mdRipple } from '@material/ripple/dist/mdc.ripple';
import { __moduleExports as mdTextfield } from '@material/textfield/dist/mdc.textfield';

// import request from 'superagent';

import { template as _ } from 'lodash';

import template from './admin.html';
import style from './admin.css';

import usersTemplate from './users.html';

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
    const signInContent = document.querySelector('#sign-in-content');

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
          console.error(error.code, error.message);
          // TODO: open dialog
        });
    };

    adminSignOut.onclick = () => {
      firebase.auth().signOut();
      signOutContent.style.display = '';
      signInContent.style.display = 'none';
    };

    signOutContent.style.display = '';
    signInContent.style.display = 'none';

    firebase.auth()
      .onAuthStateChanged(user => {
        // let currentUID;

        // if (user && currentUID === user.uid) return;

        if (user) {
          if (user.isAnonymous) return;

          // currentUID = user.uid;

          signOutContent.style.display = 'none';
          signInContent.style.display = '';

          firebase.database()
            .ref('users')
            .on('value', snapshot => {
              const list = document.querySelector('#list');

              // TODO: progress spinner
              list.innerHTML = _(usersTemplate, { imports: { snapshot } })();

              const searchName = document.querySelector('#search');

              searchName.onkeyup = () => {
                const input = document.querySelector('#search');
                const filter = input.value.toUpperCase();
                const tbody = document.querySelector('#table > tbody');
                const tr = tbody.getElementsByTagName('tr');

                for (let i = 0; i < tr.length; i++) {
                  const tds = tr[i].getElementsByTagName('td');
                  const find = [].findIndex.call(tds, td => td.innerHTML.toUpperCase().indexOf(filter) !== -1);

                  if (find === -1) {
                    tr[i].style.display = 'none';
                  } else {
                    tr[i].style.display = '';
                  }
                }
              };

              const sliceAll = (selector, element) =>
                [].slice.call((element || document).querySelectorAll(selector));

              sliceAll('tbody').forEach(body => {
                sliceAll('tr', body).reverse()
                  .forEach(row => body.appendChild(row));
              });

              [].forEach.call(
                document.querySelectorAll('.mdc-button[data-delete]'),
                deleteButton => {
                  deleteButton.onclick = () => {
                    // TODO: open dialog
                    firebase.database()
                      .ref(`users/${deleteButton.dataset.delete}`)
                      .remove();
                  };
                }
              );

              document.querySelector('#edit').style.display = 'none';

              [].forEach.call(
                document.querySelectorAll('.mdc-button[data-edit]'),
                editButton => {
                  editButton.onclick = () => {
                    // TODO: open dialog
                    document.querySelector('#edit').style.display = '';

                    const name = document.querySelector('#edit-name');
                    const email = document.querySelector('#edit-email');
                    const message = document.querySelector('#edit-message');

                    const save = document.querySelector('#edit-save');
                    const cancel = document.querySelector('#edit-cancel');

                    name.value = editButton.dataset.editName;
                    email.value = editButton.dataset.editEmail;
                    message.value = editButton.dataset.editMessage;

                    save.onclick = () => {
                      firebase.database()
                        .ref(`users/${editButton.dataset.edit}`)
                        .update({ name: name.value, email: email.value, message: message.value });
                    };

                    cancel.onclick = () => {
                      document.querySelector('#edit').style.display = 'none';
                    };
                  };
                }
              );

              // TODO: table pagination
            });
        } else {
          // currentUID = null;
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
