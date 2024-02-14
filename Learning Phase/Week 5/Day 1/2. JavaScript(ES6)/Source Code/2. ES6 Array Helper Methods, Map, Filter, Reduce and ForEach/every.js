// The every() method is an ES6 array helper method that returns a boolean value if all array elements pass the given condition and returns false if some or one element fails the condition.
console.log("Every---");
num1=[12,36,85,96,73,36,48,17,80,36]
// Check all values are greater than 0
result=num1.every(ele=>{
    return ele>0
})
console.log(result);
console.log("---");

// Check all values are lesser than 0
result=num1.every(ele=>{
    return ele<0
})
console.log(result);
console.log("---");

num2=["one","two","four"]
// Check all string element has alphabet "o"
result=num2.every(ele=>{
    return ele.includes('o')
})
console.log(result);
console.log("---");

// Check all string element has alphabet "e"
result=num2.every(ele=>{
    return ele.includes('e')
})
console.log(result);
