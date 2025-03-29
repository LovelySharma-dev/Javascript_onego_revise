const user = {
    username: "RRR",
    price: 299,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
        
    }
}//this. keyword used to specify current context
// user.welcomeMessage()
// user.username = "Satvi"
// user.welcomeMessage()

// console.log(this); //in node environment {} empty if no context


// ++++++ in browser the global object is window object +++++++

// this context only valid in object , in function we cannot use this
// function tea() {
//     // let uname = "love"
//     // console.log(this);
//     console.log(this.username); //undefined
// }
// tea()

// const tea = function(){
//     let user = "Lovely"
//     console.log(this.user); //undefined
// }
// tea()


// ________ ARROW METHOD ___________ functtion is removed and after () => is placed
const tea = () => {
    let user = "Lovely"
    console.log(this.user); //undefined
}
tea()

// () => {}
// Basic arrow function usage 
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3, 4))

// Implicit return arrow function usage
// const addTwo = (num1, num2) =>  num1 + num2

// if wrap in {} have to write return 
// if using arrow then use () in return 
const addTwo = (num1, num2) =>  ( num1 + num2 )

// another way
// const addTwo = (num1, num2) => ({username: "biba"})
console.log(addTwo(3, 4)) //7  //{ username: 'biba' }




//__++++++++++++++talk later
// const myArray = [2, 5, 3, 7, 8]
// myArray.forEach(() => ({}))