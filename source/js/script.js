'use strict';
// var pageHeader = document.querySelector('.page-header');
// var headerToggle = document.querySelector('.page-header__toggle');

// pageHeader.classList.remove('page-header--nojs');

// headerToggle.addEventListener('click', function () {
//   if (pageHeader.classList.contains('page-header--closed')) {
//     pageHeader.classList.remove('page-header--closed');
//     pageHeader.classList.add('page-header--opened');
//   } else {
//     pageHeader.classList.add('page-header--closed');
//     pageHeader.classList.remove('page-header--opened');
//   }
// });

let anchors = document.querySelectorAll('a[href^="#"]');

for (let anchor of anchors) {
  anchor.addEventListener('click', function(evt) {
    evt.preventDefault();
    let blockID = anchor.getAttribute('href');
    document.querySelector('' + blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  })
}

// slider

const slides = document.querySelectorAll('.slider__item');
const dots = document.querySelectorAll('.slider__dot');

// на каком активном слайде мы сейчас находимся

let index = 0;

// в n количество слайдов на странице

const activeSlide = function(n) {
  for(let slide of slides) {
    slide.classList.remove('slider__item--active');
  }
  slides[n].classList.add('slider__item--active');
};

const activeDot = n => {
  for(let dot of dots) {
    dot.classList.remove('slider__dot--active');
  }
  dots[n].classList.add('slider__dot--active');
}

const prepareCurrentSlide = ind => {
  activeSlide(ind);
  activeDot(ind);
}

const nextSlide = function() {
  if(index == slides.length - 1) {
    index = 0;
    prepareCurrentSlide(index);
  } else {
    index++;
    prepareCurrentSlide(index);
  }
};

const prevSlide = function() {
  if(index == 0) {
    index = slides.length - 1;
    prepareCurrentSlide(index);
  } else {
    index--;
    prepareCurrentSlide(index);
  }
};

dots.forEach((item, indexDot) => {
  item.addEventListener('click', () => {
    index = indexDot;
    prepareCurrentSlide(index);
    clearInterval(interval);
  })
});


const delay = setTimeout(nextSlide, 4000);
const interval = setInterval(nextSlide, 4000);


