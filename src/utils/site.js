export const site = (lang, title, description) => {
  document.documentElement.lang = lang;
  document.title = title;
  document.querySelector('meta[name=description]').content = description;
};
