// Immediately Invoked Function Expressions (IIFE) and by invoking are stopped by ; termination

// Named iffe
(function chai(){
    console.log(`DB CONNECTED`);
})();
//1. () Function defination
//2. () Execution (chai)

// Sometimes global scope ke polution se problem hoti h so to remove that we used iffe

// Unnamed iffe
(() => {
    console.log(`DB connected two`);
})
();

// Parameter passed in iffe
((name) => {
    console.log(`DB connected two ${name}`);
})
("Lovely's"); //DB connected two Lovely's

// If we write two iffe's in a file - one with ; 