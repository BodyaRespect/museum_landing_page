'use strict';

document.getElementById("ticket_button").addEventListener("click", function() {
  alert("There are no tickets!");
});

let currentIndex = 0;

function changeSlide(index) {
  console.log(`Changing to slide ${index}`); // Debugging log
  const dots = document.querySelectorAll('.slider-gallery__dot');
  const slides = document.querySelectorAll('.slider-gallery__item');

  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove('slider-gallery__dot--active');
    slides[i].style.display = 'none';
  }

  dots[index].classList.add('slider-gallery__dot--active');
  slides[index].style.display = 'block';
}

function autoSlide() {
  const dots = document.querySelectorAll('.slider-gallery__dot');
  setInterval(function() {
    currentIndex++;
    if (currentIndex >= dots.length) {
      currentIndex = 0;
    }
    changeSlide(currentIndex);
  }, 3000);
}

document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM fully loaded and parsed");
  const subscribeForm = document.getElementById("subscribeForm");
  const subscribeButton = document.getElementById("subscribeButton");

  if (subscribeButton) {
    subscribeButton.addEventListener("click", function(event) {
      event.preventDefault();
      subscribeForm.reset();
    });
  }

  if (window.innerWidth < 1024) {
    changeSlide(currentIndex);
    autoSlide();
  }
});
