let displayValue = '';
let isResultDisplayed = false; // Flag to track if the result is displayed

function appendValue(value) {
    if (isResultDisplayed) {
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
    isResultDisplayed = false;
    updateDisplay();
}

function calculate() {
    try {
        // Evaluate the expression
        let result = eval(displayValue);

        // Fix floating-point precision errors
        result = Math.round((result + Number.EPSILON) * 100000000) / 100000000; // Rounding to 8 decimal places

        displayValue = result.toString();
        isResultDisplayed = true;
    } catch {
        displayValue = 'Error';
        isResultDisplayed = false;
    }
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').textContent = displayValue;
}