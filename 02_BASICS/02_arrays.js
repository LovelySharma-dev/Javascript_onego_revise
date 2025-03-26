const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["Spermamn", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros); //[ 'thor', 'Ironman', 'spiderman', [ 'Spermamn', 'flash', 'batman' ] ]
// console.log(marvel_heros[3][1]); //flash

// const allheros = marvel_heros.concat(dc_heros)
// console.log(allheros); //[ 'thor', 'Ironman', 'spiderman', 'Spermamn', 'flash', 'batman' ]

//spread -like breaking a glass of kanch
const all_new_heros = [...marvel_heros, ...dc_heros] 
// console.log(all_new_heros); //[ 'thor', 'Ironman', 'spiderman', 'Spermamn', 'flash', 'batman' ]

// Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth. - flat(depth kitni solve krni h)

const another_array =  [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array); //[1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]


console.log(Array.isArray("lovely")) //false
console.log(Array.from("lovely")) //[ 'l', 'o', 'v', 'e', 'l', 'y' ]

// interview cases
console.log(Array.from({name: "lovely"})) //[] interesting

//make new array from set of elements - of()
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)) //[ 100, 200, 300 ]