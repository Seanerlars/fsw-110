// main.js

// this window

// const that = this; // this within no closure refers to the global window object in the browser
// console.log(that);

// console.log(window.document)

// const myGreeting = document.getElementById('greeting');

// console.log(myGreeting);

// const greetignArr = document.getElementsByClassName('example')

// console.log(greetignArr[1]);

const greetingArr = ['hello', 'goodbye', 'aloha', 4, true]

const firstGreeting = document.createElement('li');

document.getElementById('greeting').appendChild(firstGreeting);


const firstList = document.getElementById('greeting').firstChild

firstList.innerHTML = greetingArr[0];


