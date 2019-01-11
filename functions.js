
let numbers = [];
let p = document.getElementById("display");

function clear() {
 for (let i = 0; i < numbers.length; i++) {
    numbers.pop();
 }
}

function plusMinus() {

}

function mod() {

}

function division() {

}

function num7() {
  if(numbers.length < 9) {
    numbers.push(7);
    document.getElementById("display").innerHTML = `${numbers.join("")}`;
  }
}

function num8() {
  if(numbers.length < 9) {
    numbers.push(8);
    document.getElementById("display").innerHTML = `${numbers.join("")}`;
  }
}

function num9() {
  if(numbers.length < 9) {
    numbers.push(9);
    document.getElementById("display").innerHTML = `${numbers.join("")}`;
  }
}

function mul() {

}

function num4() {
  if(numbers.length < 9) {
    numbers.push(4);
    document.getElementById("display").innerHTML = `${numbers.join("")}`;
  }
}

function num5() {
  if(numbers.length < 9) {
    numbers.push(5);
    document.getElementById("display").innerHTML = `${numbers.join("")}`;
  }
}

function num6() {
  if(numbers.length < 9) {
    numbers.push(6);
    document.getElementById("display").innerHTML = `${numbers.join("")}`;
  }
}

function subtract() {

}

function num1() {
  if(numbers.length < 9) {
    numbers.push(1);
    document.getElementById("display").innerHTML = `${numbers.join("")}`;
  }
}

function num2() {
  if(numbers.length < 9) {
    numbers.push(2);
    document.getElementById("display").innerHTML = `${numbers.join("")}`;
  }
}

function num3() {
  if(numbers.length < 9) {
    numbers.push(3);
    document.getElementById("display").innerHTML = `${numbers.join("")}`;
  }
}

function add() {

}

function zero() {

}

function deci() {

}

function equal() {

}
