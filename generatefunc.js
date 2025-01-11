function generateRandom(){
    return Math.random()
}
function multiply(a,b){
    return a*b
}
function person(fname,lname){
    return "Fullname: " +fname+" "+lname
}
export{
    generateRandom,multiply,person
}