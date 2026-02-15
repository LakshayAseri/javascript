const user = {
    username : "lakshay",
    price : 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`)
        // console.log(this)
    }
}
user.welcomeMessage()
// user.username = "ramesh"
// user.welcomeMessage()
// console.log(this)

// function some(){
//     let username = "jkl"
//     console.log(this.username);
// }
const some = ()=>{
    let username = "jkl"
    console.log(this)
}
some()
const add = (num1 , num2)=>{
   return num1 + num2;
}
const add1 = (n1,n2) => (n1+n2)
console.log(add(2,3))
console.log(add1(2,3))