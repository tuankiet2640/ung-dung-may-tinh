let a;
let b;

function add() {
  a = document.querySelector("#a").value;
  a = Number(a);
  b = document.querySelector("#b").value;
  b = Number(b);

  document.querySelector("#result").innerHTML = a + b;
}
function sub() {
  a = document.querySelector("#a").value;
  a = Number(a);
  b = document.querySelector("#b").value;
  b = Number(b);

  document.querySelector("#result").innerHTML = a - b;
}
function multi() {
  a = document.querySelector("#a").value;
  a = Number(a);
  b = document.querySelector("#b").value;
  b = Number(b);

  document.querySelector("#result").innerHTML = a * b;
}
function div() {
  a = document.querySelector("#a").value;
  a = Number(a);
  b = document.querySelector("#b").value;
  b = Number(b);

  document.querySelector("#result").innerHTML = a / b;
}
