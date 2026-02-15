let mydate = new Date()
console.log(mydate)
console.log(mydate.toDateString())
console.log(mydate.toLocaleDateString())
console.log(mydate.toLocaleString())
console.log(typeof mydate)
// let newdate = new Date(2023 , 0 , 23)
let newdate = new Date(2023 , 0 , 23 )
console.log(newdate.toDateString()) 
       
let myTimeStamp = Date.now()
console.log(myTimeStamp);                    
console.log(Math.round(Date.now() / 1000));
                    