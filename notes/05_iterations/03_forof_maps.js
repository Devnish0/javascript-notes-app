//! for of loops

["", "", ""][({}, {}, {})];

const arr = [1, 2, 3, 4, 5, 6, 7];

for (const i of arr) {
  console.log(i); // normally prints the values as 1,2,3,4,5,6,7
}

//? loops on arrays with strings
const arr1 = [`superman`, `batman`, `ironman`];

for (const i of arr1) {
  console.log(i);
}

//?loops for single string returns key vvalue pair type shit

const greetings = "hello world";

for (const greet of greetings) {
  if (greet === " ") {// here continue is used in to tackle with the blank places
    continue;
  }
  console.log(greet);
}

//!maps
const map = new Map();
map.set("IN", "India");
map.set("USA", "United state of america");
map.set("FR", "France");
map.set("FR", "France");
// map.delete("FR", "France"); //* deleted the france (both)

console.log(map); //*doesnt count the repeated value in this case france is not copie  again
/* Map(3) {
  'IN' => 'India',
  'USA' => 'United state of america',
  'FR' => 'France'
} */

//? loop on this map

for (const element of map) {
  console.log(element);
  /*  [ 'IN', 'India' ]
[ 'USA', 'United state of america' ] */
}

//? for holding key value differently in maps

//alag tareeke se print karane ke liye for maps

for (const [key, value] of map) {
  console.log(key, `:-`, value);
}
/* IN :- India
USA :- United state of america
 */

//! trying for of loop on the object

let myObj = {
  name: `nishank`,
  age: 17,
  lastname: `gangwar`,
  schoolName: `delhi college`,
};

// for (const element of myObj) {
//   console.log(element);
//* myObj is not iterable
// }
