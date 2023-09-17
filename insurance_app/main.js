// Selecting form inputs
const form = document.querySelector('form');
const customerName = document.querySelector('#name');
const customerAge = document.querySelector('#age');
const healthStatus = document.querySelectorAll('input[name=health]');
const healthyHabits = document.querySelectorAll('input[name=habits]');
const unhealthyHabits = document.querySelectorAll('input[name=unhealthy-habits]');
const button = document.querySelector('button');

// Summary target elements.
const fullName = document.querySelector('#customer-name');
const ageOfCustomer = document.querySelector('#customer-age');
const customerHealth = document.querySelector('#customer-health-status');
const healthyStatus = document.querySelector('#customer-healthy-habits');
const unhealthyStatus = document.querySelector('#customer-unhealthy-habits');
const aggregateScore = document.querySelector('#score');
const summary = document.querySelector('.quote');

// Function to calculate cusotmer's risk score.
const calculateRiskScore = () => {
    // Define global variables in function scope to access their values.
    const age = customerAge.value;
    
    // Initialize base score.
    const baseScore = 500;
    let riskScore = 0;

    // Get risk score by age.
    age < 18 ? riskScore += baseScore
        : age < 26 ? riskScore += baseScore + (baseScore * 0.1)
        : age < 36 ? riskScore += baseScore + (baseScore * 0.3)
        : age < 46 ? riskScore += baseScore + (baseScore * 0.6)
        : age < 56 ? riskScore += baseScore * 2
        : age < 66 ? riskScore += baseScore + (baseScore * 1.5)
        : riskScore += baseScore + (baseScore * 2.1);
    
    // Get risk score by health status.
    healthStatus.forEach(condition => {
        if (condition.checked) riskScore += baseScore * 0.01;
    });

    // Reduce risk score by 5% of base score for healthy habits.
    for (const healthyHabit of healthyHabits) {
        if (healthyHabit.checked) riskScore -= baseScore * 0.05;
    }

    // Increase risk score by 5% of base score for unhealthy habits.
    for (const unhealthyHabit of unhealthyHabits) {
        if (unhealthyHabit.checked) riskScore += baseScore * 0.05;
    }

    return riskScore;
}

// Add event listener to the form.
form.addEventListener('change', calculateRiskScore);

// Display summary and populate field.
const getInsurancQuote = () => {
    // Get form input values.
    const customerFullName = customerName.value;
    const newCustomerAge = customerAge.value
    const healthCondition = [];
    const customerHealthyHabits = [];
    const customerUnhealthyHabits = [];

    for (const healthCond of healthStatus) {
        if (healthCond.checked) healthCondition.push(healthCond.id);
    }

    for (const habit of healthyHabits) {
        if (habit.checked) customerHealthyHabits.push(habit.id);
    }

    for (const unhealthyHabit of unhealthyHabits) {
        if (unhealthyHabit.checked) customerUnhealthyHabits.push(unhealthyHabit.id);
    }

    fullName.textContent = `Full name: ${customerFullName}`;
    ageOfCustomer.textContent = `Age: ${newCustomerAge}`;
    customerHealth.textContent = `Health status: ${healthCondition.join(', ')}`;
    healthyStatus.textContent = `Healthy habits: ${customerHealthyHabits.join(', ')}`;
    unhealthyStatus.textContent = `Unhealthy habits: ${customerUnhealthyHabits.join(', ')}`;
    aggregateScore.textContent = `Risk score: ${calculateRiskScore()}`;

    // Unhide summary container.
    summary.classList.remove('hidden');
}

// Add event listener to button.
button.addEventListener('click', getInsurancQuote);