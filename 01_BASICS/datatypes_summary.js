/* Data Types is of 2 types on the basis of how data is stored in memory and how accessed
1.Primitive 
2. Non Primitive (Reference Types) */

// Primitive (Call By value)
//7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// Reference (Non Primitive)
// Array, Objects, Functions

//************Primitive**************
// JS is dynamically Typed as no need to declare dataypes while assigning values
// const score = 100 // number
// const scoreValue = 100.3 // a number too
// const isLoggedIn = false
const outsideTemp = null
// let userEmail; //can also //let userEmail = undefined

//Declaring a Symbol
const id = Symbol('123')
const anotherid = Symbol('123')
// both are different because symbol make them unique

console.log(id === anotherid); //false

//bigint use by placing n at last
const bigNumber = 345678890465556454n

//**************Non Primitive****************
const heros = ["ironman", "hulk", "thor", "black widow"] // array

//objects - are in curly braces{key:value} pairs
let myObj =
{
    name: "Ash",
    age: 22,
}

//function
// function(){}
const myFunction = function(){
    console.log("Hello world");
    
}
console.log(typeof bigNumber); //bigint
console.log(typeof myFunction); //function
console.log(typeof outsideTemp); //object but this is null 
console.log(typeof heros); // object
console.log(typeof anotherid); //symbol


// All datatype of non primitive is object , incase of function it is called function-object


// ++++++++++     stack and heap memory   ++++++++++++++++

// Stack (Primitive) , Heap (Non - Primitive) 
//Stack
let ashPokemon = "Greninja"

let ashstrongest = ashPokemon
ashstrongest = "Lukario"

console.log(ashstrongest); //Lukario
console.log(ashPokemon); //Greninja

//Heap
let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne
//Properties access by (.)
userTwo.email = "xzy@google.com"
console.log(userOne.email); //xyz@gmail.com
console.log(userTwo.email); //xyz@gmail.com
