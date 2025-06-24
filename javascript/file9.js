//arrays

// const score =[2,1,7,5,3];
// console.log(score)
// console.log(score[0])
// score.push(9)
// console.log(score)
// console.log(score.length)
// const score1=[7,1,9]
// const newScore =[...score,9]

// console.log(newScore)

// const cart ={
//     1: 5,
//     5: 3,
// };
// const newCart =({...cart,2:1})
// console.log(newCart)

// let cart={};
// const products =[
//     {id : 1, name : "Product1", price: 25},
//     {id : 2, name : "Product2", price: 15},
//     {id : 3, name : "Product3", price: 30},
// ];
// // console.log(products[0])

// function addToCart(id) {
//     cart = {...cart, [id]:1};
// }
// //const newProducts = [...products, {id: 4, name: "Product4", price: 20}]

// addToCart(1)
// addToCart(3)
// console.log(cart)


// const score=[2,1,7,5,3];
// score.forEach((a,b,c)=>{
//     console.log(c[b]);
// });



//map is created to use to a new array based on existing value 
// score.map((value)=>{
//     console.log(value);
// });

// const score=[2,1,7,5,3];
// const newScore= score.map((value)=>{
//     return value>2
// });
// console.log(newScore);

// const score=[2,1,7,5,3];
// const newScore= score.filter((value)=>{
//     return sum + value 
// },0);
// console.log(newScore);


const score=[2,1,7,5,3];
// const newScore= score.reduce((sum,value)=>sum + value,0)
// console.log(newScore);

const newScore= score.find((value)=>value === 9);
console.log(newScore);


