const display = document.querySelector('#result');
let firstNumber = null, operator = null, secondNumber = null;

function updateDisplay(value) {
  display.value = value;
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    updateDisplay('Cannot divide by 0');
    return;
  }
  return a / b;
}

function operate(op, a, b) {
  switch (op) {
    case '+': return add(a, b);
    case '-': return subtract(a, b);
    case '*': return multiply(a, b);
    case '/': return divide(a, b);
  }
}

function handleNumber(e) {
  const value = e.target.value;
  if (!firstNumber) firstNumber = parseFloat(value);
  else if (!operator) firstNumber = parseFloat(`${firstNumber}${value}`);
  else if (!secondNumber) secondNumber = parseFloat(value);
  else secondNumber = parseFloat(`${secondNumber}${value}`);
  updateDisplay(firstNumber || secondNumber || 0);
}

function handleOperator(e) {
  operator = e.target.value;
}

function handleEqual() {
  if (!firstNumber || !operator || !secondNumber) return;
  const result = operate(operator, firstNumber, secondNumber);
  updateDisplay(result);
  firstNumber = result;
  operator = secondNumber = null;
}

function handleClear() {
  updateDisplay(0);
  firstNumber = operator = secondNumber = null;
}
