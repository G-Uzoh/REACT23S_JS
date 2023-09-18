const form = document.querySelector('form');
const color1 = document.querySelector('#color1');
const color2 = document.querySelector('#color2');
const directions = document.querySelectorAll('input[type=radio]');
const colorCodes = document.querySelector('#code');
const body = document.querySelector('body');
console.log(body);

const bgGenerator = () => {
    let selectedValue;

    for (const direction of directions) {
        direction.checked ? selectedValue = direction.value : '';
    }
    colorCodes.textContent = `linear-gradient(${selectedValue}, ${color1.value}, ${color2.value});`;
    // body.bgColor = 
}

form.addEventListener('change', bgGenerator);