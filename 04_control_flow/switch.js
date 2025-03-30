// BASIC SYNTAX
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;

    default:
        console.log("No match");
        break;
}//March

// if we  comment one break in any case the rest of cases below it will be executed except default

// if const month = "march" then cases will be only written in string value