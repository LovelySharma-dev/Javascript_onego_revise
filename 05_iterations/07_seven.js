const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNumbs = myNumbers.map((num) => num + 10)
// const newNumbs = myNumbers.map((num) => {return num + 10})
// console.log(newNumbs);
// [
//     11, 12, 13, 14, 15,
//     16, 17, 18, 19, 20
// ]
// remember whenever u open an scope {} in line 2 , u have to return it

// CHAINING - when u use 2-3 methods directly , same time
const newNums = myNumbers
                .map((num) => num * 10)
                .map((num) => num + 1) // 1st value 10 as in chaining above method value is the base value for subsequent
                .filter((num) => num >= 40)
console.log(newNums);
// [
//     11, 21, 31, 41,  51,
//     61, 71, 81, 91, 101
// ] //line 14

// [
//     41, 51,  61, 71,
//     81, 91, 101
// ] //line 15