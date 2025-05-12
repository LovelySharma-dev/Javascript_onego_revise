// let myName = "Love    "

// console.log(myName.truelength); //Make a method

let myHeroes = ["thor", "spiderman"]

let HeroPower ={
    thor: "hammer",
    spiderman: "sling",


    getSpiderPower: function(){
        console.log(`Spidy Power is ${this.spiderman}`);
        
    }
}

Object.prototype.love = function(){
    console.log(`Love is present in all objects`);
    
}

Array.prototype.Heylove = function(){
    console.log(`Love says hello`);
    
}

// HeroPower.love() //Love is present in all objects

myHeroes.love()
myHeroes.Heylove() //Love says hello
// HeroPower.Heylove() //error


// Inheritance
const User = {
    name: "silia",
    email: "silia@example.com"
}

const Teacher ={
    makeVideo: true
}

const TeachingSupport ={
    isAvailable: false
}

const TAsupport ={
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}
Teacher.__proto__ = User


// Modern Syntax
// Sets the prototype of a specified object o to object proto or null. Returns the object o.
Object.setPrototypeOf(TeachingSupport, Teacher)



let anotherUSERname = "Pikachuu     "

String.prototype.trueLength = function(){
    console.log(`${this}`); //Pikachuu
    // console.log(`${this.name}`); //undefined
    console.log(`True length is: ${this.trim().length}`); 
}

anotherUSERname.trueLength() // True length is: 8
"balbasaur".trueLength() // True length is: 9
"IceTea".trueLength() //True length is: 6

