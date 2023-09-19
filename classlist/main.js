const toTopButton = document.querySelector('#back-to-top');

window.onscroll = function() {scrollFunction()};

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

toTopButton.addEventListener('click', backToTop);