// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

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
    
})//direct connection with resolve
