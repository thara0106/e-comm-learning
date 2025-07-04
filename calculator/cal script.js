function add() {
  const a = parseFloat(document.getElementById("num1").value);
  const b = parseFloat(document.getElementById("num2").value);
  document.getElementById("result").innerText =
    "Addition of the numbers: " + (a + b);
}

function sub() {
  const a = parseFloat(document.getElementById("num1").value);
  const b = parseFloat(document.getElementById("num2").value);
  document.getElementById("result").innerText =
    "Subtraction of the numbers: " + (a - b);
}

function multi() {
  const a = parseFloat(document.getElementById("num1").value);
  const b = parseFloat(document.getElementById("num2").value);
  document.getElementById("result").innerText =
    "Multiplication of the numbers: " + a * b;
}

function divi() {
  const a = parseFloat(document.getElementById("num1").value);
  const b = parseFloat(document.getElementById("num2").value);
  if (b === 0) {
    document.getElementById("result").innerText =
      "Division by zero is not allowed.";
  } else {
    document.getElementById("result").innerText =
      "Division of the numbers: " + a / b;
  }
}

function percent() {
  const a = parseFloat(document.getElementById("num1").value);
  const b = parseFloat(document.getElementById("num2").value);

  if (b === 0) {
    document.getElementById("result").innerText =
      "Cannot calculate percentage with divisor 0.";
  } else {
    const p = (a / b) * 100;
    document.getElementById("result").innerText =
      "Percentage: " + p.toFixed(2) + "%";
  }
}
