const buttons = document.querySelector(".btns");
const displayScreen = document.querySelector(".display");
let operand1, operator, operand2;

let currentOperand = 1; // 1 for operand1, 2 for operand2

initialize();

function initialize() {
  operand1 = 0;
  operator = "";
  operand2 = 0;
  currentOperand = 1; // Reset to first operand
  display(0);
}

function operate(num1, operator, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2);
      break;
    case "-":
      return subtract(num1, num2);
      break;
    case "*":
      return multiply(num1, num2);
      break;
    case "/":
      return divide(num1, num2);
      break;
    default:
      break;
  }
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
  return a / b;
}

function display(num) {
  displayScreen.textContent = num;
}

function updateOperands(digit) {
  if (currentOperand == 1) {
    operand1 = operand1 * 10 + digit;
  } else if (currentOperand == 2) {
    operand2 = operand2 * 10 + digit;
  }
}

buttons.addEventListener("click", (event) => {
  let btn = event.target;
  switch (btn) {
    case "=":
      display(operate(operand1, operator, operand2)); // new
      break;
    case "clear":
      initialize();
      break;
    case "operator":
      operator = btn.textContent;
      operand1 = displayScreen.textContent;
      currentOperand = 2;
      break;
    default:
      updateOperands(btn.textContent);
      break;
  }
});
