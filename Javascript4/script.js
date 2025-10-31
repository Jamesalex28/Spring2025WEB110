/*
Project: JavaScript30 Slide in on Scroll (Improved)
Student: James Lee
Date: 10/30/2025
Source: Based on Wes Bos JavaScript30
Improvements: Scroll event listener, alternating slide directions, active class toggle for animation.
Challenging/learning points: Calculating scroll position and triggering animations when elements enter viewport.
*/

const slideImages = document.querySelectorAll('.slide-in');

function checkSlide() {
  slideImages.forEach(slide => {
    const slideInAt = (window.scrollY + window.innerHeight) - slide.height / 2;
    const imageBottom = slide.offsetTop + slide.height;
    const isHalfShown = slideInAt > slide.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;

    if (isHalfShown && isNotScrolledPast) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', checkSlide);
