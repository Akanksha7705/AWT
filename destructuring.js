//Array destructuring
let arr=[1,2,3,4]
var [a,b,c]=arr
console.log("array: "+arr)
console.log("a: "+a)

//array positioning
const fruits = ["Bananas", "Oranges", "Apples", "Mangos"];
let {[2]:fruit1 ,[3]:fruit2} = fruits;
console.log(fruit1)

//using rest property
const array = [1, 2, 3, 4, 5, 6, 7];

// Destructuring
const [aa,bb, ...cc] = array
console.log(cc)//c stores all the rest values