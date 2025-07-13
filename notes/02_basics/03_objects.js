let user0 = new Object(); // "object constructor" syntax (singleton banta hai)

// "object literal" syntax  (singleton nahi banta)

// for adding a key as a symbol we use

let mySym = Symbol("Mysymbol");

let user = {
  name: "nishank",
  age: 18,
  location: "jaipur",
  email: "nishank@gamil.com",
  isLoggedIn: true,
  mySym: "nisank", // key is the string "mySym"
  [mySym]: "nisank", // key is the symbol stored in mySym
};

console.log(typeof user.mySym); // good but second one is also important

console.log(typeof user[mySym]);
console.log(typeof user["mySym"]);

// changing the value fromm the user object

user.name = "devnish";

console.log(user);

// freezing the changes in the object

//? Object.freeze(user);

user.name = `fuck off niqqa`;

console.log(user);

// adding a function in this object

user.greeting = function () {
  console.log(`Hello, JS User your age is ${this.age} `);
};

console.log(user.greeting());
