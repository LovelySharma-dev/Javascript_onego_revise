const accountId = 12345
let accountEmail = "sunflower@google.com"
var accountPassword ="2222"
accountCity = "Delhi"

let accountState;
// no value assigned per isko console kra de value dekh rhi hu   - jo ki "undefined h"

// accountId = 2  
//not allowed const variable values cannot be changed

accountEmail = "rosemary@hd.com"
accountPassword = "33332323"
accountCity = "Noida"

console.log(accountId);
console.table([accountId,accountEmail, accountPassword,accountCity, accountState])

/*
prefer not to use var because of issuse in block scope and functional scope 
*/