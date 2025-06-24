//callback function
// const f1=()=>{
//     console.log("Bonjour")
// };
// const main =(x)=>{
//     x()
// }
// main(f1);


const add = (...args) =>{
    console.log(args)
}
add(4,5,6,7,8)