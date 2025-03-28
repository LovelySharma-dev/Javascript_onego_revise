// Print ur name 5 times

// Defination
function saymy_name(){   
    console.log("L");
    console.log("S");
}
// saymy_name() //execution //output- L S


// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }
// addTwoNumbers(3, 7) //10
// addTwoNumbers(3, "4") //37
// addTwoNumbers(3, "a") //3a
// addTwoNumbers(3, null) //3

// const result = addTwoNumbers(3, 5) //8
// console.log("Result: ", result);  //Result:  undefined

function addTwoNumbers(number1, number2){
    let result = number1 + number2
    // console.log("Love"); 
    // return result //after writing return nothing will work example console in next line will not work as this is in function rules

    // another way to return 
    return number1 + number2
}
const result = addTwoNumbers(3, 5)
// console.log("Result: ", result);


function loginUserMessage(username){
    return `${username} just logged in`
}
console.log(loginUserMessage("Lovely")) //Lovely just logged in

// if no argument is passed in then we get Undefined
console.log(loginUserMessage()); //undefined just logged in


// ++++++++++++++++++
//To ensure that arguments are provided we sometimes use if else statements
// function logkouserko(uname){
//     if(uname === undefined){
//         console.log("Please enter a username"); 
//         return // if we want that below return code line never run
//     }
//     return `${uname} abhi login kiya`
// }
// console.log(logkouserko());

// if(!uname) another syntax to write

// We can also give default values by directly in the parameters
// then ww will not move into the next function block and this value can also be overridden by passing value in arguments

// example
function logkouserko(uname = "sam"){
    if(uname === undefined){
        console.log("Please enter a username"); 
        return // if we want that below return code line never run
    }
    return `${uname} abhi login kiya`
}
// console.log(logkouserko("lovely")); //lovely abhi login kiyar

// +++++++++++++++++++++++++++++++

// IF multiple values in argument then only 1st one is printed if ... rest operator is not used

// function calculateCartPrice(...num1){
//     return num1
// }
// console.log(calculateCartPrice(200, 400, 500, 100)) //[ 200, 400, 500, 100 ]

function calculateCartPrice(val1, val2, ...num1){
    return num1
}
console.log(calculateCartPrice(200, 400, 500, 100)) //[ 500, 100 ]

//how an object is passed in an function and used

const user = {
    user_name: "lovely",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.user_name} and price is ${anyobject.price}`);
    
}
// handleObject(user) //Username is lovely and price is 199

// Another way
handleObject({
    user_name: "sam",
    price: 299 
})//Username is sam and price is 299

// Array passing in function
const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000])); //400
