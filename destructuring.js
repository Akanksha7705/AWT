//Array destructuring
let arr=[1,2,3,4]
var [a,b,c]=arr
console.log("array: "+arr)
console.log("a: "+a)

//object destructuring
const person = {
    fName: "ABC",
    lName: "cvr",
    age: 50
  }
  
  
let {fName, lastName,age} = person
console.log(fName)