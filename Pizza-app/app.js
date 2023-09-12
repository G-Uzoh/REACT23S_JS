// Selects all inputs to listen to.
const formItems = document.querySelector('form');

const customer = document.querySelector('#name');
const address = document.querySelector('#address');
const sizes = document.querySelectorAll('input[name=size]');
const toppings = document.querySelectorAll('input[type=checkbox]');
const deliveryMethod = document.querySelector('#delivery');
const priceDisplay = document.querySelector('#price');

// Function that computes the total price based on inputs selected.
const getTotalPizzaPrice = () => {
    const customerName = customer.value;
    
    // Initial base and extra fees.
    let sizeId = '';
    let toppingsList = [];
    let price = 0;
    let deliveryOption = deliveryMethod.options[deliveryMethod.selectedIndex].value;

    // Gets the selected size from the size array.
    for (const size of sizes) {
        if (size.checked) sizeId = size.id;
    }

    if (sizeId === 'two') price += 7.5;
    else if (sizeId === 'four') price += 10.5;
    else if (sizeId === 'six') price += 12.5;
    else if (sizeId === 'eight') price += 15.5;

    // Gets selected topping(s) from the toppings list.
    toppings.forEach(topping => {
        if (topping.checked) toppingsList.push(topping.id);
    });
    if (toppingsList.length > 4) price += (toppingsList.length - 4) * 0.5;

    // Gets selected delivery method.
    if (deliveryOption === 'home') price += 5;

    priceDisplay.textContent = price.toFixed(2);

}

// Adds event listener to the form.
formItems.addEventListener('change', getTotalPizzaPrice);
