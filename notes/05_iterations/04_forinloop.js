//! using for in loop for object and arrays
//? when for "in" loop is applied in the obj it gives key and value in each iteration
/* 
js: "javascript",
  cpp: "C++",
  rb: "ruby",
  swift: "swift by apple", 
  */
//? when it is used in the array it gives the key as nymber and values
/* 
0 js
1 rb
2 py
3 java
4 cpp
*/

//! calling the keys and values in iterations
//? for objects
//?-- use like @ elements for the keys and myObj[elements]

const myObj = {
  js: "javascript",
  cpp: "C++",
  rb: "ruby",
  swift: "swift by apple",
};

console.log(myObj);

for (const element in myObj) {
  console.log(`${element} shortcut is the symbol for ${myObj[element]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"];

for (const [key] in programming) {
  // console.log(`${key} ${programming[key]}`);
}
let newarr = [`nishank`, `gangwar `];

for (const i in newarr) {
  console.log(i, newarr[i]); //i = 0,1
  //? simple thing hojati hai like array[0]
}
//!---------------maps arent iterable------------------//

