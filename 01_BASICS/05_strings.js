const name = "Meowth"
const repoCount = 50

// Not recommended syntax
// console.log(name + repoCount + " Value") //Meowth50 Value

// using backticks use we can do string interpolation 
// here we make placeholders to inject any variable `` here

console.log(`Hello my name is ${name} and my repo count us ${repoCount}`);
// can also use methods
console.log(`Hello my name is ${name.toUpperCase()} and my repo count us ${repoCount}`);

//Another way to declare a String
// using new keyword
const gameName = new String('bayleafbay')
console.log(gameName[0]); //b
console.log(gameName[3]); //

//Methods using
console.log(gameName.__proto__); //{} object

//length
console.log(gameName.length); //10

//proto methods
console.log(gameName.toUpperCase()); //BAYLEAFBAY // this does not change original string

console.log(gameName.charAt(4)); // e
console.log(gameName.indexOf('f')); //6

const pokename = new String('char-lizard')
//in substring cannot give negative values
const newString = pokename.substring(0, 4) //(start, end)
console.log(newString); //char

// const anotherString = pokename.slice(0, 6)
// console.log(anotherString); //char-l

const anotherString = pokename.slice(-8, 6) 
console.log(anotherString); //r-l

//extra spaces removal of starting and ending spaces works only on whitespace characters plus line terminators
const newStringone = "    togapi    "
console.log(newStringone); //"    togapi    "
console.log(newStringone.trim()); //togapi
//other trim- trimStart() or trimEnd()

const url ="https://dopesope.com/dope%20sope"
console.log(url.replace('%20' ,'-')) //(seachvalue, replacevalue)
// https://dopesope.com/dope-sope

console.log(url.includes('gaagaagaga')) //false
console.log(url.includes('dope')) //true

//converting string into array based on -/./, any use
//split(separator, limit)
const vampireanime = new String('vanitas-no-carte')
console.log(vampireanime.split('-'));
//[ 'vanitas', 'no', 'carte' ]

//===IMP===
//use backticks `` syntax
//learn more string methods mdn