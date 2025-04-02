// Array.reduce()
const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currentVal) {
//     console.log(`acc: ${acc} and currentValue: ${currentVal}`);
//     return acc + currentVal
// }, 0 ) //0 is acc (accumulator start value is 0)

// console.log(myTotal); //6
// acc: 0 and currentValue: 1
// acc: 1 and currentValue: 2
// acc: 3 and currentValue: 3

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)
// console.log(myTotal); //6 using arrow function

const shopchart = [
    {
        itemName: "Js course",
        price: 2999
    },
    {
        itemName: "Python",
        price: 1999
    },
    {
        itemName: "Java course",
        price: 3999
    },
    {
        itemName: "C++ course",
        price: 1999
    },
]
const pricetopay = shopchart.reduce((acc, item) =>acc + item.
price, 0)
console.log(pricetopay); //10996
