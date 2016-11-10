export const timeoutRejected = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('Request Timeout.')), 5000);
  });
};

export const load = (file) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('get', file);
    xhr.onload = () => {
      const status = xhr.status;
      status === 200 ? resolve(xhr.response) : reject(status);
    };
    xhr.send();
    return xhr.responseText;
  });
};

export const loadFont = (url) => {
  const xhr = new XMLHttpRequest();
  xhr.open('get', url);
  xhr.onload = () => {
    if (xhr.status === 200) {
      const style = document.createElement('style');
      style.innerHTML = xhr.responseText;
      document.head.appendChild(style);
    }
  };
  xhr.send();
};
