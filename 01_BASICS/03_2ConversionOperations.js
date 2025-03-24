// ************************** Operations ***************************

let value = 3
let negValue = -value
// console.log(negValue); // -3

// console.log(2+2); //4
// console.log(2-2); //0
// console.log(2*2); //4
// console.log(2/2); //1
// console.log(2**2); //4
// console.log(2%2); //0

//Addig 1 strings by +
let str1 = "Hello"
let str2 = " Pikachu"

let str3 = str1 + str2
// console.log(str3); // Hello Pikachu

//Complex situations
// console.log("1" + 2); //12
// console.log(1 + "2"); // 12
// console.log("1" + "2"); // 12

//more interesting - agar string at 1st then numbers are not added
// console.log("1"+ 2 + 2); //122
//but agar string at last then numbers are calculated 1st 
// console.log(1 + 2 + "2"); //32

// write like this by using () this is best practice
// console.log( (3 + 4) * 5 % 3); //2

// + likhne se converison hota h
// console.log(true); // true
// console.log(+true); //bad practice to write like this //output = 1
// console.log(""); //1
// console.log(+""); //0 still not preferred way

// more bad ways
let num1, num2, num3
num1 = num2 = num3 = 2 + 2

// Postfix and Prefix
let gameCounter = 100
++gameCounter; // 101
// gameCounter++; // 101

//prefix value phele immplement
// posfix value baad m implement
console.log(gameCounter);






