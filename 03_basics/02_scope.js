//-------------------------------------------------------scope------------------------------------------------------------------------------------------------------------------//

//?global scope

if (true) {
  //? block scope
}

//! {} --- with function and if else statemenst statemenet it is called scope

//---------------------------------------------------video-----------------------------------------------------------//

if (true) {
  let a = 1;
  const B = 2;
  var c = 3;
}

// console.log(a);
// console.log(B);
console.log(c); //!giving value out of the scope which can cause problem in big databases

//-------------------------------------------nested scope------------------------------------------//

function one() {
  const username = "hitesh";

  function two() {
    const website = "youtube.com";
    console.log(username);
  }
  //   console.log(website);
  two();
}
one();

//-------------------------------------------in if else------------------------------------------//

if (true) {
  const username = "hitesh";
  if (username === "hitesh") {
    const website = "youtube.com";
    console.log(username + website);
  }
  //   console.log(website);
}

// console.log(username);

//-------------------------------------------interesting------------------------------------------//
addone(5);

function addone(num) {
  return num + 1;
}

addtwo(5); //! gives an error as it cannot be accessed before declaration

const addtwo = function (num) {
  return num + 2;
};
