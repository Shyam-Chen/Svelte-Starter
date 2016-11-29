/*
 * WIP
 */

import template from 'lodash-es/template';

import slideshowTpl from './slideshow.html';
import slideshowStyl from './slideshow.css';

export const slideshowCompiled = template(slideshowTpl, { 'imports': { 'style': slideshowStyl }});

let slideIndex = 0;
let action;
const slideshow =  () => {
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
    action = setTimeout(slideshow, 1000);
  }


};

// Use
// slideshow();

let active = false;
export const addSlideshowAction = () => {
  if (active === false) {
    slideshow();
    active = true;
  }
};

export const removeSlideshowAction = () => {
  clearTimeout(action);
  active = false;
};
