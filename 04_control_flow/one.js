//  Control flow in javascript
// if

// """""" This code will execute """"""
// if (true){

// }
//  """"" This code will not execute """""
// if(false){

// }
const isUserloggedIn = true

// if ( 2 === "2"){
//     console.log("Exected");
    
// }

// const temp = 41
// if( temp === 40){
//     console.log("Less than 50");  
// }
// else{
//     console.log("temperature is greater than 50");
// }
// console.log("Executionn"); //this will be executed 100% as this is outside the if-else block and with no condition


// <, >, <=, >=, ==, !=, === (check datatype also), !==(strict check, negative sign)
//'=' operator assignment 

// +++++++++ imp +++++++++

// const score = 200
// if (score > 100) {
//     const power = "fly"
//     console.log(`User power: ${power}`); //this line will only run inside the block
// }
// console.log(`User power: ${power}`); not run here becoz scope 
// but if we use var keyword in line no. 36 its scope is global it will run

// _________ short hand notations _________
const balance = 1000
// if(balance > 500) console.log("Test"); //cannot write multiple lines but by using , we can write multiple lines

// if(balance > 500) console.log("Test"), console.log("test2"); //but this is imature way dont write like this

// More testing so more test conditions
// if( balance < 500){
//     console.log("Less than");
// }
// else if( balance < 750 ){
//     console.log("less than 750");
// }
// else if (balance < 900) {
//     console.log("less than 900");
// } 
// else {
//     console.log("less than 1200");   
// }

// In real code examples
const userLoggedIn = true
const debitCard = true
const loggedInfromgoogle = false
const logginfromemail = true

// && but should be true
if(userLoggedIn && debitCard){
    console.log("Allowed to buy courses");
}
// OR either one should be true
if (loggedInfromgoogle || logginfromemail) {
    console.log("user is logged in");
}