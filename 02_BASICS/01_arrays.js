// array in [] and have elements indexing from 0
// JavaScript arrays are resizable and can contain a mix of different dataypes
// ++++JavaScript array-copy operations create shallow copies

//A shallow copy of an object is a copy whose properties share the same refernces (point to the same underlying values ) as those of the source object from which the copy was made.

// Deep copy- properties do not share the same reference

const myArr = [0, 1, 2, 3, 4, 5]
//acces values
// console.log(myArr[0]);
// console.log(myArr"one"); not allowed

// More ways to declare an array
const heros = ["ironman", "thor", "hulk"]
const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[0]); //0

// Array Methods
// myArr.push(6)
// console.log(myArr); 
/*  [
    0, 1, 2, 3,
    4, 5, 6
  ] */
// myArr.push(7)
// myArr.pop() //remove last value

// myArr.unshift(10) //inserted at start of array
// myArr.shift() //removed from start

// Asking ques from array using methods
// console.log(myArr.includes(9)); //false
// console.log(myArr.indexOf(9)); //-1 as 9 is not in array

const newArr = myArr.join() //array into a string
// console.log(myArr);
// console.log(newArr); //0,1,2,3,4,5,6
// console.log(typeof newArr); //string

// slice(returs a copy of section of array) , splice

console.log("A" , myArr); //A [ 0, 1, 2, 3, 4, 5 ]
const myn1 = myArr.slice(1, 3)

console.log(myn1); //[ 1, 2 ]
console.log("B" , myArr); //B [ 0, 1, 2, 3, 4, 5 ]

// Splice manipulates original array and includes range element too
// Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements

const myn2 = myArr.splice(1, 3)
console.log("C" , myArr); // C [ 0, 4, 5 ]
console.log(myn2); //[ 1, 2, 3 ]
