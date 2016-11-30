/**
 * @example
 *
 * step 1. query('#demo').innerHTML = slideshowCompiled(<TEMPLATE_DATA>);
 * setp 2. slideshow();
 */
import template from 'lodash-es/template';

import slideshowTpl from './slideshow.html';
import slideshowStyl from './slideshow.css';

let [slideIndex, slideAction, slideActive] = [0, undefined, false];

export const slideshowCompiled = template(slideshowTpl, { 'imports': { 'style': slideshowStyl }});

export const slideshow = () => {
  let slides = document.querySelectorAll('[data-slideshow]');

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = 'block';

  if (slides.length > 1) {
    slideAction = setTimeout(slideshow, 1000);
  }
};

export const addSlideActive = () => {
  if (slideActive === false) {
    slideshow();
    slideActive = true;
  }
};

export const removeSlideActive = () => {
  clearTimeout(slideAction);
  slideActive = false;
};
