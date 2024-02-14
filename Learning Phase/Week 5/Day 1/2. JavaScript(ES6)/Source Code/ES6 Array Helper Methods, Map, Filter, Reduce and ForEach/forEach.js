console.log("forEach---");

let alphabet=['a','b','c','d','e'];
// Iterating array elements using forEach by a normal function
alphabet.forEach(function(ele){
    console.log(ele);
})
console.log("---");

// Iterating array elements using forEach by an arrow function
alphabet.forEach(ele=>{
    console.log("arrow",ele);
})
console.log("---");

let num=[1,2,3,4,5,6,7,8,9]
// Iterating array elements using forEach and applying some condition
num.forEach(arg=>{
    if(arg>=5){
        console.log(arg);
    }
})