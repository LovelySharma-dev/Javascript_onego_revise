// for loop syntax
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

for(let index = 0; index < 10; index++ ){
    const element = index;
    if (element == 5){
        // console.log("% is best number");
        
    }
    // console.log(element);
}

for (let i = 1; i <= 10; i++){
    // console.log(`Outer loop value ${i}`);
    
    for (let j = 0; j <= 10; j++) {
    // console.log(`Inner loop value ${j} and inner loop ${i}`); 
    // console.log(i + '*' + j + ' = ' + i*j );
    
    }
}// the sequence in which loops are written work in that sequence only


let myArray = ["Flash" , "Batman", "superman"]
// console.log(myArray.length);

for(let index = 0; index < myArray.length; index++){
    const element = myArray[index];
    // console.log(element);
}
// 3
// Flash
// Batman
// superman


// ------------- Break and continue ---------------

// for(let index = 1; index <= 20; index++){
//     if( index == 5){
//         console.log(`Detected 5`);
//         break;    
//     }
//     console.log(`Value of i is ${index}`);   
// }
// break when condition match no further printing


for(let index = 1; index <= 20; index++){
    if( index == 5){
        console.log(`Detected 5`);
        continue;    
    }
    console.log(`Value of i is ${index}`);   
}
// that condition will be skiped and rest will be printed of loop

