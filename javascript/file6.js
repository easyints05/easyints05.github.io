//arrow function
// greet(); //hoisting
// function greet(){
//     console.log("Hello");
// }

const greet =() => {
    console.log("Hello")};
    greet()


//hoisting does not work with arrow functions
const greet2 = ()=> {console.log("Hello2")}
greet2()

// const add =(a,b) =>{
//     console.log(a+b)
// }
// add(4,5)

const add =(a,b) =>{
    return a+b
}
const result = add(4,5)
console.log(result)


// //hoisting
// x =10
// console.log(x)
// let x 
