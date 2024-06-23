let A = [10,20,30,40,50]
let newArray = [1,2,3,4,5]
console.log("A : ",A)
console.log("Type A : ",typeof A)

let B = A.toString()
console.log("B : ",B)
console.log("Type B : ",typeof B)

let C = A.join("_")
console.log("C : ",C)
console.log("Type C : ",typeof C)

let num1 = A.pop(); //Removes last element of Array
console.log("updated Array : ",A)
console.log("Deleted element : ",num1)

A.push(50)  //Add element at the end of Array
console.log("updated Array : ",A)

let num2 = A.shift()//Removes first element from Array
console.log("updated Array : ",A)
console.log("deleted element : ",num2)

A.unshift(10) // Add first element in Array
console.log("updated Array : ",A)

let Z = A.concat(newArray)  //Adding two Arrays 
console.log("concat Array : ",Z)

let P = [11,12,13,14,15]
console.log("Before deleting : ",P)
console.log("Length : ",P.length)
delete P[0] 
console.log("After deleting : ",P)
console.log("Length : ",P.length)

let R = [45,23,7,23,94,35,98]
let compare = (a,b)=>{
    return a-b
}
R.sort(compare)
console.log("Sorted Array : ",R)
R.reverse()
console.log("Revese Array : ",R)

let Q = [1,2,3,4,5]
Q.splice(3,2,11111,2222)
console.log(Q)

let i = [2,34,5,4,3,6]
let d = i.slice(2)
console.log(d)
let e = i.slice(2,4)
console.log(e)

