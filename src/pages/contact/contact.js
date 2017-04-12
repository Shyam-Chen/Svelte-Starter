import { layout } from '../../components/layout';
// import { fileUpload } from '../../components/file-upload';

import template from './contact.html';
import data from './contact.json';

const auth = () => {
  const signInButton = document.querySelector('#sign-in-button');
  const signOutButton = document.querySelector('#sign-out-button');
  const content = document.querySelector('#content');
  const sendButton = document.querySelector('#send-button');

  const nameEl = document.querySelector('#username');
  const emailEl = document.querySelector('#useremail');
  const contentText = document.querySelector('#content-text');

  const postData = (userId, name, email, comment) => {
    firebase.database()
      .ref(`users/${userId}`)
      .set({ name, email, comment });
  };

  let currentUID;

  const onAuthStateChanged = user => {
    if (user && currentUID === user.uid) return;

    if (user) {
      currentUID = user.uid;

      signInButton.style.display = 'none';
      signOutButton.style.display = '';
      content.style.display = '';

      nameEl.value = `${user.displayName}`;
      emailEl.value = `${user.email}`;

      sendButton.onclick = () => {
        if (contentText.value !== '') {
          postData(user.uid, user.displayName, user.email, contentText.value);
          document.querySelector('#send-toast').MaterialSnackbar.showSnackbar({ message: 'Thanks for your comment.' });
          document.querySelector('#content-textfield').classList.remove('is-dirty');
          contentText.value = '';
        } else {
          document.querySelector('#send-toast').MaterialSnackbar.showSnackbar({ message: 'Not valid!' });
        }
      };
    } else {
      currentUID = null;

      signInButton.style.display = '';
    }
  };

  signInButton.onclick = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  };

  signOutButton.onclick = () => {
    firebase.auth().signOut();

    content.style.display = 'none';
    signOutButton.style.display = 'none';
    signInButton.style.display = '';
  };

  firebase.auth().onAuthStateChanged(onAuthStateChanged);

  content.style.display = 'none';
  signOutButton.style.display = 'none';
  signInButton.style.display = '';
};

export const contact = () => {
  page('/contact', () => {
    layout('contact', template(data));
    // fileUpload('contact-image');
    auth();
    componentHandler.upgradeAllRegistered();
  });
};
