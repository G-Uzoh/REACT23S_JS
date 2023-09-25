const toTopButton = document.querySelector('#back-to-top');
const mobileMenuBtn = document.querySelector('.mobile');
const navMenu = document.querySelector('nav ul');
const menuItems = document.querySelectorAll('nav ul li a');
const header = document.querySelector('header');
const modalBtn = document.querySelector('#warning-btn');
const overlay = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('#modal-btn-close');

// Scroll event on window.
window.onscroll = function() {scrollFunction()};

// Code from w3schools for scrolling (for two different browsers).
function scrollFunction() {
  (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) ? toTopButton.style.display = "block" : toTopButton.style.display = "none";

  (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) ? header.classList.add('bg') : header.classList.remove('bg');
}

const backToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

const mobileMenu = () => {
    for (item of menuItems) {
        item.addEventListener('click', mobileMenu);
    }
    navMenu.classList.contains('responsive') ? navMenu.classList.remove('responsive') : navMenu.classList.add('responsive');
}

const showModal = () => overlay.classList.toggle('visible');

toTopButton.addEventListener('click', backToTop);
mobileMenuBtn.addEventListener('click', mobileMenu);
modalBtn.addEventListener('click', showModal);
closeBtn.addEventListener('click', showModal);