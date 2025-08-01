"use strict";
// const array1 = [1, 2, 3];
// const array2 = array1.slice();
// array2.push(4);
// console.log(array1);
// console.log(array2);

// advanced functions
// Functions are treated as first class citizens.
// Basically this means that functions are values.
const func = function greeting() {
  console.log("Ayo!");
};

// All these will return some or the other value or used as a value since functions in javascript are a value
// func();
// console.log(func);
// console.log(typeof func);

// Anonymous functions
const func2 = function () {
  console.log("Ayo!");
};

const myObj = {
  num: 2,
  fun: function () {
    console.log("function as a value in object");
  },
};

myObj.fun();
function display(param) {}

// passing value in a function
function displayOne(param) {
  console.log(param);
}
displayOne("passing value in function");

// we pass a function as a value. This is called a callback function
function run(param) {
  param();
}

run(function () {
  console.log("passing function as a value. Also called as callback function");
});

// setTimeout.
// set timeout takes in a callback function as the first parameter.
// set timeout takes the wait time for the function as a second parameter

// Asynchronous code

setTimeout(() => {
  console.log("hello");
}, 2000);
// console.log("statement written after set timeout");

/* if we notice, the console statement will execute first and then the setTimeout will execute.
What happens here is that setTimeout does not pause the execution but rather sets a timer and immediately goes to the next line to execute other code. This is why it is called asynchronous code.

Async code: the code will not wait for the current line to finish execution and go to other lines.
Synchronous code: the code will wait current line to finish its execution before moving to the next line.

Async code is basically like a background timer. it will not interfere with your current tasks
*/

// setInterval()
// it takes same to parameters as set timeout. a function we want to execute in future and a timer
// But setInterval will keep playing the function every 3 seconds.
setInterval(() => {
  console.log("set interval code");
}, 3000);
