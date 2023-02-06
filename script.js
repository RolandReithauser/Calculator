const resultDisplay = document.getElementById("result");

function display(val) {
	let display = resultDisplay.value;
	if (display.startsWith("-")) {
		display = display.substring(1);
	}

	if (isOperator(val) && hasOperator(display)) {
		solve();
		display = resultDisplay.value;
	}

	if (display.startsWith("-")) {
		display = display.substring(1);
	}

	if (isOperator(val) && (hasOperator(display) || !hasNumber(display))) {
		return;
	}

	if (val === "." && (display.includes(".") && !hasOperator(display) ||
		hasMultipleDecimals(display))) {
		return;
	}

	resultDisplay.value += val;
}

function add(number1, number2) {
	return number1 + number2;
}

function subtract(number1, number2) {
	return number1 - number2;
}

function divide(number1, number2) {
	return number1 / number2;
}

function multiply(number1, number2) {
	return number1 * number2;
}

function solve() {
	const expression = resultDisplay.value;
	const result = eval(expression);
	resultDisplay.value = parseFloat(result.toFixed(12));
	return result;
}

function clearScreen() {
	resultDisplay.value = "";
}

function backSpace() {
	resultDisplay.value = resultDisplay.value.slice(0, -1);
}

function isOperator(val) {
	return ['+', '-', '*', '/'].includes(val);
}

function hasOperator(str) {
	return /[+\-*/]\.?\d/.test(str);
}

function hasNumber(str) {
	return /\d/.test(str);
}

function hasMultipleDecimals(str) {
	return /\.?\d*[+\-*/]\d*\./.test(str);
}
