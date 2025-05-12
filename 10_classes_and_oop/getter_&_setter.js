class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password = value.toUpperCase()
    }

    // get password(){
    //     return `${this._password}hitesh`
    // }

    // set password(value){
    //     this._password = value
    // }


    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
}

const lov = new User("luv@Gamepad.vom", "123")
console.log(lov.password);


// setter always return, getter never return