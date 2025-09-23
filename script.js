const buttons = document.querySelector(".btns");
const displayScreen = document.querySelector(".display");
let operand1, operator, operand2, state;

initialize();

function initialize() {
  operand1 = 0;
  operator = "";
  operand2 = 0;
  state = 0; // initial(0), op1(1), op2(2), result(3)
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
  if (b == 0) return NaN;
  return a / b;
}

function display(num) {
  if (Number.isInteger(num)) {
    displayScreen.textContent = num.toString();
  } else {
    displayScreen.textContent = Number(num.toFixed(9));
  }
}

function appendDigit(num, digit) {
  return num * 10 + digit;
}

buttons.addEventListener("click", (event) => {
  let btn = event.target;
  let btnClassList = btn.classList;

  if (btnClassList.contains("digit")) {
    if (state == 0) {
      state = 1;
      operand1 = appendDigit(operand1, Number(btn.textContent));
      display(operand1);
    } else if (state == 1) {
      operand1 = appendDigit(operand1, Number(btn.textContent));
      display(operand1);
    } else if (state == 2) {
      operand2 = appendDigit(operand2, Number(btn.textContent));
      display(operand2);
    } else if (state == 3) {
      state = 1;
      operand1 = appendDigit(0, Number(btn.textContent));
      display(operand1);
    }
  } else if (btnClassList.contains("operator")) {
    if (state == 2) {
      operand1 = operate(operand1, operator, operand2);
      display(operand1);
    } else if (state == 3) {
    }
    state = 2;
    operator = btn.textContent;
    operand2 = 0;
  } else if (btnClassList.contains("=")) {
    if (state == 0) {
      // do nothing
    } else if (state == 1) {
      // do nothing
    } else if (state == 2) {
      operand1 = operate(operand1, operator, operand2);
      display(operand1);
      state = 3;
    } else if (state == 3) {
      operand1 = operate(operand1, operator, operand2);
      display(operand1);
    }
  } else if (btnClassList.contains("clear")) {
    initialize();
  }
});
