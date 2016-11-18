export const loadFont = (url) => {
  const xhr = new XMLHttpRequest();
  xhr.open('get', url);
  xhr.onreadystatechange = () => {
    if (xhr.status === 200 && xhr.readyState === 4) {
      const style = document.createElement('style');
      style.innerHTML = xhr.responseText;
      document.head.appendChild(style);
    }
  };
  xhr.send();
};

export const loadFile = (url) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('get', url);
    xhr.onreadystatechange = () => {
      if (xhr.status === 200 && xhr.readyState === 4) {
        resolve(xhr.response);
      } else {
        reject(new Error('Failed to load.'));
      }
    };
    xhr.send();
    return xhr.responseText;
  });
};
