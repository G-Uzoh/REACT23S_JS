const toTopButton = document.querySelector('#back-to-top');
const mobileMenuBtn = document.querySelector('.mobile');
const navMenu = document.querySelector('nav ul');

// Scroll event on window.
window.onscroll = function() {scrollFunction()};

// Code from w3schools for scrolling (for two different browsers).
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    toTopButton.style.display = "block";
  } else {
    toTopButton.style.display = "none";
  }
}

const backToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

const mobileMenu = () => {
    navMenu.classList.contains('responsive') ? navMenu.classList.remove('responsive') : navMenu.classList.add('responsive');
}

toTopButton.addEventListener('click', backToTop);
mobileMenuBtn.addEventListener('click', mobileMenu);