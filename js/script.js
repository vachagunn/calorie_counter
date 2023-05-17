const ageInput = document.querySelector('#age');
const heightInput = document.querySelector('#height');
const weightInput = document.querySelector('#weight');

const submitButton = document.querySelector('.form__submit-button');
const clearFieldsButton = document.querySelector('.form__reset-button'); 
const counterResult = document.querySelector('.counter__result');

const caloriesNorm = document.querySelector('#calories-norm');

const checkValue = () => {
    if (ageInput.value && heightInput.value && weightInput.value) {
        submitButton.disabled = false;
    } else if (ageInput.value || heightInput.value || weightInput.value) {
        clearFieldsButton.disabled = false;
    }

    // caloriesNorm.textContent = (10 * weightInput.value) + (6,25 * heightInput.value) - (5 * ageInput.value) + 5;
};


ageInput.addEventListener('input', checkValue);
heightInput.addEventListener('input', checkValue);
weightInput.addEventListener('input', checkValue);

submitButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    counterResult.classList.remove('counter__result--hidden');
});

clearFieldsButton.addEventListener('click', () => {
    counterResult.classList.add('counter__result--hidden');
});