// for all loop doesnt work on objects 
// forin loop used
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}
// syntax
for (const key in myObject) {
//   console.log(key);
  console.log(`${key} shortcut is for ${ myObject[key]}`);
  
}

// does it work on array
const programming =["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
    // console.log(key);
    console.log(programming[key]);
    
}//only keys= index of array is obtained in output
// line 19
// 0 
// 1
// 2
// 3
// 4
// line 20
// js
// rb
// py
// java
// cpp