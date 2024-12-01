let displayValue = '';
let isResultDisplayed = false;

function appendValue(value) {
    if (isResultDisplayed) {
        displayValue = value;
        isResultDisplayed = false;
    } else if (displayValue === '0' || displayValue === 'No input provided' || displayValue === 'Invalid input') {
        displayValue = value;
    } else {
        displayValue += value;
    }
    updateDisplay();
}

function operate(operator) {
    if (displayValue === 'No input provided' || displayValue === 'Invalid input') return;

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
        if (!displayValue.trim()) {
            throw new Error("No input provided");
        }

        // Check for invalid expressions (e.g., ending with an operator)
        const lastChar = displayValue.trim().slice(-1);
        if ('+-*/'.includes(lastChar)) {
            throw new Error("Invalid input");
        }

        // Evaluate the expression
        let result = eval(displayValue);
        result = Math.round((result + Number.EPSILON) * 100000000) / 100000000; // Fix floating-point issues
        displayValue = result.toString();
        isResultDisplayed = true;
    } catch (error) {
        displayValue = error.message; // Display error messages
        isResultDisplayed = false;
    }
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').textContent = displayValue;
}