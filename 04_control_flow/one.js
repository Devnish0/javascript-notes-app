//! control flow , logic flow

//!--------------------------------------------- if

if (true) {
  //?code
}

if (true) {
  //? execute
}
if (false) {
  //? doesnt execute
}

//! comparision how

//? < (less than)
//? > (greater than)
//? <= (less than or equal to)
//? >= (greater than or equal to)
//? == (equal to)
//? != (not equal to)
//? ! logical operators
//?  && (and)
//?  || (or)
//?  ! (not)

//!----------------------------------------------- single line if

const balance = 99;

if (balance > 50) console.log(`your socre is higher than 50`); //<------ implicit scope (similar to implicit return)

//!---------------------------------------------------- if else

if (true) {
  //? code
} else {
  //? ya to ye ya to wo
  //? code
}

//!------------------------------------------------------------- if else if

if (balance < 50) {
  console.log(`less than 50`);
} else if (balance > 100) {
  console.log(`greater than 100`);
} else if (balance == 100) {
  console.log(`equal to 100`);
} else {
  console.log(`no idea`);
}

//!------------------------------------------------------------ checking two statements ( &&)

let isUserLoggedIn = true;
let isUserDebtCrd = true;

if (isUserLoggedIn && isUserDebtCrd) {
  console.log(`you can buy stuff`); //? && checks both conditions
}

//!------------------------------------------------------------ checking two statements ( || )

let loggedInGoogle = false;
let loggedInFacebook = false;

if (loggedInGoogle || loggedInFacebook) {
  console.log(`user logged in`); //? || checks both conditions
} else {
  console.log(`user not logged in`);
}
