{
  {
    {
      var v = 42;
    }
  }
}

console.log(v);
{
  //Block Scope
}

if (true) {
  //Block scope
}

for (var i = 1; i <= 10; i++) {
  //Block scope
}

console.log(i);

function sum(a, b) {
  //Functions Scope
  var result = a + b;
  // let, const
}

// sum(4,3)
// result;