import { __moduleExports as mdRipple } from '@material/ripple/dist/mdc.ripple';
import { __moduleExports as mdDialog } from '@material/dialog/dist/mdc.dialog';
import { __moduleExports as mdTextfield } from '@material/textfield/dist/mdc.textfield';

export const users = (): void => {
  const bodyEl = document.querySelector('body');

  const dialogEditEl = document.querySelector('#dialog-edit');
  const dialogEdit = new mdDialog.MDCDialog(dialogEditEl);
  const name = document.querySelector('#edit-name');
  const email = document.querySelector('#edit-email');
  const message = document.querySelector('#edit-message');
  const save = document.querySelector('#edit-save');

  const dialogDeleteEl = document.querySelector('#dialog-delete');
  const dialogDelete = new mdDialog.MDCDialog(dialogDeleteEl);
  const confirm = document.querySelector('#delete-confirm');

  [dialogEdit, dialogDelete].forEach((dialog: any) => {
    dialog.listen('MDCDialog:accept', () => bodyEl.style.overflowY = 'auto');
    dialog.listen('MDCDialog:cancel', () => bodyEl.style.overflowY = 'auto');
  });

  [].forEach.call(
    document.querySelectorAll('.mdc-button[data-edit]'),
    editButton => {
      editButton.onclick = (): void => {
        dialogEdit.show();
        bodyEl.style.overflowY = 'hidden';

        name.value = editButton.dataset.editName;
        email.value = editButton.dataset.editEmail;
        message.value = editButton.dataset.editMessage;

        save.onclick = (): void => {
          firebase.database()
            .ref(`users/${editButton.dataset.edit}`)
            .update({ name: name.value, email: email.value, message: message.value });
        };
      };
    }
  );

  [].forEach.call(
    document.querySelectorAll('.mdc-button[data-delete]'),
    deleteButton => {
      deleteButton.onclick = (): void => {
        dialogDelete.show();
        bodyEl.style.overflowY = 'hidden';

        confirm.onclick = (): void => {
          firebase.database()
            .ref(`users/${deleteButton.dataset.delete}`)
            .remove();
        };
      };
    }
  );

  [].forEach.call(
    document.querySelectorAll('.mdc-button'),
    ripple => mdRipple.MDCRipple.attachTo(ripple)
  );

  [].forEach.call(
    document.querySelectorAll('.mdc-textfield'),
    textfield => mdTextfield.MDCTextfield.attachTo(textfield)
  );
};
