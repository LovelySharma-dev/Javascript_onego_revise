// EC6
// Making class
// class User{
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password} abc`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const toffee = new User("lov", "lov@fb.com", "123")

// console.log(toffee.encryptPassword()); //123 abc
// console.log(toffee.changeUsername()); //LOV

// behind the scence

function User(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}


User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());