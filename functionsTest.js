let numbers = "";
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
        numbers += label;
        show += numbers;
        document.getElementById("display").innerHTML = `${numbers}`;
      }
    }
    else if(numbers.length < 9) {
      numbers+= label;
      show += numbers;
      document.getElementById("display").innerHTML = `${numbers}`;
    }
  }
}

function fourFuncs(operator) {
  if(typeof operator == 'string') {
      // four core operators
        if(operator == "division") {
          show += " / ";
        }
        else if(operator == "mul") {
          show += " * ";
        }
        else if(operator == "subtract") {
          show += " - ";
        }
        else if(operator == "addition") {
          show += " + ";
        }
    }
  numbers = "";
}


//Operators
function cleer() {
  document.getElementById("display").innerHTML = "0";

  numbers = "";
  decimal = false;
}

function plusMinus() {

}

function mod() {

}

function deci() {
  if((numbers.length > 0 && numbers.length < 10) && decimal == false) {
    numbers += ".";
    decimal = true;
  }

}

function equal() {

/*
  console.log(storeOp);
  console.log(numbers);
  console.log(lastNum);
  storeOp += lastNum;
  show = storeOp;
  show = eval(show);
*/
  show += numbers;
  show = eval(show);
  console.log(numbers);
  console.log(show);
  document.getElementById("display").innerHTML = `${show}`
}
