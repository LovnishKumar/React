function outer() {
  let count = 0;       // box with a number
  function inner() {   // function inside outer
    count++;           // inner uses count
    return count;
  }
  return inner;        // return the inner function
}

const counter = outer();  // call outer
console.log(counter()); // 1 (count goes 0 -> 1)
console.log(counter()); // 2 (count goes 1 -> 2)
console.log(counter()); // 3 (count goes 2 -> 3)
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
