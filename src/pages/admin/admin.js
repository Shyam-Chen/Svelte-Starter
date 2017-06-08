import { template as _ } from 'lodash';

import { layout } from '../../components/layout';

import template from './contact.html';
import style from './contact.css';


// const signInButton = document.querySelector('#sign-in-button');
// const signOutButton = document.querySelector('#sign-out-button');

// signInButton.style.display = '';
// signOutButton.style.display = 'none';
//
// signInButton.onclick = () => {
//   const provider = new firebase.auth.GoogleAuthProvider();
//   firebase.auth().signInWithPopup(provider);
// };
//
// signOutButton.onclick = () => {
//   firebase.auth().signOut();
//   signInButton.style.display = '';
//   signOutButton.style.display = 'none';
// };
//
// sendButton.onclick = () => {
//   language === 'en' ? snackbar.show({ message: 'Please login first.' }) : noop();
//   language === 'zh' ? snackbar.show({ message: '請先登入' }) : noop();
//   language === 'ja' ? snackbar.show({ message: '最初にログインしてください' }) : noop();
// };
//
// firebase.auth()
//   .onAuthStateChanged(user => {
//     let currentUID;
//
//     if (user && currentUID === user.uid) return;
//
//     if (user) {
//       currentUID = user.uid;
//
//       signInButton.style.display = 'none';
//       signOutButton.style.display = '';
//
//       name.value = `${user.displayName}`;
//       email.value = `${user.email}`;
//       name.setAttribute('readonly', '');
//       email.setAttribute('readonly', '');
//       nameLabel.classList.add('mdc-textfield__label--float-above');
//       emailLabel.classList.add('mdc-textfield__label--float-above');
//
//       sendButton.onclick = () => {
//         if (comment.value !== '') {
//           firebase.database()
//             .ref(`users/${user.uid}`)
//             .push({
//               name: user.displayName,
//               email: user.email,
//               comment: comment.value
//             });
//
//           comment.value = '';
//           commentLabel.classList.remove('mdc-textfield__label--float-above');
//
//           language === 'en' ? snackbar.show({ message: 'Thanks for your comment.' }) : noop();
//           language === 'zh' ? snackbar.show({ message: '感謝您的評論' }) : noop();
//           language === 'ja' ? snackbar.show({ message: 'あなたのコメントをありがとう' }) : noop();
//         } else {
//           language === 'en' ? snackbar.show({ message: 'Not valid!' }) : noop();
//           language === 'zh' ? snackbar.show({ message: '無效！' }) : noop();
//           language === 'ja' ? snackbar.show({ message: '有効ではありません！' }) : noop();
//         }
//       };
//     } else {
//       currentUID = null;
//
//       signInButton.style.display = '';
//
//       name.value = '';
//       email.value = '';
//       name.removeAttribute('readonly');
//       email.removeAttribute('readonly');
//       nameLabel.classList.remove('mdc-textfield__label--float-above');
//       emailLabel.classList.remove('mdc-textfield__label--float-above');
//
//       sendButton.onclick = () => {
//         language === 'en' ? snackbar.show({ message: 'Please login first.' }) : noop();
//         language === 'zh' ? snackbar.show({ message: '請先登入' }) : noop();
//         language === 'ja' ? snackbar.show({ message: '最初にログインしてください' }) : noop();
//       };
//     }
//   });

export const contact = (): void => {
  page('/admin', () => {
    layout(_(template, { imports: { style } })(), 'contact');
  });
};
