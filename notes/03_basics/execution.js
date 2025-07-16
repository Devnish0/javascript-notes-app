//! how the javascript executes code

let val1 = 2;
let val2 = 4;

function addNum(num1, num2) {
  let total = num1 + num2;
  return total;
}

let result1 = addNum(val1, val2); // result1 = 6
let result2 = addNum(10, 299); // result2 = 309

console.log(result1);
console.log(result2);

//? 🔥 JAVASCRIPT EXECUTION FLOW CHART 🔥
//? ------------------------------------
//? STEP 1: GLOBAL EXECUTION CONTEXT (GEC) is CREATED

//? 💾 Memory Phase (GEC):
//? - val1     → undefined
//? - val2     → undefined
//? - addNum   → function definition (entire function stored in memory)
//? - result1  → undefined
//? - result2  → undefined

//? ⚙️ Execution Phase (GEC):
//? - val1 = 2
//? - val2 = 4
//? - result1 = addNum(val1, val2)
//?     → triggers a NEW Function Execution Context (FEC)

//? ------------------------------------
//? STEP 2: FUNCTION EXECUTION CONTEXT for addNum(2, 4)

//? 💾 Memory Phase (FEC):
//? - num1   → undefined
//? - num2   → undefined
//? - total  → undefined

//? ⚙️ Execution Phase (FEC):
//? - num1 = 2
//? - num2 = 4
//? - total = num1 + num2 → total = 6
//? - return total → returns 6 to result1
//? - FEC is popped off the call stack

//? ------------------------------------
//? STEP 3: FUNCTION EXECUTION CONTEXT for addNum(10, 299)

//? 💾 Memory Phase (FEC):
//? - num1   → undefined
//? - num2   → undefined
//? - total  → undefined

//? ⚙️ Execution Phase (FEC):
//? - num1 = 10
//? - num2 = 299
//? - total = num1 + num2 → total = 309
//? - return total → returns 309 to result2
//? - FEC is popped off the call stack

//? ------------------------------------
//? ✅ Final Output in Global Scope:
//? - result1 = 6
//? - result2 = 309

//? ✅ Final Global Memory:
//? - val1     = 2
//? - val2     = 4
//? - result1  = 6
//? - result2  = 309
//? - addNum   = still exists in memory as a function

//? 🧹 Function-local variables like num1, num2, total are deleted after FEC ends (garbage collected)
