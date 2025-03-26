// there are 2 methods to declare an object - 
//1. as literals
//2. as constructor(singleton)
    // Object.create //constructor method

// Make an object
// {key:value} pairs

//symbol declare
const mySym = Symbol("key1")

const JSuser = {
    name: "Lovely",
    "full name": "Lovely Sharma",
    [mySym]: "mykey1", //putting symbol in a object(interview ques)
    age: 18,
    location: "Delhi",
    email: "abcdef@hgmail.com",
    isloggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// access ways+++++++++++++++++

// can be accessed this way but dont use like this
// console.log(JSuser.email); //abcdef@hgmail.com

// console.log(JSuser["email"]); //good way
// console.log(JSuser["full name"]); //Lovely Sharma
// console.log(JSuser[mySym]); //mykey1 symbol 


//change
JSuser.email = "xyz@gmail.com"

// Freeze the object
// Object.freeze(JSuser)
JSuser.email = "eeeee@gmail.com"
// console.log(JSuser); //No changed in object after freezing it
//symbol
/*{
  name: 'Lovely',
  'full name': 'Lovely Sharma',
  age: 18,
  location: 'Delhi',
  email: 'xyz@gmail.com',
  isloggedIn: false,
  lastLoginDays: [ 'Monday', 'Saturday' ],
  [Symbol(key1)]: 'mykey1'
}*/

// Inserting Function to JSuser object
JSuser.greeting = function(){
    console.log("Hello JS user");   
}

// console.log(JSuser.greeting()); //undefined
// console.log(JSuser.greeting); //[Function (anonymous)]

// interpolation `` and write variable in ${}
JSuser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JSuser.greeting()); //Hello JS user
console.log(JSuser.greetingTwo()); //Hello JS user, Lovely
