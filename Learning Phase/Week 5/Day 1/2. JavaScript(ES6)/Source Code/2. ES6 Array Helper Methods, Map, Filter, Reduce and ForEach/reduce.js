// The reduce() method is an ES6 array helper method that returns array of values to single values.
console.log("Reduce---");
// Reduce-> adding all array values and return single value
num1=[12,36,85,96,73,36,48,17,80,36]
result=num1.reduce((acc,ele)=>{
    return acc+ele
})
console.log(result);
console.log("---");

// Reduce-> multiplying all array values and return single value
num2=[1,2,3,4,5]
result=num2.reduce((acc,ele)=>{
    return acc*ele
})
console.log(result);