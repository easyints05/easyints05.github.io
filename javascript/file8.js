//objects
const student ={
    name : "Harsha",
    age: 22,
};
// console.log(student)
// console.log(student.name)
// console.log(student["name"])
student.city = "Amritsar"
console.log(student)
student.city = "Hyderabad"
console.log(student)

delete student.age
console.log(student)

const keys =Object.keys(student)
console.log(keys)

const values = Object.values(student)
console.log(values)

//object name is cart
//cart is an object that contains the item id as key and the quantity as value
const cart ={
    1: 5,
    3:1,
    5:2,
};
const items = Object.keys(cart)
console.log(items)
cart[3]++
console.log(cart)

cart[3]=cart[3]-1
console.log(cart)



