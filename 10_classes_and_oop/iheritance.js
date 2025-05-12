class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username) //imp
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const toffee = new Teacher("love", "love@gm.com", "123")

toffee.addCourse()
toffee.logMe()

const candyy = new User("doremon")
candyy.logMe()

console.log(toffee === candyy);//false
console.log(toffee === Teacher);//false

console.log(toffee instanceof Teacher);//true

console.log(chai instanceof User);//true