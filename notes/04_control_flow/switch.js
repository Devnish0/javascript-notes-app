//! similar to the if else if else if else we have switch case to check for multiple instances of a value
// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

const value = 100;

switch (value) {
  case 12:
    console.log(`value is 12`);
    break;

  case 100:
    console.log(`value is 100`);
    break;

  case 200:
    console.log(`value is 200`);
    break;

  case 300:
    console.log(`value is 300`);
    break;

  default:
    console.log(`value is default`);

    break;
}

//! =====================================
//! JavaScript 'switch' Statement Notes
//! =====================================

/*
 * The 'switch' statement is a control flow structure used to execute
 * different blocks of code based on the value of a specific expression.
 * It's often a cleaner, more readable alternative to a long chain of
 * 'if...else if...else' statements.
 */

//? ----------------
//? Basic Syntax
//? ----------------

switch (expression) {
  case value1:
    // Code to run if expression strictly equals (===) value1
    break; // The 'break' keyword stops execution and exits the switch block.

  case value2:
    // Code to run if expression strictly equals (===) value2
    break;

  // ... you can have many 'case' statements

  default:
  // This block is optional.
  // Code to run if no other 'case' matches the expression.
}

//! =====================================
//! How It Works
//! =====================================

//? 1. Expression Evaluation: The 'expression' inside switch() is evaluated once.

//? 2. Strict Comparison (===): The result is compared with the value of each 'case'
//   using a strict comparison. This means both the value AND the data type must match.
//   For example, `case 5:` will NOT match the string `"5"`.

//? 3. The 'break' Keyword: 'break' is crucial. It stops the code from executing
//   the next case. If you forget it, the code will "fall through" to the next case.

//? 4. Fall-Through Behavior: When a 'break' is omitted, the program will continue
//   execution into the next 'case' block(s) until it hits a 'break' or the end
//   of the switch statement. This is useful for grouping cases.

//? 5. The 'default' Keyword: The 'default' block acts like the final 'else' in an
//   'if-else' chain. It's executed if no other 'case' matches. It's optional
//   but good practice to include for unexpected values.

//! =====================================
//! Code Examples
//! =====================================

// To run an example, uncomment the block of code.

//? Example 1: Basic Usage - Checking User Role
/*
let userRole = "admin";

console.log("Checking role for:", userRole);

switch (userRole) {
  case "admin":
    console.log("Access granted to all areas. 👑");
    break;
  case "editor":
    console.log("Access granted to content creation areas. ✍️");
    break;
  case "viewer":
    console.log("Read-only access. 👀");
    break;
  default:
    console.log("Unknown role. Access denied. 🚫");
}
*/

//? Example 2: Grouping Cases (Fall-Through) - Checking for a Weekend

let today = "Sunday"; // Try changing this to "Monday" or "Saturday"
let message;

switch (today) {
  case "Saturday":
  case "Sunday":
    // Because there's no 'break' after "Saturday", if the case matches,
    // execution "falls through" to the "Sunday" case block.
    message = "It's the weekend! Time to relax! 🎉";
    break;
  case "Friday":
    message = "It's Friday! The weekend is almost here! 🙌";
    break;
  default:
    message = "It's a weekday. Keep up the great work! 💻";
}

console.log(message);

//! =====================================
//! Key Takeaways & Best Practices
//! =====================================

//? When to use 'switch' vs. 'if-else if'

// Use 'switch' when:
// 1. You are checking a SINGLE variable or expression.
// 2. You are comparing that variable against multiple known, discrete values (like "admin", "editor", 404, 200).
// 3. It makes your code more readable than a long 'if-else if' chain.

// Use 'if-else if' when:
// 1. You need to check ranges of values (e.g., `if (age > 18 && age < 65)`).
// 2. You are checking multiple, different variables in your conditions.
// 3. Your conditions are complex boolean expressions.

//? Final Reminders:
// 1. ALWAYS use `break` unless you intentionally want to group cases.
// 2. Remember the comparison is STRICT (`===`).
// 3. A `default` case is great for handling errors or unexpected values gracefully.
