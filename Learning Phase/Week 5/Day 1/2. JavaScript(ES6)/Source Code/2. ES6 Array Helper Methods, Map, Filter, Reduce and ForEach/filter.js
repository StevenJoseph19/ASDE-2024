// The filter() method is an ES6 array helper method that returns a new array with the results of performing a given function on each element of the calling array without affecting the original array.
console.log("Filter---");

let num1=[12,36,85,96,73,64,48,17,80,59]
// Filtering array values which values should greater than 50
let result=num1.filter(ele=>{ return ele>50 })
console.log(result);
console.log("---");

// Filtering all even values
result=num1.filter(ele=>{ return ele%2==0 })
console.log(result);
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
// Filtering employee whose age is greater than 30
result=empdetail.filter(ele=>{
    return ele.age>=30
})
console.log(result);
console.log("---");

// Filtering employee whose skill is greater than 3
result=empdetail.filter(ele=>{
    return ele.skills.length>3
})
console.log(result);
console.log("---");

// Here we performing map opertion but result will not changed because
// filtering only perform test true or false, true will be placed on new array
result=empdetail.filter(ele=>{
    return ele.salary-200
})
console.log(result);