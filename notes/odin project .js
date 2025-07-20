//! Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.

const { log } = require("node:console");
const { date } = require("zod");

//? simple fuction that converts words first letter into capital
function capFirWor(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

//? simple fuction that converts words first letter into capital also gives error message

function capFirWor2(word) {
  if (typeof word !== "string") {
    console.log(`your ${word} is not defined 
        please enter valid name`);
  } else {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
}

console.log(capFirWor2(``));

//!------------------------------Write a function called lastLetter that takes a string and returns the very last letter of that string -------------------------------//

function retLastWord(word) {
  return console.log(word.charAt(word.length - 1));
}

retLastWord(`nishnak`);

//!------------------------------------Write a function called add7 that takes one number and returns that number + 7.-------------------------------------------//

function add7(num) {
  return console.log(num + 7);
}

add7(1);

//!=====================================Write a function called multiply that takes 2 numbers and returns their product.===============================================//

function mul5(num) {
  return console.log(7 * num);
}

mul5(5);

//!--------------------------------------------- Check if a number is even or odd--------------------------------------------------------------------------------//
function isEvenOrOdd(num) {
  if (num % 2 == 0) {
    return console.log(`even`);
  } else {
    return console.log(`odd`);
  }
}

isEvenOrOdd(83765);

//!----------------------------------------------2. 📚 Return a grade based on score---------------------------------------------------------------------------------------//

function grdScr(nums) {
  if (nums >= 90) {
    return console.log(`A`);
  }
  if (80 <= nums && nums <= 89) {
    return console.log(`B`);
  }
  if (70 <= nums && nums <= 79) {
    return console.log(`c`);
  }
  if (nums <= 70) {
    return console.log(`F`);
  }
}

grdScr(67);

//!--------------------------------------------------------4. 🏁 Check if number is positive, negative or zero--------------------------------------------------------------------------//

function chkNeg(val1) {
  if (val1 >= 0) {
    return console.log(`value is positive`);
  } else {
    return console.log(`value is negative`);
  }
}

chkNeg(-2);

//!-----------------------------------------------------------------------------------5. 🕒 Greet user based on time--------------------------------------------------------------------------------------//

function Gm(name = `sir`) {
  let hour = new Date();

  let x = hour.getHours();
  if (x > 0 && x < 12) {
    return console.log(`Good morning, ${name}`);
  }
  if (x >= 12 && x < 16) {
    return console.log(`Good afternoon, ${name}`);
  }
  if (x >= 16 && x < 21) {
    return console.log(`Good evening, ${name}`);
  }
  if (x >= 21 && x < 24) {
    return console.log(`Good night, ${name}`);
  }
}

Gm(`nishnk`);

//!---------------------------------------------------------------------------------------6. 🚪 Check password length------------------------------------------------------------------------------------//

function checkPasslength(pass) {
  x = pass.length;
  return console.log(`password is ${x} length long`);
}

checkPasslength(`nisnihsnakka;lskjdflkjsadlfkjsadflksal;dfkasjhd;ksalkdflhank`);

//!---------------------------------------------------------------------------------------6. 🚪 Check password strength------------------------------------------------------------------------------------//

function checkPassStrength(pass) {
  if (pass.length >= 0 && pass.length <= 6) {
    return console.log(`passowrd is too short`);
  }
  if (pass.length >= 7 && pass.length <= 10) {
    return console.log(`passowrd is medium`);
  }
  if (pass.length >= 11) {
    return console.log(`passowrd is too long`);
  }
}

checkPassStrength(`nish`);

console.log(Math.sqrt());
