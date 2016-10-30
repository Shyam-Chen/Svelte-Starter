export const load = (file) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('get', file);
    xhr.onload = () => {
      let status = xhr.status;
      status === 200 ? resolve(xhr.response) : reject(status);
    };
    xhr.send();
    return xhr.responseText;
  });
};
