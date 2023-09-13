// Selects all inputs to listen to.
const formItems = document.querySelector('form');

const customer = document.querySelector('#name');
const address = document.querySelector('#address');
const sizes = document.querySelectorAll('input[name=size]');
const toppings = document.querySelectorAll('input[type=checkbox]');
const deliveryMethod = document.querySelector('#delivery');
const priceDisplay = document.querySelector('#price');
const orderButton = document.querySelector('button');
const customerInfo = document.querySelector('#customer');
const pizzaSize = document.querySelector('#size');
const customerAddress = document.querySelector('#customer-address');
const finalToppings = document.querySelector('#toppings');
const delivery = document.querySelector('#delivery-option');
const totalPrice = document.querySelector('#total');

// Function that computes the total price based on inputs selected.
const getTotalPizzaPrice = () => {
    // Initial base and extra fees.
    let sizeId = '';
    let toppingsList = [];
    let price = 0;
    let deliveryOption = deliveryMethod.options[deliveryMethod.selectedIndex].value;

    // Gets the selected size from the size array.
    for (const size of sizes) {
        if (size.checked) sizeId = size.id;
    }

    if (sizeId === 'small') price += 7.5;
    else if (sizeId === 'medium') price += 10.5;
    else if (sizeId === 'large') price += 12.5;
    else if (sizeId === 'extra-large') price += 15.5;

    // Gets selected topping(s) from the toppings list.
    toppings.forEach(topping => {
        if (topping.checked) toppingsList.push(topping.id);
    });
    if (toppingsList.length > 4) price += (toppingsList.length - 4) * 0.5;

    // Gets selected delivery method.
    if (deliveryOption === 'home') price += 5;

    priceDisplay.textContent = price;
    return price;

}

// Adds event listener to the form.
formItems.addEventListener('change', getTotalPizzaPrice);


const getOrderSummary = () => {
    const customerName = customer.value;
    const addressInfo = address.value;
    let sizeId = '';
    const allToppings = [];
    const deliveryType = deliveryMethod.options[deliveryMethod.selectedIndex].value;
    
    customerInfo.textContent = `Customer: ${customerName}`;
    customerAddress.textContent = `Address: ${addressInfo}`;

    for (const size of sizes) {
        if (size.checked) sizeId = size.id;
    }
    pizzaSize.textContent = `Size: ${sizeId}`;

    // All selected toppings.
    for (const topping of toppings) {
        if (topping.checked) allToppings.push(topping.id);
    }
    finalToppings.textContent = `Toppings: ${allToppings.join(', ')}`;

    // Delivery type.
    delivery.textContent = `Delivery Option: ${deliveryType}`;

    // Price.
    totalPrice.textContent = `Price: ${getTotalPizzaPrice()} €`;
}


orderButton.addEventListener('click', getOrderSummary);