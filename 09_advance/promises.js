// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// Promise is a OBJECT

const promiseOne = new Promise(function(resolve, reject){
    //DO an async task
    // DB calls, cryptography, network

    setTimeout(function(){
        console.log("Aysnc task is complete");
        resolve()
    }, 1000)
})
promiseOne.then(function(){
    console.log("Promise consumed");
    
})//direct connection with resolve(then)

new Promise(function(resolve, reject){

    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
    
})

const prommiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Love", email: "love@example.com"})
    }, 1000)
})
prommiseThree.then(function(user){
    console.log(user);
    
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false//true
        if(!error){
            resolve({username: "Shashi", password: "123"})
        }
        else{
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})
promiseFour
.then((user) => {
    console.log(user);
    return user.username
})
.then((username) =>{
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(() => console.log("The promise is either resolved or rejected"))


const promisefive = new Promise(function(resolve, reject){
    setTimeout(function()
    {
        let error = false
        if(!error){
            resolve({username: "niti", password: "4545"})
        }
        else{
            reject('ERROR: Something went WRONG')
        }
    })
}, 1000)

// async wait syntax
async function consumepromiseFIVE() {
    try {
        const response = await promisefive
        console.log(response);
    } catch (error) {
        console.log(error);
        
    } 
}
consumepromiseFIVE()



// async function getallusers() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         const dta = await response.json()
//         console.log(dta);
//     } catch (error) {
//         console.log("E:", error);
        
//     }
    
// }
// getallusers()


// .then().catch()--syntax

fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    return response.json()
})
.then((data)=> {
    console.log(data);  
})
.catch((error)=>{
    console.log(error)
})

// The Fetch API provides an interface for fetching resources (including across the network). It is a more powerful and flexible replacement for XMLHttpRequest.
// A fetch() promise only rejects when a network error is encountered(which is usually when there is a permission issuse or similar).
// A fetch() promise does not reject on HTTP errors(404, etc)

// More notes in notebook