// Responsiver Navbar JS
let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu_btn').onclick =()=>{
  navbar.classList.add('active');
}

document.querySelector('#nav_close').onclick =()=>{
  navbar.classList.remove('active');
}

window.onscroll=() =>{
  navbar.classList.remove('active');
};

// Swiper JS
var swiper = new Swiper(".hero_slider", {
  loop:true,
  spaceBetween: 30,
  hashNavigation: {
    watchState: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Image Sliders JS

var swiper = new Swiper(".service_slider", {
  loop:true,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      },
});

// Review Swiper

var swiper = new Swiper(".review-slider", {
  loop:true,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      },
});