let displayValue = '';
let isResultDisplayed = false; // New flag to track if the result is displayed

function appendValue(value) {
    if (isResultDisplayed) {
        // If result is displayed, start fresh with the new value
        displayValue = value;
        isResultDisplayed = false;
    } else if (displayValue === '0' || displayValue === 'Error') {
        displayValue = value;
    } else {
        displayValue += value;
    }
    updateDisplay();
}

function operate(operator) {
    if (displayValue === 'Error') return;

    // Reset result flag if operation starts
    isResultDisplayed = false;

    const lastChar = displayValue.trim().slice(-1);
    if ('+-*/'.includes(lastChar)) {
        displayValue = displayValue.slice(0, -1) + operator;
    } else {
        displayValue += ` ${operator} `;
    }
    updateDisplay();
}

function clearDisplay() {
    displayValue = '0';
    isResultDisplayed = false; // Reset the result flag
    updateDisplay();
}

function calculate() {
    try {
        displayValue = eval(displayValue).toString();
        isResultDisplayed = true; // Mark that the result is displayed
    } catch {
        displayValue = 'Error';
        isResultDisplayed = false;
    }
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').textContent = displayValue;
}