function addition(num1 , num2){
    console.log(num1 + num2)
}
addition(2,3)
addition(2,"3")
addition(2,"a")
addition(2,null)

function login(username){
    if(username == undefined){
        console.log("please enter the username")
        return
    }
    return `${username} just looged in`
}
console.log(login("lakshay"))
console.log(login())

//-------------------------------------------------
 const user = {
    name : "lakshay",
    age : 20
 }

 function handleObject(anyObject){
    console.log(`username is ${anyObject.name} and age is ${anyObject.age}`);
 }
 console.log(handleObject(user)) 
 
 const myNewArray = [200,100,300,1000]

 function returnvalue(newArray){
    console.log(newArray[2])
 }
 console.log(returnvalue(myNewArray));