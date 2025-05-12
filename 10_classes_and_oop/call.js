function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
    
}
function createUser(username, email, password){
    SetUsername.call(this, username)
   
    this.email = email
    this.password = password
}

const lov = new createUser("love", "love@esc.com", "123")
console.log(lov); //createUser { username: 'love', email: 'love@esc.com', password: '123' }

// Call ---Calls a method of an object, substituting another object for the current object.