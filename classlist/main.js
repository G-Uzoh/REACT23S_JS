const toTopButton = document.querySelector('#back-to-top');

const backToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

toTopButton.addEventListener('click', backToTop);