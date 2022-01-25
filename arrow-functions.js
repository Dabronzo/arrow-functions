/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function

function addTwoNumbers(a, b){
    //code-block
    return a + b;
}

let sum = addTwoNumbers(4, 5);
console.log(sum)

// Arrow Function With Parameters
const addTwoNumbersArrow = (a, b) => {
    //code-block
    return a + b;
}

let sum2 = addTwoNumbersArrow(4, 5);
console.log(sum2)

// Single Line Arrow Function With Parameters

const addTwoNumbersArrowLine = (a, b) => a + b;
let sum3 = addTwoNumbersArrowLine(4, 5);
console.log(sum3);

// Implicit Returns
// If there is only one parameter dose not need ()
const saySomething = message => console.log(message);

//saySomething("Hello World");

//If has no parameters needs a empty ()

const sayHello = () => console.log("Hello!");

//sayHello();

// Returning Multiple Lines
const returnMultipleLines = () =>(
    `<p>
    Hello Sir
    </p>`
)

//console.log(returnMultipleLines());