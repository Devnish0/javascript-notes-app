//!making new elements in the DOM

//make a function to add in the list

//basic adding (node tree takes time to reach the bottom)

function addList(language) {
  const li = document.createElement("li"); //create an element through this
  li.innerHTML = language; // changee the inner html in it
  document.querySelector(".language").appendChild(li); // add the element in the div or elmement
}
addList("nishank"); //adding lists
addList("gangwar");
addList("bauji");

//advance way (optimised no tree traverse )

function optAddLanguage(language) {
  const li = document.createElement("li"); //create an element like li
  li.appendChild(document.createTextNode(language)); // add the text node in it
  document.querySelector(".language").appendChild(li); // add the element in the div or element
}
optAddLanguage("this is the fourth element");
optAddLanguage("this is the fifth element");
optAddLanguage("this is the sixth element");

// ! editing existing elements

//? first

const secondLang = document.querySelector("li:nth-child(2)"); //counting starts with 1 not 0
// secondLang.innerHTML = "nishank gangwar"; // but this is also a bad approach
//? secondapproach

const newli = document.createElement("li"); //creates new element <li></li>
newli.textContent = "mojo";
secondLang.replaceWith(newli); //we can use replace with to repplace the nth child

//? third approach>

const firstlang = document.querySelector("li:first-child"); //selecting the first child
console.log(firstlang.outerHTML); //? outerHTML gives the whole html of the element
firstlang.outerHTML = "<li>typescript</li>";

//! removing existing elements

//? first approach

const thirdLang = document.querySelector("li:last-child"); //selecting the third child
// thirdLang.remove(); //removing the third child
