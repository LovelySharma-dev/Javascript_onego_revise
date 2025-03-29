// {} scope 
// var c = 300 //outside if is global scope
let a = 300
if (true) { //inside if is block scope
    let a = 10
    const b = 20
    console.log("INNER: ", a);
    
    // var c = 30
}
// for (let i = 0; i < Array.length; i++){
//     const element = Array[i];
// }

console.log(a);
// console.log(b);
// console.log(c); //
// The in Node environment is differnt than scope in browser console
