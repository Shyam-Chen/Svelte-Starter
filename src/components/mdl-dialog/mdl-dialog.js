const dialog = document.querySelector('dialog');
const showDialogButton = document.querySelector('#show-dialog');

showDialogButton.addEventListener('click', () => dialog.show());
dialog.querySelector('.close').addEventListener('click', () => dialog.close());
