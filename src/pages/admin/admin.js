import { template as _ } from 'lodash';

import template from './admin.html';
import style from './admin.css';

import usersTemplate from './users.html';

export const admin = (): void => {
  page('/admin', () => {
    document.querySelector('#app')
      .innerHTML = _(template, { imports: { style } })();

    const signInButton = document.querySelector('#sign-in-button');
    const signOutButton = document.querySelector('#sign-out-button');

    const list = document.querySelector('#list');

    signInButton.style.display = '';
    signOutButton.style.display = 'none';
    list.style.display = 'none';

    signInButton.onclick = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider);
    };

    signOutButton.onclick = () => {
      firebase.auth().signOut();
      signInButton.style.display = '';
      signOutButton.style.display = 'none';
    };

    // TODO: admin account
    // firebase.auth().createUserWithEmailAndPassword(email, password)
    firebase.auth()
      .onAuthStateChanged(user => {
        let currentUID;

        if (user && currentUID === user.uid) return;

        if (user) {
          currentUID = user.uid;

          signInButton.style.display = 'none';
          signOutButton.style.display = '';
          list.style.display = '';

          firebase.database()
            .ref('users')
            .on('value', snapshot => {
              list.innerHTML = _(usersTemplate, { imports: { snapshot } })();

              const searchName = document.querySelector('#search-name');
              const searchEmail = document.querySelector('#search-email');

              searchName.onkeyup = () => {
                let input, filter, table, tr, td, i;
                input = document.querySelector('#search-name');
                filter = input.value.toUpperCase();
                table = document.querySelector('#table');
                tr = table.getElementsByTagName('tr');

                for (i = 0; i < tr.length; i++) {
                  td = tr[i].getElementsByTagName('td')[0];
                  if (td) {
                    if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                      tr[i].style.display = '';
                    } else {
                      tr[i].style.display = 'none';
                    }
                  }
                }
              };

              searchEmail.onkeyup = () => {
                let input, filter, table, tr, td, i;
                input = document.querySelector('#search-email');
                filter = input.value.toUpperCase();
                table = document.querySelector('#table');
                tr = table.getElementsByTagName('tr');

                for (i = 0; i < tr.length; i++) {
                  td = tr[i].getElementsByTagName('td')[1];
                  if (td) {
                    if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                      tr[i].style.display = '';
                    } else {
                      tr[i].style.display = 'none';
                    }
                  }
                }
              };


              [].forEach.call(
                document.querySelectorAll('.mdc-button[data-delete]'),
                deleteButton => {
                  deleteButton.onclick = () => {
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

              // TODO: pagination
            });
        } else {
          currentUID = null;

          list.style.display = 'none';
        }
      });
  });
};

// {
//   "rules": {
//     "admin": {
//       ".read": "auth !== null",
//       ".write": "auth === auth.email"
//     },
//     "admin": {
//       "$room_id": {
//         ".read": "data.child(auth.uid).exists()",
//         ".validate": "root.child('room_names/'+$room_id).exists()",
//         "$user_id": {
//           ".write": "auth.uid === $user_id",
//           ".validate": "newData.isString() && newData.val().length > 0 && newData.val().length < 20"
//         }
//       }
//     }
//   }
// }
