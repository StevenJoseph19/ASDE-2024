// The map() method is an ES6 array helper method that returns a new array with the results of performing a given function on each element of the calling array without affecting the original array.
console.log("Map---");

let num=[1,2,3,4,5,6,7,8,9,10]
// Multiply all values multiply by 2
let result=num.map(ele=>{ return ele*2 })
console.log(result) 
console.log("---");

// Dividing all values and round up results
result=num.map(ele=> Math.ceil(ele/2) )
console.log(result) 
console.log("---");

// Seperating value in odd or even
let num1=[12,36,85,96,73,64,48,17,80,59]
result=num1.map(ele=>{ 
    if(ele%2==0){
        return `${ele} is even`
    }else{
        return `${ele} is odd`
    }
})
console.log(result)
console.log("---");


let empdetail=[
    {
        name:"One",
        age:30,
        salary:2000,
        skills:["js","py","sql"]
    },
    {
        name:"Two",
        age:38,
        salary:4000,
        skills:["js","ts","css","ruby"]
    },
    {
        name:"Three",
        age:27,
        salary:1800,
        skills:["css","js","wordpress","bootstrap"]
    },
    {
        name:"Four",
        age:35,
        salary:3500,
        skills:["mongodb","py","sql"]
    },
]
// reducing all salary with value 200
result=empdetail.map(ele=>{
    return ele.salary-200
})
console.log(result);