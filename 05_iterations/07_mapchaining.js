//!-----Map
//?---- map is used the change or modify the values whereas filter just filters out the values in the array

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const add10 = myNum.map((i) => i + 10); //? filter is only used to filter the arrays not to modify them

console.log(add10); //?for modifying arrays we uses map

//? if we use it to check it similarly to the filter it give true false in the array rather than only array containing it
const trfl = myNum.map((i) => i <= 3);
/* true,  true,  true,
  false,  false,  false,
  false,  false, false,
  false */
console.log(trfl);

//?--- here from the main my num array get the values less then 3 and push it into arr array

let arr = [];

const lessthn0 = myNum.map((i) => {
  if (i <= 3) {
    arr.push(i); //? pushes the is statement in the arr array
  }
});
console.log(arr);

//!-----------------chaining------------------------------------------//
//? using more than one method at a time

myNum;
const chain = myNum
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 40);
console.log(chain);
