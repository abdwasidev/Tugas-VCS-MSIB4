//function that adds two numbers 
function sum(a, b) {
  return a + b;
}

// calling sum() function  
var result = sum.call(this, 5, 10);

console.log(result);

//Output:
// 15
