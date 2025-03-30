const userEmail ="abc@yahoo.com"
// no actual comparison done here string is assumed to be true 

// If string is empty "" then else case is executed means it is considered ---> false
// if it is a empty [] array then if case executed means it is considered  ---> true

if (userEmail) {
    console.log("Got user email");
}else{
    console.log("Don't have user email");
}

// ___________ falsy Values _________
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// __________ truth values __________
// "0" , 'false', " ",[], {}, function(){}//empty function

if(userEmail.length === 0){
    console.log("Array is empty");
}//not executed as 0 is falsy

const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
    
}


// ------- IMP --------
// in browser console
// false == 0
// // true 

// false == ''
// // true

// 0 == ''
// // true

// Nullish Coalescing Operator (??): null undefined
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);
// line 43 present only value --> 5 
//line 44 present then value ---> 10
// line 45 present only value ---> 15
// line 46 then 10 value assign


// -----Ternary operatorr------
condition ? true : false
const iceTEA_available = 100
iceTEA_available >= 80 ? console.log("less than 80") : console.log("More than 80");



