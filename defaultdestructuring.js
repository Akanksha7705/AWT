//object destructuring
const person = {
    fName: "ABC",
    lName: "CVR",
    age: 50
  }

let {fName,lName} = person
console.log(fName)

//default destructuring
const persons = {
    firstName: "John",
    lastName: "Doe",
    ages: 50
  };
  
  //Assign default values 
  let {firstName, lastName, ages=20} = persons;
  console.log(ages)

