function declaredname(parameters) {
  //inside of function
}

//calling a function

declaredname(arguments);
//
//

//
//
//
//
function sayMyName() {
  // this is a function declaration
  console.log("H");
  console.log("I");
  console.log("T");
  console.log("e");
  console.log("S");
  console.log("H");
}

sayMyName; // nothing happend as this only tells us where the function is

sayMyName(); //actually calling the function happens here

function addTwoNumber(number1, number2) {
  Number(number1);
  Number(number2);
  console.log(number1 + number2);
}

const result2 = addTwoNumber(1, null);

console.log(result2); // undefined - here result in itself doesnt hold any value;

//! to make them store any value we have to do

function addThreeNumber(N1, N2, N3) {
  //   let result = N1 + N2;
  //   return result

  return N1 + N2 + N3;
  console.log("hitesh"); // nothing is printed after return
}

const result = addThreeNumber(1, 7, 3);

console.log("result :", result);

//

function loginUserMessage(username /*this is parameter */) {
  return `${username} just logged in` /*this is string interpolation */;
}

const user9 = loginUserMessage(`gangwar` /*this is argument */);

console.log(user9);
// if the username is converted into empty then it returns //! undefined instead of null so

// a simple if statement introduced

function username1(username) {
  if (username != undefined) {
    console.log(`${username} just logged in`);
  } else {
    console.log(`username is not defined`);
  }
}

console.log(username1(`nishank`));

// new way of writing this function

function username2(username) {
  if (!username) {
    // username nahi doge to mai ye bolunga,,
    console.log(`username is not defined`);
  }
  return `${username} just logged out`;
}


console.log(username2());

//!Default parameter

function username3(username = "hello sir") {
  return `${username} just logged inside you`;
}

console.log(username3(`nishank `)); // if no argument is passed then it takes the default value);

//anonymous function
//! this shit is cool you can just declare a wihtout any name function and directly run it

// these functions are called function //?expressions
// normal functions are called function //?declarations

(function () {
  console.log("hello");
})();

//------------------------------------------------------------------video number 20-----------------------------------------------------------------------//

function addCartPrize(...num1) {
  return console.log(num1); //?[ 1, 2, 3, 4, 5 ]
}
addCartPrize(1, 2, 3, 4, 5); // returns [in array]]

/*...num1 here this operator is too known as //?rest operator*/

// another type

function addCartPrize2(val1, val2, ...val3) {
  return console.log(val3, val1, val2); //? [ 3, 4, 5, 6, 7 ] 1 2
}
addCartPrize2(1, 2, 3, 4, 5, 6, 7);

//here val 1 = 1 ,val2 = 2 , rest of the value is in array [3,4,5,6,7]

//! handling object in function

let user /* onbject*/ = {
  name: `nishank`,
  age: 17,
  phoneNumber: 9233343823498,
  college: "why whould i tell you",
  class: "12d",
  fathersname: `gangwar sahab`,
  timing: "38pm",
};

let newUser /* onbject*/ = {
  name: `chotegangwar`,
  age: 13,
  phoneNumber: 9233343823498,
  college: "chandigarh university",
  class: "10d",
  fathersname: `gangwar sahab`,
  timings: "12pm",
};

function handleObject(anyobject) {
  return console.log(
    `Mr ${anyobject.name} son of Mr ${anyobject.fathersname} of age ${anyobject.age} from class ${anyobject.class}
is required to get back to wokr at you time ${anyobject.timings}
    `
  );
}

handleObject(user);
//or
handleObject({
  fathersname: `nanhe khan`,
  age: 12,
  class: `3rd`,
  price: 399,
});

//! handling array in function

const myArr = [200, 300, 350, 400];

function handleArray(anyArr = [2000, 1231, 123, 3212]) {
  return console.log(`
    the pencil costs ${anyArr[0]}
    the pen costs ${anyArr[1]}
    the eraser costs ${anyArr[2]}
    the ruler costs ${anyArr[3]}
    `);
}

handleArray(); // this will run the function with default value
handleArray(myArr); // this will run the function with actual value(from the array`)
handleArray([100, 200, 300, 400]);


