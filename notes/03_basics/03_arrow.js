const user = {
  name: "nishank",
  age: 18,
  location: "jaipur",
  email: "nishank@gmail.com",
  isLoggedIn: true,

  welcomeMessage: function () {
    console.log(`hey, ${this.name} welcome to the website`); //? this.name -- this sets the current context

    console.log(this); //? {} this tells us the current context of block scope
  },
};

user.welcomeMessage(); //? running through the context of user object

user.name = `gangwar sahab`;

user.welcomeMessage(); //? running through the context of user object but the name has been changed

console.log(this); //? {} this tells us the current context of global scope ---- is this runned in the browser it will give the context for the entire browser ``

//--------------------- this function only works in objects not in fucntion as such-----------------------------------------------//

(function chai1() {
  console.log(this); /*ef *1> Object [global] {
  global: [Circular *1],
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  structuredClone: [Getter/Setter],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [AsyncFunction: fetch]*/ //? this comes isin as result due to node contexts
})();

(function chai() {
  let username = " hitesh";
  console.log(this.username);
})();
//undefined -- //? this works good in objects but not much in function as such

//!---------------------------------------arrow fucntion ----------------------------//

//? defined as

arrow = (/*parameter*/) => {
  let username = "hitesh";
  console.log(this);
};
//{} //?here even both the functions are same yet arrow function gives {} whereas
//? the normal function gives a very long answer

//------------------------------------aarow fucntion-------------------------//

addTwo = (num1, num2) => {
  return console.log(num1 + num2);
};
console.log(addTwo(1, 2));

//--------------------implicit return  //? one line functoin-//? doesnt require return //----------------------------//

impret = (num1, num2) => num1 + num2; // in anonymous function form
console.log(impret(1, 2));

const imlicitret = (num1, num2) => console.log(num1 + num2); //in normal function form

imlicitret(909012, 9);

//? imagine  returning a object in implicit way so we can use ()

const implRetObj = () => ({ username: `nishank`, age: 23, number: 123223423 }); //? object in implicit function

console.log(implRetObj());
