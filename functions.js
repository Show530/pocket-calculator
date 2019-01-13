
let numbers = [];
let p = document.getElementById("display");

function iniClear() {
  document.getElementById("display").innerHTML = "0";
}

//Numbers

function myButton(label) {
  if(typeof label == 'number') {
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

//Operators
function cleer() {
  document.getElementById("display").innerHTML = "0";
  let l= numbers.length;

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
