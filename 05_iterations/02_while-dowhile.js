let i = 0;

while (i <= 20) {
  i = i + 2;
  console.log(i);
}

let myArr = [`nishank`, `gangwar`, `devnish`, `paaji`];
let arr = 0;

while (arr < myArr.length) {
  console.log(`Value is ${myArr[arr]}`);
  arr = arr + 1;
}

let score = 0;

do {
  console.log(`score is ${score}`);
  score++;
} while (score <= 90);

//
//
//
////
//
//
////
//
//
////
//
//
////
//
//
////
//
//
////
//
//
////
//
//
////
//
//
////
//
//
////
//
//
//

//-----------perplexity notes

// //! JavaScript While Loop Output Differences

// //? Version 1: Logging after the loop
// let index = 0;

// while (index <= 20) {
//   index = index + 2;
// }

// console.log(index); // Output: 22

// // Explanation:
// // - The loop increases 'index' by 2 each time, starting from 0.
// // - When 'index' becomes 22, the condition (index <= 20) is false, so the loop stops.
// // - 'console.log(index)' runs after the loop, logging the final value: 22.

// //? Version 2: Return statement inside the loop
// // NOTE: 'return' outside a function causes a syntax error in JavaScript.
// // To demonstrate, wrap in a function:
// function testReturn() {
//   let index = 0;

//   while (index <= 20) {
//     index = index + 2;
//     return index; // Loop exits on first iteration, returns 2 immediately
//   }

//   // This line is never reached
//   // console.log(index);
// }

// console.log(testReturn()); // Output: 2

// // Explanation:
// // - On first iteration: index = 2, 'return index' exits the function, returns 2.
// // - Nothing after 'return' in the function runs.

// //? Version 3: Logging inside the loop
// let idx = 0; // Using a different variable name for clarity

// while (idx <= 20) {
//   idx = idx + 2;
//   console.log(idx); // Logs every incremented value
// }

// // Output:
// // 2
// // 4
// // 6
// // 8
// // 10
// // 12
// // 14
// // 16
// // 18
// // 20
// // 22

// // Explanation:
// // - The loop logs 'idx' on every iteration after incrementing by 2.
// // - All values from 2 to 22 are printed, step by 2.

// //! Summary Table

// //? Version | Output                         | Explanation
// //? 1       | 22                             | Logs only the final value after loop ends.
// //? 2       | 2 (if inside a function)       | Returns immediately after first increment.
// //? 3       | 2, 4, 6, ... 22 (each on line) | Logs value at each step within the loop.

// //! Key Takeaways
// //? 1. 'console.log' position affects when/how often logging happens.
// //? 2. 'return' inside the loop exits the function immediately (not recommended unless needed).
// //? 3. Logging inside the loop shows all steps; logging after the loop shows only the final value.
