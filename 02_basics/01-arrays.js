// array

// ()
// {}
// []

//?methods of forming an array  (both objects)
//! note
// array copy operation makes the shallow copy not the deep copy
// shallow copy - share the same reference point (stack memory type shit)
// deep copy - doesnt share the same refrence point (heap memory type shit)

/*2nd method*/ const myarr1 = new Array();
/*1st method*/ const myarr = ["Devnish", "04T18", "gangwar", 1, 2];

myarr[0] = "samirande"; // stack memory type thing where the original thing got changed with this shit

// calling elements from array
console.log(myarr[0]);

console.log(myarr[3]);

//! array methods

myarr.push("nishank is the goat"); // adds an  element in the ending of the  original array
myarr.unshift("nishank is better"); // adds an element in the starting of the original array

console.log(myarr);

myarr.pop(); // removes the last element in the array
myarr.shift(); // removes the first element in the array

console.log(myarr.includes("gangwar")); //true - checks if () is included in the array or not

console.log(myarr.indexOf("gangwar")); //2 - gives the index of ()

// slice, splice;

const OgArr = [0, 1, 2, 3, 4, 5, 6];

console.log("A", OgArr);

//sliced

const SlArr = OgArr.slice(1, 3); //! doesnt remove the array in the original array

console.log(SlArr);

console.log("B", OgArr);

//spliced

const SpArr = OgArr.splice(1, 3); //! removes the (in the original array)

console.log(SpArr);

console.log("C", OgArr);

//
