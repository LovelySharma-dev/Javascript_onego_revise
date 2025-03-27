// USING CONSTRUCTORS

// const snapusers = new Object() // oneway to declare an object (singleton object)
const snapusers = {} //another way to declare an object (non singleton object)

snapusers.id = "123abc"
snapusers.name = "Snapy"
snapusers.isLoggedIn = false
// console.log(snapusers); //{ id: '123abc', name: 'Snapy', isLoggedIn: false }


const regularUser = {
    email: "some@gamil.com",
    fullname: {
        userfullname: {
            firstname: "Lovely",
            lastname: "Sharma"
        }
    }
}
// console.log(regularUser.fullname.userfullname.lastname); //Sharma //access more subobjects by .

// In API responses use this syntax
// console.log(regularUser.fullname?.userfullname.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = { obj1, obj2 }
// console.log(obj3); //object inside another object //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj3 = Object.assign({}, obj1, obj2) //right way to assign obj
// console.log(obj3);

// Most used way
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// Inside an array there are many objects
const users = [
    {
        id: 1,
        email: "ninjahatori@gmail.com"
    },
    {
        id: 1,
        email: "ninjahatori@gmail.com"
    },
    {
        id: 1,
        email: "ninjahatori@gmail.com"
    },
    {
        id: 1,
        email: "ninjahatori@gmail.com"
    }
]
users[1].email
console.log(snapusers); //{ id: '123abc', name: 'Snapy', isLoggedIn: false }

// important
console.log(Object.keys(snapusers)); //[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(snapusers)); //[ '123abc', 'Snapy', false ]
console.log(Object.entries(snapusers)); //[ [ 'id', '123abc' ], [ 'name', 'Snapy' ], [ 'isLoggedIn', false ] ]


console.log(snapusers.hasOwnProperty('isLoggedIn')); //true
