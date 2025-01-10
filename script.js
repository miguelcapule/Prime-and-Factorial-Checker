// Attach event listeners to buttons
document.getElementById('primeButton').addEventListener('click', handlePrime);
document.getElementById('factorialButton').addEventListener('click', handleFactorial);
document.getElementById('clearButton').addEventListener('click', clearInput);
document.getElementById('themeToggleButton').addEventListener('click', toggleTheme);
document.getElementById('infoButton').addEventListener('mouseover', showInstructions);
document.getElementById('infoButton').addEventListener('mouseout', hideInstructions);

// Cache elements for better performance
const resultElement = document.getElementById('result');
const numberInput = document.getElementById('numberInput');
const themeToggleButton = document.getElementById('themeToggleButton');
const themeIcon = document.getElementById('themeIcon');
const body = document.body;

// Event handlers
function showInstructions() {
    document.getElementById('instructions').classList.remove('hidden');
}

function hideInstructions() {
    document.getElementById('instructions').classList.add('hidden');
}

function handlePrime() {
    const num = parseInt(numberInput.value);
    if (!isValidInput(num)) return;

    const explanation = checkPrime(num);
    resultElement.innerHTML = explanation;
}

function handleFactorial() {
    const num = parseInt(numberInput.value);
    if (!isValidInput(num)) return;

    const explanation = calculateFactorial(num);
    resultElement.innerHTML = explanation;
}

function clearInput() {
    numberInput.value = '';
    resultElement.innerHTML = '';
}

function toggleTheme() {
    body.classList.toggle('dark-mode');
    const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
    themeIcon.innerText = theme === 'dark' ? '🌙' : '🌞'; // Switch between moon and sun icons
    localStorage.setItem('theme', theme); // Save theme preference
}

// Helper Functions

/**
 * Validate the user input (between 0 and 1000).
 */
function isValidInput(num) {
    if (isNaN(num)) {
        resultElement.innerText = 'Please enter a valid number.';
        return false;
    }
    if (num < 0 || num > 1000) {
        resultElement.innerText = 'Please enter a number between 0 and 1000.';
        return false;
    }
    return true;
}

/**
 * Check if the given number is prime.
 */
function checkPrime(num) {
    if (num <= 1) {
        return `${num} is not a prime number because prime numbers are greater than 1.`;
    }

    let explanation = `<b>Checking if ${num} is a prime number:</b><br>`;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        explanation += `Checking divisibility by ${i}.<br>`;
        if (num % i === 0) {
            return `${explanation}... ${i} is a divisor of ${num}, so ${num} is not a prime number.<br>`;
        }
    }
    return `${explanation}<br>No divisors found other than 1 and ${num}, so ${num} is a prime number.`;
}

/**
 * Calculate the factorial of a number.
 */
function calculateFactorial(num) {
    if (num === 0) return `<b>Factorial of ${num}:</b> 0! = 1`;

    let factorial = 1;
    let explanation = `<b>Calculating factorial of ${num}:</b><br>`;

    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    return `${explanation}Factorial of ${num} is calculated as ${num}! = ${factorial}.`;
}

// Theme Initialization
(function initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeToggleButton.checked = true;
        themeIcon.innerText = '🌙'; // Moon for dark mode
    } else {
        body.classList.remove('dark-mode');
        themeToggleButton.checked = false;
        themeIcon.innerText = '🌞'; // Sun for light mode
    }
})();

// Author: Syrel Miguel Capule 