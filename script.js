// // functional expression
// function name(arguments) {
//   return;
// }

// // anonymous function
// function () {
// return
// }

// // arrow function
// let name = () => {
//   return
// }

let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let addButton = document.querySelector("#add");
let subButton = document.querySelector("#sub");
let multiButton = document.querySelector("#multi");
let spanResult = document.querySelector("span");

function addition(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

// Multiplication Button
multiButton.onclick = function () {
  let convertedNum1 = parseInt(num1.value);
  let convertedNum2 = parseInt(num2.value);

  if (!isNaN(convertedNum1) && !isNaN(convertedNum2)) {
    let result = multiplication(convertedNum1, convertedNum2);

    spanResult.innerText = result;
  }
};

// Subtraction Button
subButton.onclick = function () {
  let convertedNum1 = parseInt(num1.value);
  let convertedNum2 = parseInt(num2.value);

  if (!isNaN(convertedNum1) && !isNaN(convertedNum2)) {
    let result = subtraction(convertedNum1, convertedNum2);

    spanResult.innerText = result;
  }
};

// Addition Button
addButton.onclick = function () {
  let convertedNum1 = parseInt(num1.value);
  let convertedNum2 = parseInt(num2.value);
  if (!isNaN(convertedNum1) && !isNaN(convertedNum2)) {
    let result = addition(convertedNum1, convertedNum2);

    spanResult.innerText = result;
  }
};
