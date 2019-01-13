
let numbers = [];
let p = document.getElementById("display");

function iniClear() {
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
  /*
    else if(typeof label == 'string') {
    // four core operators
      if(label == "division") {
        //code
      }
      else if(label == "mul") {
        //code
      }
      else if(label == "subtract") {
        //code
      }
      else if(label == "addition") {
        //code
      }
 */
    }
}

function arrayToNum1() {
  let k = 0;
  let n = numbers.length;

  for (let i = 0; i < n; i++) {
    k = 10 * k + numbers[i];
  }
}

function arrayToNum2() {
  let h = 0;
  let n = numbers.length;

  for (let i = 0; i < n; i++) {
    h = 10 * h + numbers[i];
  }
}

//Operators
function cleer() {
  document.getElementById("display").innerHTML = "0";

  let l = numbers.length;

  for (let i=0; i < l; i++) {
    numbers.pop();
  }
}

function plusMinus() {
  
}

function mod() {

}

function division() {

}

function mul() {

}


function subtract() {

}

function add() {

}


function deci() {

}

function equal() {

}
