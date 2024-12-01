<button onclick="operate('-')" class="btn operator">-</button> 
<button onclick="appendValue('1')" class="btn">1</button>
<button onclick="appendValue('2')" class="btn">2</button>
<button onclick="appendValue('3')" class="btn">3</button>
<button onclick="operate('+')" class="btn operator">+</button>
<button onclick="operate('*')" class="btn operator">*</button>
<button onclick="appendValue('.')" class="btn">.</button>
<button onclick="appendValue('0')" class="btn">0</button>
<button onclick="calculate()" class="btn operator" id="equals">=</button>
</div>
</div>

<script>
let displayValue = '';

function appendValue(value) {
if (displayValue === '0' || displayValue === 'Error') {
    displayValue = value;
} else {
    displayValue += value;
}
updateDisplay();
}

function operate(operator) {
if (displayValue === 'Error') return;

// Check if the last character is an operator
const lastChar = displayValue.trim().slice(-1);

if ('+-*/'.includes(lastChar)) {
    // Replace the last operator with the new one
    displayValue = displayValue.slice(0, -1) + operator;
} else {
    // Append the operator if the last character is not an operator
    displayValue += ` ${operator} `;
}

updateDisplay();
}

function clearDisplay() {
displayValue = '0';
updateDisplay();
}

function calculate() {
try {
    // Evaluate the expression
    displayValue = eval(displayValue).toString();
} catch {
    displayValue = 'Error';
}
updateDisplay();
}

function updateDisplay() {
document.getElementById('display').textContent = displayValue;
}