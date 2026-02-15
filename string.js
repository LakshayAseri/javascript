const name = "lakshay-aseri"
const age =  20;
// console.log(name  + age + " years ")
console.log(`hello my name is ${name} and i am ${age} years old` )
console.log(name[0])
console.log(name[1])
console.log(name.length)
console.log(name.toUpperCase())
console.log(name.charAt(6))
console.log(name.indexOf('y'))
const newstr = name.substring(0,6)
console.log(newstr);
const another = name.slice(-3,6)
let str = "     hi    "
console.log(str)      

console.log(str.trim())
let url = "https://lakshay.com/lakshay%30aseri"
console.log(url.replace("%30" , "-"))
console.log(url.includes('aseri'))