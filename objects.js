// const mySymbol = Symbol("key1")
// const user = {
//     name : "lakshay",
//     age : 20 ,
//     location : "bundi" ,
//     email : "lakshay.com",
//     isLoggedIn : false , 
//     lastLogin : ["monday" , "tuesday"],
//     [mySymbol] : "mykey1"
// }
// console.log(user.email)  
// console.log(user["email"])  
// console.log(user[mySymbol])
// console.log(typeof user[mySymbol])
// // Object.freeze(user)
// user.email = "lakshay@newemail";
// console.log(user.email);

// user.greetings = function(){
//     console.log("namaste user")
// }
// console.log(user.greetings)
// console.log(user.greetings())

// user.greetingsTwo = function(){
// console.log(`hello user two , ${this.name}`)}
// console.log(user.greetings())
// console.log(user.greetingsTwo())

//-----------------------------------------------

// const instaUser = new Object()
const instaUser = {}
instaUser.id = "123Abc"
instaUser.name= "anyone"
instaUser.isLoggedIn = false
// console.log(instaUser)

const regularUser = {
    email : "abc@gmail.com",
    fullname : {
        userfullname : {
            firstname : "lakshay",
            lastname : "aseri"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname) 
const obj1 = {1:"A" , 2:"B"}
const obj2 = {3:"C" , 4 :"D"}
const obj3 = Object.assign({} , obj1 , obj2)
// console.log(obj3);
const obj4 = {...obj1 , ...obj2}
// console.log(obj4)
console.log(instaUser)
console.log(Object.keys(instaUser))
console.log(Object.values(instaUser))
console.log(Object.entries(instaUser))
console.log(instaUser.hasOwnProperty("email"))
console.log(instaUser.hasOwnProperty("name"))
//----------------------------------------------------------

const course = {
    coursename : "js in hindi",
    courseprice : 999,
    courseinstructor : "lakshay"
}

const {courseinstructor} = course
console.log(courseinstructor)
