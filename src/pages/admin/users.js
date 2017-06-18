export const users = (): void => {
  /**
   * edit
   */

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

  /**
   * delete
   */

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
};
