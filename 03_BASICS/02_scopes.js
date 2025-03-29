// {} scope 
// var c = 300 //outside if is global scope
let a = 300
if (true) { //inside if is block scope
    let a = 10
    const b = 20
    // console.log("INNER: ", a);   
    // var c = 30
}

// for (let i = 0; i < Array.length; i++){
//     const element = Array[i];
// }

// console.log(a);
// console.log(b);
// console.log(c); //
// The in Node environment is differnt than scope in browser console

// Nested Scope - child can access the parent
function one(){
    const username = "Lovely"

    function two(){
        const website = "Youtube"
        // console.log(username);
    }
    // console.log(website);error
    two()
}
one()
if (true) {
    const username = "Theo"
    if (username === "Theo"){
        const website = " youtube"
        // console.log(username + website);
        
    }
    // console.log(website); error
}
// console.log(username); error

// +++++++++++++++++  interesting ++++++++++++++++++

console.log(addone(5)) // also write at top of function

function addone(num){
    return num + 1
}

// addTwo(5) //but cannot write addTwo at top of function as here we have not only declared it but also hold it inside an variable.
const addTwo = function(num){
    return num + 2
}
// addTwo(5)
// === hoisting is the reason
