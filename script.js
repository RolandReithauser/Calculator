function display(val) {
	document.getElementById('result').value += val;
	return val;
}

/*
btn CE
btn C
btn BS
btn division
btn seven
btn eight
btn nine
btn multiplication
btn four
btn five
btn six
btn subtraction
btn one
btn two
btn three
btn addition
btn sign
btn zero
btn dot
btn equal
*/

function add(number1, number2) {
	return number1 + number2;
}

function substract(number1, number2) {
	return number1 - number2;
}

function divide(number1, number2) {
	return number1 / number2;
}

function multiply(number1, number2) {
	return number1 * number2;
}

function solve() {
	let x = document.getElementById('result').value;
	let y = eval(x);
	document.getElementById('result').value = y;
	return y;
}

function clearScreen() {
	document.getElementById('result').value = '';
}

function backSpace() {
	document.getElementById('result').value = pop(result);
}
