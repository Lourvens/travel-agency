// navbar menu control
const openNavBtn = document.getElementById('openNavBtn'),
  closeNavBtn = document.getElementById('closeNavBtn'),
  navMenu = document.querySelector('.nav .nav__menu');

openNavBtn.addEventListener('click', () => {
  navMenu.dataset.isopen = 'true'
})

closeNavBtn.addEventListener('click', () => {
  navMenu.dataset.isopen = ''
})

// scroll reveal animation
var slide = {
  distance: '60%',
  opacity: 0
}

ScrollReveal().reveal('.home__title', { ...slide, delay: 400 });
ScrollReveal().reveal('.home__description', { opacity: 0, delay: 500 })
ScrollReveal().reveal('.home .search__btn', { ...slide, origin: 'right', delay: 700  })
ScrollReveal().reveal('.home .search__box', { ...slide, origin: 'left', delay: 700  })

ScrollReveal().reveal('.section__title', { scale: 0.3 })
ScrollReveal().reveal('.section__desc', { distance: '20%', opacity: 0, delay: 300 })
ScrollReveal().reveal('.card', { origin: 'top', distance: '10%',interval: 200 });

ScrollReveal({ mobile: false }).reveal('.nav', { ...slide, origin: 'top'});
