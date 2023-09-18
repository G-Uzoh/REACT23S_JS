const form = document.querySelector('form');
const color1 = document.querySelector('#color1');
const color2 = document.querySelector('#color2');
const directions = document.querySelectorAll('input[type=radio]');
const colorCodes = document.querySelector('#code');

const bgGenerator = () => {
    let selectedValue;

    for (const direction of directions) {
        direction.checked ? selectedValue = direction.value : '';
    }

    let gradient = `linear-gradient(${selectedValue}, ${color1.value}, ${color2.value})`;
    
    // Apply style to the body
    document.body.style.backgroundImage = gradient;

    // Display the color codes.
    colorCodes.textContent = gradient;
}

// Add event listener to the form
form.addEventListener('change', bgGenerator);