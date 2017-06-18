import { __moduleExports as mdRipple } from '@material/ripple/dist/mdc.ripple';
import { __moduleExports as mdDialog } from '@material/dialog/dist/mdc.dialog';
import { __moduleExports as mdTextfield } from '@material/textfield/dist/mdc.textfield';

export const users = (): void => {
  const dialog = new mdDialog.MDCDialog(document.querySelector('#dialog-edit'));

  /**
   * edit
   */

  // document.querySelector('#edit').style.display = 'none';

  [].forEach.call(
    document.querySelectorAll('.mdc-button[data-edit]'),
    editButton => {
      editButton.onclick = (event: any): void => {
        dialog.lastFocusedTarget = event.target;
        dialog.show();

        const name = document.querySelector('#edit-name');
        const email = document.querySelector('#edit-email');
        const message = document.querySelector('#edit-message');

        const save = document.querySelector('#edit-save');

        name.value = editButton.dataset.editName;
        email.value = editButton.dataset.editEmail;
        message.value = editButton.dataset.editMessage;

        save.onclick = (event: any): void => {
          dialog.lastFocusedTarget = event.target;

          firebase.database()
            .ref(`users/${editButton.dataset.edit}`)
            .update({ name: name.value, email: email.value, message: message.value });
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

  /**
   * @name Material
   */

  [].forEach.call(
    document.querySelectorAll('.mdc-button'),
    ripple => mdRipple.MDCRipple.attachTo(ripple)
  );

  [].forEach.call(
    document.querySelectorAll('.mdc-textfield'),
    textfield => mdTextfield.MDCTextfield.attachTo(textfield)
  );
};
