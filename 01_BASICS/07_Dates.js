// Dates

let myDate = new Date()
// console.log(myDate);  // 2025-03-25T14:00:39.692Z

// console.log(myDate.toString());   // Tue Mar 25 2025 14:18:47 GMT+0000 (Coordinated Universal Time)

// More Methods to discover
// console.log(myDate.toDateString());       //Tue Mar 25 2025
// console.log(myDate.toLocaleString());     //3/25/2025, 2:24:17 PM
// console.log(myDate.toISOString());        //2025-03-25T14:22:12.227Z
// console.log(myDate.toJSON());             //2025-03-25T14:22:12.227Z
// console.log(myDate.toLocaleDateString()); //3/25/2025

// interview ques
// console.log(typeof myDate); //object

// Methods to declare dates
// Month start from 0 in JavaScript 0-Jan
let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate);                 //2023-01-23T00:00:00.000Z
// console.log(myCreatedDate.toDateString());  //Mon Jan 23 2023

let anotherDate = new Date(2023, 0, 23, 5, 6)
// console.log(anotherDate.toLocaleString());   //1/23/2023, 5:06:00 AM

let moreDate = new Date("2023-01-14")
// console.log(moreDate.toLocaleString());      //1/14/2023, 12:00:00 AM

//In India we do ("25-03-2025") format

let myTimeStamp = Date.now()
console.log(myTimeStamp); //longdigits in miliseconds //1742913841935

// To compare dates while making quiz who give fasted answer we do convert both into milisec then compare
console.log(moreDate.getTime()); //1673654400000

// convert milisec to sec
console.log(Date.now()/1000); //1742914236.017 here we can decimal value to avoid this

console.log(Math.floor(Date.now()/1000)); //1742915064

let newDate = new Date()
console.log(newDate);            //2025-03-25T15:10:41.549Z
console.log(newDate.getMonth()); //2 as month starts from zero
console.log(newDate.getFullYear()); //2025
console.log(newDate.getDay());   //2 as mon tue

// Get exact Month
console.log(newDate.getMonth() + 1); //3

// Using String Interpolation
// `${newDate.getDay()} and the time `

//+++++++++++++++++ IMPORTANT +++++++++++++++++
// Parameters supports locales and options)
//  Intl.DateTimeFormat
newDate.toLocaleDateString('default', {
    weekday: "long",
})



