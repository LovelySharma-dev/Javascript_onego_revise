//Not declaring explicitly
const score = 400
// console.log(score); //400

//Declaring Explicitly
const balance = new Number(100)
// console.log(balance); //[Number: 100]

/* NUMBER METHODS
toString()	     Returns a number as a string
toExponential()	 Returns a number written in exponential notation
toFixed()	     Returns a number written with a number of decimals
toPrecision()	 Returns a number written with a specified length
valueOf()	     Returns a number as a number
*/
// console.log(balance.toString()); //100
// console.log(balance.toString().length); //3 as 100 have 3 character
// console.log(balance.toFixed(2)); //100.00

const otherNumber = 23.8966
// console.log(otherNumber.toPrecision(3)); //23.9

const num2 = 123.8966
// console.log(num2.toPrecision(3)); //124 as only 3 digits allowed

const num3 = 1123.8966
// console.log(num3.toPrecision(3)); //1.12e+3
// console.log(num3.toPrecision(4)); //1124

// commas like in money
const hundreds = 1000000
// console.log(hundreds.toLocaleString()); //1,000,000 US standards of writing

// console.log(hundreds.toLocaleString('en-IN')) //10,00,000 India standard of writing


// ++++++++++++++++++++++++  MATHS  +++++++++++++++++++++++
//BY DEFAULT WE GET MATHS LIBRARY WITH JS

console.log(Math); //Object [Math] {}

//Examples

// abs- absolute - do negative to positive values
console.log(Math.abs(-4)); //4

console.log(Math.round(4.3)); // 4
console.log(Math.round(4.7)); // 5

// top value Round off
console.log(Math.ceil(4.2)); //5
// bottom value Round off
console.log(Math.floor(4.6)); //4

//More methods - sqrt, pow

console.log(Math.min(4, 3, 6, 9, 1.2)); //1.2
console.log(Math.max(4, 3, 6, 9, 1.2)); //9


// +++++++++++++++ IMPORTANT ++++++++++++++++
console.log(Math.random()); // Always get a random value between 0 to 1
// like 0.0741165220359197

console.log(Math.random()*10); // decimal shifted one position

// if random value is start like 0.041 then to avoid shifting 0 we add 1 to value
console.log((Math.random()*10) + 1); //6.90.... its like a guarantee that minimum value is 1 not 0
console.log((Math.floor(Math.random()*10) + 1)); 

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);

/*
Step by step:

Math.random() → gives a random number between 0 (inclusive) and 1 (exclusive). Example: 0.57.

Math.random() * (max - min + 1)

(max - min + 1) → 20 - 10 + 1 = 11.

So now it’s a random number between 0 and 11 (not including 11).

Math.floor(...) → rounds the number down to the nearest whole number.
Example: 7.89 becomes 7.

→ Now we have an integer between 0 and 10.

+ min → shifts the range up so it starts at 10 instead of 0.

→ Final result: a random integer between 10 and 20 (inclusive). */
