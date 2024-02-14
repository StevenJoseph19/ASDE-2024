console.log("Some---");
num1=[12,36,85,96,73,36,48,17,80,36]
// Check some values are greater than 0
result=num1.some(ele=>{
    return ele>0
})
console.log(result);
console.log("---");

// Check some values are lesser than 0 
result=num1.some(ele=>{
    return ele<0
})
console.log(result);
console.log("---");

num2=["one","two","four"]
// Check some string element has alphabet "o"
result=num2.some(ele=>{
    return ele.includes('o')
})
console.log(result);
console.log("---");

// Check some string element has alphabet "e"
result=num2.some(ele=>{
    return ele.includes('e')
})
console.log(result);