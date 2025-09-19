const buttons = document.querySelector("btns");
let operand1, operator, operand2;

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

buttons.addEventListener("click", (event) => {
  let btn = event.target;
  switch (btn) {
    case "=":
      showResult();
      break;
    case "clear":
      initialize();
      break;
    case "operator":
      updateOperator(btn.textContent);
      break;
    default:
      updateOperands(btn.textContent);
      break;
  }
});
