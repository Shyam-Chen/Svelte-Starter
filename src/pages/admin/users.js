import { __moduleExports as mdRipple } from '@material/ripple/dist/mdc.ripple';
import { __moduleExports as mdDialog } from '@material/dialog/dist/mdc.dialog';
import { __moduleExports as mdTextfield } from '@material/textfield/dist/mdc.textfield';

export const users = (): void => {
  const bodyEl = document.querySelector('body');

  const search = document.querySelector('#search');

  const dialogEditEl = document.querySelector('#dialog-edit');
  const dialogEdit = new mdDialog.MDCDialog(dialogEditEl);
  const name = document.querySelector('#edit-name');
  const email = document.querySelector('#edit-email');
  const message = document.querySelector('#edit-message');
  const save = document.querySelector('#edit-save');

  const dialogDeleteEl = document.querySelector('#dialog-delete');
  const dialogDelete = new mdDialog.MDCDialog(dialogDeleteEl);
  const confirm = document.querySelector('#delete-confirm');

  search.onkeyup = (): void => {
    const input = document.querySelector('#search');
    const filter = input.value.toUpperCase();
    const tbody = document.querySelector('#table > tbody');
    const tr = tbody.getElementsByTagName('tr');

    for (let i = 0; i < tr.length; i++) {
      const tds = tr[i].getElementsByTagName('td');
      const find = [].findIndex.call(tds, td => td.innerHTML.toUpperCase().indexOf(filter) !== -1);

      if (find === -1 || find === (tds.length - 1)) {
        tr[i].style.display = 'none';
      } else {
        tr[i].style.display = '';
      }
    }
  };

  const sliceAll = (selector: string, element: any = document): any =>
    [].slice.call((element).querySelectorAll(selector));

  sliceAll('tbody').forEach((body: any): void => {
    sliceAll('tr', body).reverse()
      .forEach(row => body.appendChild(row));
  });

  [dialogEdit, dialogDelete].forEach((dialog: any): void => {
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
