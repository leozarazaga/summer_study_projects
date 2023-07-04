'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');


const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};


btnsOpenModal.forEach((button) => button.addEventListener('click', openModal))

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


//Modern way of scrolling
btnScrollTo.addEventListener('click', (e) => {
  section1.scrollIntoView({
    behavior: 'smooth',
  })
})



//Event Delegation
// 1. Add event listener to common parent element
// 2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  //Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    // console.log(id);
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth'
    })

  }
})

//Tabbed component

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  //Guard clause
  if (!clicked) return;

  // if(clicked){
  //   clicked.classList.add('operations__tab--active')
  // }

  //Remove active classes
  tabs.forEach((tab) => tab.classList.remove('operations__tab--active'));
  tabsContent.forEach((content) => content.classList.remove('operations__content--active'))

  //Activate tab
  clicked.classList.add('operations__tab--active')

  //Activate content area
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active')
})



//Menu fade animation
const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;

    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img')

    siblings.forEach((element) => {
      if (element !== link) element.style.opacity = this;
    })

    logo.style.opacity = this;
  }
}

nav.addEventListener('mouseover', handleHover.bind(0.5))
nav.addEventListener('mouseout', handleHover.bind(1))



//Sticky navigation
const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;


function stickyNav(entries) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
}

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`
});

headerObserver.observe(header)



//Reveal sections
const allSections = document.querySelectorAll('.section')

function revealSection(entries, observer) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target)
}


const sectionObsever = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15
})

allSections.forEach(function (section) {
  sectionObsever.observe(section)
  // section.classList.add('section--hidden')
})


// Lazy loading images
const imageTargets = document.querySelectorAll('img[data-src]')

const loadImage = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) return;

  //Replace src data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', () => {
    entry.target.classList.remove('lazy-img')
  })

  observer.unobserve(entry.target);
}

const imageObserver = new IntersectionObserver(loadImage, {
  root: null,
  threshold: 0,
  rootMargin: '200px'
});

imageTargets.forEach((img) => imageObserver.observe(img))




//                                 S L I D E R
function slider() {

  const slides = document.querySelectorAll('.slide')
  const btnLeft = document.querySelector('.slider__btn--left')
  const btnRight = document.querySelector('.slider__btn--right')
  const dotContainer = document.querySelector('.dots')

  let currentSlide = 0;
  const maxSlide = slides.length;

  //Functions
  const createDots = () => {
    slides.forEach((slide, index) => {
      dotContainer.insertAdjacentHTML('beforeend', `
    <button class="dots__dot" data-slide="${index}"></button>`)
    })
  }


  const activateDot = function (slide) {
    document.querySelectorAll('.dots__dot').forEach((dot) => dot.classList.remove('dots_dot--active'))

    document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active')
  }


  function goToSlide(slide) {
    slides.forEach((value, index) => (value.style.transform = `translateX(${100 * (index - slide)}%)`))
  };


  //Next slide
  const nextSlide = () => {
    if (currentSlide === maxSlide - 1) {
      currentSlide = 0;
    } else {
      currentSlide++
    }
    goToSlide(currentSlide)
    activateDot(currentSlide)
  }

  // Previous slide
  const prevSlide = () => {
    if (currentSlide === 0) {
      currentSlide = maxSlide - 1
    } else {
      currentSlide--;
    }
    goToSlide(currentSlide)
    activateDot(currentSlide)
  }

  const init = () => {
    goToSlide(0);
    createDots()

    activateDot(0);
  }

  init();

  //EVENT HANDLERS
  btnRight.addEventListener('click', nextSlide)
  btnLeft.addEventListener('click', prevSlide)


  //Using the Keyboard <-  -> 
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  })

  dotContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      currentSlide = Number(slide)
      goToSlide(slide)
      activateDot(slide)
    }
  })
};

slider()





// - - - - - - - - - - - - - - - NOTES - - - - - - - - - - - - - -

/* console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header')
const allSections = document.querySelectorAll('.section');
console.log(allSections);


const message = document.createElement('div')
message.classList.add('cookie-message');
// message.textContent = 'We used cookies...';
message.innerHTML = 'We used cookies... <button class="btn btn--close-cookie">Got it!</button>';

// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true))

document.querySelector('.btn--close-cookie').addEventListener('click', () => {
  message.remove()
})


//Styles

message.style.backgroundColor = '#37383d';
message.style.width = '120%'

console.log(message.style.backgroundColor);
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';


document.documentElement.style.setProperty('--color-primary', 'orangered')


//Attributes

const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src); */


// - - - - - - - - - - - - - - - SCROLLING - - - - - - - - - - - - - -


/* console.log(e.target.getBoundingClientRect());
console.log('Current scroll (X/Y)', window.pageXOffset, pageYOffset);
console.log('height/width viewport', document.documentElement.clientHeight, document.documentElement.clientWidth);


//OLD SCHOOL WAY of SCROLLING / OLD BROWSERS
// window.scrollTo(s1coordinates.left + window.pageXOffset, s1coordinates.top + window.pageYOffset)

//Better way of scrolling old school
  window.scrollTo({
  left: s1coordinates.left + window.pageXOffset,
  top: s1coordinates.top + window.pageYOffset,
  behavior: 'smooth'
})  */

// - - - - - - - - - - - - - - - HANDLING EVENTS - - - - - - - - - - - - - -

/* const h1 = document.querySelector('h1');
const alertH1 = (e) => {
  alert('addEventListener: Great! You are reading the heading!')
}

h1.addEventListener('mouseenter', alertH1)

setTimeout(() => {
  h1.removeEventListener('mouseenter', alertH1)
}, 3000) */

// - - - - - - - - - - - - - - - EVENT PROPAGATION - - - - - - - - - - - - - -

/* //rgb(255, 255, 255)

const randomInt = (min, max) => {
  return Math.floor(Math.random() * max - min) + min;
}

const randomColor = () => `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`


document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor()
  console.log('LINK', e.target, e.currentTarget);
})

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor()
  console.log('CONTAINER', e.target,e.currentTarget);
})

document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor()
  console.log('NAV', e.target, e.currentTarget);
}) */

// - - - - - - - - - - - - - - - PAGE NAVIGATION - - - - - - - - - - - - - -

/*
//Page navigation, scrolling to specific section | Not recommended!

document.querySelectorAll('.nav__link').forEach(function (element) {
  element.addEventListener('click', function (e) {
    e.preventDefault();

    const id = this.getAttribute('href')
    // console.log(id);

    document.querySelector(id).scrollIntoView({
      behavior: 'smooth'
    })

  })
})
*/

// - - - - - - - - - - - - - - - PAGE NAVIGATION - - - - - - - - - - - - - -
