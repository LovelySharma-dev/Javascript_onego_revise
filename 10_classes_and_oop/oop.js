const user = {
    username: "love",
    loginCount: 8,
    signedIN: true,

    getUserdetails: function(){
        // console.log("got user details");
        // console.log(`Username: ${this.username}`);
        // console.log(this);
        
        
    }
}
// console.log(user.loginCount);
// console.log(user.getUserdetails()); 
// console.log(this);//{}

// ___________________
// Constructor function ---new keyword is a constructor function
// const promiseOne = new Promise()
// const date = new Date()

function User(username, loginCount, isloggedin){
    this.username = username //this.username ---- is the name of variable
    this.loginCount = loginCount
    this.isloggedin = isloggedin

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
        
    }
    return this
}
const UserOne = new User("lov", 123, true)
const Usertwo = new User("div", 23, false) //overwrites the UserOne ---this can be solved by using new keyword 
console.log(UserOne);
console.log(UserOne.constructor);//[Function: User]
console.log(Usertwo);

// When we use new keyword an an object is created first ,which is called instance and in case of node this is empty  (which in browser this contains window obj), generated when we write again and again new keywords empty parenthesis are generated this means  new object is created each time thus your object is created in construction function is called by new keyword it packs all the arguments inside and gives u.
// this keyword injects all the arguments
// Gives us inside the function

// 4 steps
// obj created ---->> pass on all the written inside func ---->> this created adds all arguments to it --->> gives us

// instanceof --->
// object instanceof constructor

// object
// The object to test.

// constructor
// Constructor to test against