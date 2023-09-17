// document.addEventListener('DOMContentLoaded', function() {
// const healthStatus = document.getElementById('health-status');
// const healthyHabit = document.getElementById('healthy');
// const unhealthyHabit = document.getElementById('unhealthy');
// const customerAge = document.querySelector('#customer-info input[type=number]');
// const score = document.querySelector('#score');
// // const totalPrice = document.getElementById('price');

// // console.log(healthStatus);
// console.log(healthyHabit);
// // console.log(unhealthyHabit);
// // console.log(customerAge);
// // console.log(score);


// function getRiskScore() {
    
//     console.log(parseFloat(getScoreByHealthStatus()))

//     // const pizzaTopping = parseFloat(getPizzaTopping(topping)) || 0;

//     // const delivery = parseFloat(getDeliveryOption(deliveryOption)) || 0;

//     // const total = pizzaSize + pizzaTopping + delivery;

//     // totalPrice.textContent = `${total} €`;


//     // console.log(getScoreByAge() + getScoreByHealthStatus() + getHealthyHabitScore() + getUnhealthyHabitScore());
// }




// function getScoreByAge() {
//     const age = customerAge.value;
//     // console.log(age)
//     let riskScore;
//     let baseScore = 500;

//     if (age < 18) return riskScore = baseScore;
//     else if (age < 26) return riskScore = baseScore + (baseScore * 0.1);
//     else if (age < 36) return riskScore = baseScore + (baseScore * 0.3);
//     else if (age < 46) return riskScore = baseScore + (baseScore * 0.6);
//     else if (age < 56) return riskScore = baseScore * 2;
//     else if (age < 66) return riskScore = baseScore + (baseScore * 1.5);
//     else return riskScore = baseScore + (baseScore * 2.1);
//     // console.log(age)
//     // console.log(riskScore)
//     // return riskScore;
// }
// // getScoreByAge();

let riskScore = 0;
const baseScore = 500;




function getScoreByAge() {

    const customerAge = age.value;
    if (customerAge >= 0 && customerAge < 18) console.log(riskScore = baseScore);
    else if (customerAge >= 18 && customerAge < 26) console.log(riskScore = baseScore + (baseScore * 0.1));
    else if (customerAge >= 26 && customerAge < 36) console.log(riskScore = baseScore + (baseScore * 0.3));
    else if (customerAge >= 36 && customerAge < 46) console.log(riskScore = baseScore + (baseScore * 0.6));
    else if (customerAge >= 46 && customerAge < 56) console.log(riskScore = baseScore * 2);
    else if (customerAge >= 56 && customerAge < 66) console.log(riskScore = baseScore + (baseScore * 1.5));
    else console.log(riskScore = baseScore + (baseScore * 2.1));
    // console.log(age)
    // console.log(riskScore)
    // return riskScore;
    // console.log(riskScore);
}

function getScoreByHealthStatus(event) {
    const riskScore1 = baseScore * 0.01;
    console.log(riskScore1)

    if (event.target.checked) riskScore += riskScore1;
    else riskScore -= riskScore1;
    console.log(riskScore)
    
    // console.log(parseFloat(riskScore));
}
// getScoreByHealthStatus();


function getHealthyHabitScore(event) {
    let riskScore5 = baseScore * 0.05;

    if (event.target.checked) riskScore += riskScore5;
    else riskScore -= riskScore5;

    console.log(riskScore);
}
// // getHealthyHabitScore();


function getUnhealthyHabitScore(event) {

    let riskScoreMinus5 = baseScore * 0.05;
    if (event.target.checked) riskScore -= riskScoreMinus5;
    else riskScore += riskScoreMinus5;    

   
    // riskScore += baseScore.toFixed(2);
    // console.log(parseFloat(riskScore));
    // return parseFloat(riskScore);
    console.log(riskScore);
}
// // getUnhealthyHabitScore();

// // healthStatus.addEventListener('change', getScoreByHealthStatus);
// healthyHabit.addEventListener('change', getHealthyHabitScore);
// unhealthyHabit.addEventListener('change', getUnhealthyHabitScore);
// customerAge.addEventListener('change', getScoreByAge);

// getRiskScore();
// });



// // function getRiskScore() {
// //     const pizzaSize = parseFloat(getPizzaSize(size)) || 0;

// //     const pizzaTopping = parseFloat(getPizzaTopping(topping)) || 0;

// //     const delivery = parseFloat(getDeliveryOption(deliveryOption)) || 0;

// //     const total = pizzaSize + pizzaTopping + delivery;

// //     totalPrice.textContent = `${total} €`;

// // }

const age = document.getElementById('age');

age.addEventListener('blur', getScoreByAge)

const healthConditions = document.getElementsByName('health');

healthConditions.forEach(condition => condition.addEventListener('click', getScoreByHealthStatus));


const healthyHabits = document.getElementsByName('habits');

healthyHabits.forEach(healthyHabit => healthyHabit.addEventListener('click', getHealthyHabitScore));

const unhealthyHabits = document.querySelectorAll('input[name=unhealthy-habits]');

unhealthyHabits.forEach(unhealthyHabit => unhealthyHabit.addEventListener('click', getUnhealthyHabitScore));

