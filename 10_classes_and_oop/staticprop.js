class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
        
    }

    static createID(){
        return `123`
    }
}

const love = new User("Lovee")
// console.log(love.createID())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
// console.log(iphone.createId()); //error


// The static keyword in JavaScript defines static methods or properties for a class. Static members belong to the class itself rather than to instances of the class. They are accessed directly using the class name, without creating an object.