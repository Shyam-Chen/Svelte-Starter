export const load = (url) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('get', url);
    xhr.onload = () => {
      const status = xhr.status;
      status === 200 ? resolve(xhr.response) : reject(status);
    };
    xhr.send();
    return xhr.responseText;
  });
};

export const timeoutRejected = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('Request Timeout.')), 5000);
  });
};
