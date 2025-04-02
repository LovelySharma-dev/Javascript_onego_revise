// array.forEach(element => {
    
// });
const coding = ["js", "ruby", "java", "c++"]
// coding.forEach(function (val) {
//     console.log(item);
    
// });
coding.forEach(item => {
    // console.log(item);   
});

// function printme(item) {
//     // console.log(item);
// }

// coding.forEach(printme)
coding.forEach((item, index, arr)=> {
    // console.log(item, index, arr);
    
})
// js 0 [ 'js', 'ruby', 'java', 'c++' ]
// ruby 1 [ 'js', 'ruby', 'java', 'c++' ]
// java 2 [ 'js', 'ruby', 'java', 'c++' ]
// c++ 3 [ 'js', 'ruby', 'java', 'c++' ]


// object in array
const myCoding = [
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "python"
    },
    {
        languageName: "ruby",
        languageFileName: "ruby"
    },
]
myCoding.forEach( item => {
    console.log(item.languageName);
    
})
// java
// python
// ruby