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
            .once('value', snapshot => {
              list.innerHTML = _(usersTemplate, { imports: { snapshot } })();
            });



        } else {
          currentUID = null;

          list.innerHTML = '';
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
