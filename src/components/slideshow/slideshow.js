let slideIndex = 0;
export const slideshow =  () => {
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
    setTimeout(slideshow, 3333);
  }

};
