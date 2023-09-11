const displayAnswer = () => {
    const userQuestion = document.querySelector('#question').value;
    
    const question = document.querySelector('.question-container')
    const answer = document.querySelector('.answer-container');

    const random = Math.floor(Math.random() * 10);

    let text;
    
    // Decision statements to which the generated random numbers will apply.
    switch (random) {
        case 0:
            text = 'Consider your budget and need before deciding.';
            break;
        case 1:
            text = 'Think about your mood and plans for the day.';
            break;
        case 2:
            text = 'Choose based on your preference and the occasion.';
            break;
        case 3:
            text = 'Start now if you\'re focused, otherwise set a specific time.';
            break;
        case 4:
            text = 'Compare benefits and cost to decide.';
            break;
        case 5:
            text = 'Yes, if you\'re up for it and it\'s part of your routine.';
            break;
        case 6:
            text = 'Verify the credibility of the source first.';
            break;
        case 7:
            text = 'If you\'re ready and have plans in place, go for it.';
            break;
        case 8:
            text = 'Wait if you\'re unsure, buy if it\'s a good deal.';
            break;
        case 9:
            text = 'Start if you\'re passionate and have time.';
            break;
        default:
            text = 'Sorry, I can\'t help you!';
            break;
    }

    // Checks that the question input field is not empty, otherwise displays appropriate error message.
    if (userQuestion == '') answer.textContent = 'Please ask a valid question.';
    else question.textContent = `You asked: "${userQuestion}"`, answer.textContent = `${text}`;
}

const button = document.querySelector('button');
const displayItem = document.querySelector('.answer-container');

// Removes the hidden class applied to the answer-holding container.
button.addEventListener('click', (event) => {
    displayItem.classList.remove('hidden');
});