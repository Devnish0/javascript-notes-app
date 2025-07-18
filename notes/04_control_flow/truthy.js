const { nan } = require("zod");

const userEmail = "h@hitesh.ai";

function checkUserEmail(userEmail) {
  if (userEmail) {
    console.log("Got user email");
  } else {
    console.log("Don't have user email");
  }
}

const empty = "";

function checkUserEmail2(empty) {
  if (empty) {
    console.log("Got user email");
  } else {
    console.log("Don't have user email");
  }
}

checkUserEmail(userEmail);
checkUserEmail2(empty);

//!-----------------------------false values-------------------------------------------------------//

false, 0, -0, null, undefined, nan, "", NaN, 0n;

//!-----------------------------truthy values-------------------------------------------------------//

"0", "false", " ", [], {}, function () {};

//??? since object and arrays are show struthy values than how can we check them

//?checking arrays

let myarr = [`babua`, `gangwar`];
if (myarr.length == 0) {
  console.log(`array is empty`);
} else {
  console.log(myarr[0], myarr[1]);
}

//? checking objects

let myobj = {};

if (Object.keys(myobj).length === 0) {
  console.log(`object is empty`);
} else {
  console.log(`obj is not an empty thing b;uddy shit`);
}

//!============================Nullish coalesting operator (??) : null undefined

let val1;
val1 = 5 ?? 10;

console.log(val1); // 5

//?usually it takes the firstt value but than what will be the use of it

let DB1 = undefined;
let DB2 = 12;

let DBacc = DB1 ?? DB2; //? ?? does not call undefined and null

console.log(DBacc);

//----- more the one

let x;
x = 10 ?? true;

//!---------------------------------terninary operator----------------------------------------------

//? for checking the conditions

// condition ? true : false

const iceteaPrice = 100;
iceteaPrice <= 80 ? console.log(`cheap`) : console.log(`expensive`);

//? if else statement for steriods
