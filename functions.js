
let numbers = [];
let p = document.getElementById("display");
document.getElementById("display").innerHTML = `0`;


//Numbers

function zero() {
  if(numbers.length > 1 && numbers.length < 9){
    numbers.push(0);
    document.getElementById("display").innerHTML = `${numbers.join("")}`;
  }
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

//Operators
function clear() {
  //hopefully will clear array?
  
  /*numbers.pop();
  numbers.pop();
  numbers.pop();
  numbers.pop();
  numbers.pop();
  numbers.pop();
  numbers.pop();
  numbers.pop();
  numbers.pop();

 console.log(numbers);
 document.getElementById("display").innerHTML = `${numbers.join("")}`;
*/
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
