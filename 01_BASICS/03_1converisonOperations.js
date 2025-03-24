let score = 33 // pta h value 33 h
// const {score} = req.body // value pta nhi jo hogi issme {} dalegi

console.log(typeof score);
console.log(typeof (score)); 
// both are number

let scores = "33abd"
console.log(typeof scores);
console.log(typeof (scores));
// both are string

//but you want to perform operations on numbers then 1st convert it
// let scores = "33"
// let valueInNumber = Number(scores)
// console.log(typeof scores);
//now this also a string

let valueInNumber = Number(scores)
console.log(typeof valueInNumber);
// iska type number h even if values is 33abd this JS error as it should be NaN


console.log(valueInNumber); //NaN 

// if there is null instead of 33 then output of 23 line is null

// if there is undefined instead of 33 then output of 23 is NaN 

// if there is boolean value(true/false) instead of 33 then output of line 23 is 1(true) / 0(false)

// is there is string empty "" instead of 33  then output is NaN

//summary with number
/*

"33" => 33
"33abd" => NaN
true => 1; false => 0
"" => NaN

*/

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
// output is true
// if "" (empty) is taken instead of 1 then output is false
// if "love" is taken instead of 1 then output is true

// summary in boolean
/*

1 => true; 0 => false
"" => false
"snorlax" => true

*/

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
// output is 33
console.log(typeof stringNumber);
// output is string