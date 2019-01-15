
let numbers = [];
var storeOp;
var lastNum;
let show;
let decimal = false;
let p = document.getElementById("display");

function iniCleer() {
  document.getElementById("display").innerHTML = "0";
}

//Numbers

function myButton(label) {
  if(typeof label == 'number') {
    // number buttons
    if(label == 0) {
      if(numbers.length >= 1 && numbers.length < 9){
        numbers.push(label);
        document.getElementById("display").innerHTML = `${numbers.join("")}`;
      }
    }
    else if(numbers.length < 9) {
      numbers.push(label);
      document.getElementById("display").innerHTML = `${numbers.join("")}`;
    }
  }
}

function fourFuncs(operator) {
  let k = arrayToNum(numbers);
      k = k.toString();
  if(typeof operator == 'string') {
      // four core operators
        if(operator == "division") {
          k += " / ";
        }
        else if(operator == "mul") {
          k += " * ";
        }
        else if(operator == "subtract") {
          k += " - ";
        }
        else if(operator == "addition") {
          k += " + ";
        }
        storeOp = k;
    }
    lastNum = k;
}

function arrayToNum() {
  let k = 0;
  let n = numbers.length;
  //turns array into a number value
  for (let i = 0; i < n; i++) {
    k = 10 * k + numbers[i];
  }
  //to clear numbers[]
  for (let i = 0; i < n; i++) {
    numbers.pop();
  }
  return k;
}

//Operators
function cleer() {
  document.getElementById("display").innerHTML = "0";

  let l = numbers.length;

  for (let i = 0; i < l; i++) {
    numbers.pop();
  }
  decimal = false;
}

function plusMinus() {

}

function mod() {

}

function deci() {
  if((numbers.length > 0 && numbers.length < 10) && decimal == false) {
    numbers.push(".");
    decimal = true;
  }

}

function equal() {
  lastNum = arrayToNum(numbers);

  lastNum = lastNum.toString();
  console.log(storeOp);
  console.log(numbers);
  console.log(lastNum);
  storeOp += lastNum;
  show = storeOp;
}
