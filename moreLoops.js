// // const arr = [1,2,3,5,4];
// // for(const num of arr){
// //     console.log(num);
// // }
// // const greetings = "namsate";
// // for(const greet of greetings){
// //     console.log(`${greet}`)
// // }

// // const countryName = new Map();
// // countryName.set('IN' , "India")
// // countryName.set('ENG' , "England")
// // countryName.set('PAK' , "Pakistan")

// // console.log(countryName)

// // for(const name of countryName){
// //     console.log(name);
// // }
// // for(const [name] of countryName){
// //     console.log(name)
// // }

// // const myObj = {
// //     'game1' : 'NFS',
// //     'game2' : 'spiderman'
// // }
// // for(const game of myObj){
// //     console.log(game);
// // }

// //forin loop
// // const lang = {
// //     'cpp' : 'c++',
// //     'js': 'javascript',
// //     'rb' : 'ruby'
// // }

// // for(const key in lang){
// //     console.log(key);
// // }

// // const programming = ["js" , "java" , "cpp"];
// // for(const key in programming){
// //     console.log(key)
// //     console.log(programming[1])
// // }

// const coding = ["js" , "java" , "Cpp"]
// coding.forEach(function(val){
//     console.log(val)
// })

// coding.forEach((value)=>{
//     console.log(value)
// })

// const myCoding = [
//     {languagename : "javascript",
//         languagefilename : "js"
//     },
//     {
//         languagename : "python",
//         languagefilename : "py"
//     }
// ]
// myCoding.forEach((item)=>{
//     console.log(item.languagefilename)
//     console.log(item.languagename)
// })

//filter...................................
const myNums = [1,2,3,4,5,6,7,8,9,10]
const newNums = myNums.filter((num)=>num>4)
console.log(newNums)
               