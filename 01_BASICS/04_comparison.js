// answer is in boolean
// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// Different Datatypes
// console.log("2" > 1); // true //as 2 is coverted to number 
// console.log("02" > 1); // true // as 02 is coverted to number

//--------
console.log(null > 0); //false
console.log(null == 0); //false //not conversion here
console.log(null >= 0); //true

// The reason is that an equality check == and comparisons > < >= <= works differently.
// Comparions convert null to a number, treating it as 0.
// That's why null >= 0 is true and null > 0 is false


//---------
// In Case of Undefined false
console.log(undefined == 0);//False
console.log(undefined > 0); //False
console.log(undefined < 0); //False

// ******Thus avoid the converisons of null and undefined usually******

//--------
// Strict check = check values + datatypes
console.log("2" === 2); // false

console.log("2" == 2); // true as only check value

