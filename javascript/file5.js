//regular function
// function greet(){
//     console.log("Good afternoon")
// }
// greet()


//IIFE
// (function greet(){
//     console.log("Good afternoon")
// })()

// function add(a,b){
//     console.log(a+b);
// }
// add(4,5); -----9


// function add(a,b){
//    return a+b
// }
// const result = add(4,5);
// console.log(result) ----9

function add(){
  console.log(arguments[0])
}
add(5,4)