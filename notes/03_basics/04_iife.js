//! immediately invoked function expression//

const { log } = require("util");

//? anonymous functions hai nothing else

//? global scope pollution problem
//? thats why we use iife
let x = 23;

function callX() {
  console.log(x); //! x called from the global scope
}
callX();

//? to tackle this problem

(function callX() {
  //? named iife
  let x = 234;
  console.log(x); //! x willbe called from local scope
})();

//? arrow function ----------------------------------

(() => {
  //? unnamed iife
  let x = 2323;
  console.log(x);
})();

//?----------------------------iife for unnamed arrow function--------------------------------------
((name) => console.log(`${name} is here from all the way to bahamas `))(
  "nishank"
);
