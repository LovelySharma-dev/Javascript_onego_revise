// Why unable to change value 
// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const descripterr = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descripterr);

// const MynewObj = Object.create(null)

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));


// Object.defineProperty(chai, 'name', {
//     writable: false,
//     enumerable: true,
    
// })

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') { //nhi kra toh code blast
        
        console.log(`${key} : ${value}`);
    }
}