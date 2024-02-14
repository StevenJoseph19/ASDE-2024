// The filter() method is an ES6 array helper method that returns the value of the first element in an array that satisfies the provided testing function.
console.log("Find---");
let num1=[12,36,85,96,73,36,48,17,80,36]
// There are totally 3-36 but find will return first matching value doesn't consider rest
result=num1.find(ele=>{
    return ele===36
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
// Finding employee whose name is "two"
result=empdetail.find(ele=>{
    return ele.name==="Two"
})
console.log(result);
console.log("---");

// Finding employee whose salary is 3500
result=empdetail.find(ele=>{
    return ele.salary==3500
})
console.log(result);