const male = document.querySelector('#gender-male');
const female = document.querySelector('#gender-female');

const age = document.querySelector('#age');
const height = document.querySelector('#height');
const weight = document.querySelector('#weight');

const activityInputs = document.querySelectorAll('input[name=activity]');

const submitButton = document.querySelector('.form__submit-button');
const clearFieldsButton = document.querySelector('.form__reset-button'); 
const counterResult = document.querySelector('.counter__result');

const caloriesNorm = document.querySelector('#calories-norm');

const MINIMUM_COEFFICIENT = 1.2;
const LOW_COEFFICIENT = 1.375;
const MEDIUM_COEFFICIENT = 1.55;
const HIGH_COEFFICIENT = 1.725;
const MAXIMUM_COEFFICIENT = 1.9;

const checkValue = () => {
    if (age.value && height.value && weight.value) {
        submitButton.disabled = false;
    } else if (age.value || height.value || weight.value) {
        clearFieldsButton.disabled = false;
    }
};

const checkActivity = (activity) => {
    let coefficient;

    if (activity.id = 'activity-minimal') {
        coefficient = MINIMUM_COEFFICIENT; 
    } else if (activity.id = 'activity-low') {
        coefficient = LOW_COEFFICIENT;
    } else if (activity.id = 'activity-medium') {
        coefficient = MEDIUM_COEFFICIENT;
    } else if (activity.id = 'activity-high') {
        coefficient = HIGH_COEFFICIENT;
    } else if (activity.id = 'activity-maximal') {
        coefficient = VERY_HIGH_COEFFICIENT;
    }
    return coefficient;
}

const calculateCallories = () => {
    let currentActivity;
    let currentCoefficient;
    let formula = (10 * weight.value) + (6.25 * height.value) - (5 * age.value);
    let weightMaintenance;

    activityInputs.forEach((activityInput) => {
        if (activityInput.checked) {
            currentActivity = activityInput;
            currentCoefficient = checkActivity(currentActivity);
        }
    });

    if (male.checked) {
        weightMaintenance = formula + 5;
    } else if (female.checked) {
        weightMaintenance = formula - 161;
    }

    caloriesNorm.textContent = Math.round(weightMaintenance * currentCoefficient);
}

age.addEventListener('input', checkValue);
height.addEventListener('input', checkValue);
weight.addEventListener('input', checkValue);

submitButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    calculateCallories();
    counterResult.classList.remove('counter__result--hidden');
});

clearFieldsButton.addEventListener('click', () => {
    counterResult.classList.add('counter__result--hidden');
});