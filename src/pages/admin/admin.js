import { __moduleExports as mdRipple } from '@material/ripple/dist/mdc.ripple';
import { __moduleExports as mdTextfield } from '@material/textfield/dist/mdc.textfield';

import { template as _ } from 'lodash';

import template from './admin.html';
import style from './admin.css';

import usersTemplate from './users.html';

export const admin = (): void => {
  page('/admin', () => {
    document.querySelector('#app')
      .innerHTML = _(template, { imports: { style } })();

    const adminEmail = document.querySelector('#admin-email');
    const adminPassword = document.querySelector('#admin-password');
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
          // console.log(user.isAnonymous);
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

              const searchName = document.querySelector('#search-name');

              searchName.onkeyup = () => {
                const input = document.querySelector('#search-name');
                const filter = input.value.toUpperCase();
                const table = document.querySelector('#table');
                const tr = table.getElementsByTagName('tr');

                for (let i = 0; i < tr.length; i++) {
                  const name = tr[i].getElementsByTagName('td')[0];
                  const email = tr[i].getElementsByTagName('td')[1];
                  const message = tr[i].getElementsByTagName('td')[2];

                  if (name || email || message) {
                    if (
                      name.innerHTML.toUpperCase().indexOf(filter) > -1 ||
                      email.innerHTML.toUpperCase().indexOf(filter) > -1 ||
                      message.innerHTML.toUpperCase().indexOf(filter) > -1
                    ) {
                      tr[i].style.display = '';
                    } else {
                      tr[i].style.display = 'none';
                    }
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
