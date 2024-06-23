//basic for loop
console.log("Array using normal for loop : ")
let A = [1, 2, 3, 4, 5]
for (let i = 0; i < A.length; i++) {
    console.log(A[i])
}
//forEach loop
console.log("using forEach loop : ")
A.forEach((element) => {
    console.log(element)
}
)
//for.... of loop
console.log("Array using for..of loop : ")
for (let i of A) {
    console.log(i)
}
//for in loop
console.log("Array using for...in loop : ")
for (let item in A) {
    console.log(A[item] + " : " + item)
}
//map loop
console.log("Array using map loop : ")
let k = [1, 2, 3, 4, 5]
let kArray = k.map((item) => {
    // console.log(item)
    return item
})
console.log(kArray)
//filter loop
console.log("Array using filer loop : ")
let f = [1, 2, 3, 4, 5]
let fArray = f.filter((fe) => {
    return fe
})
console.log(fArray)
//reduce loop
console.log("Array using reduce loop : ")
let g = [1, 2, 3, 4, 5]
let gArray = g.reduce((x, y) => {
    return x + y
})
console.log(gArray)