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
optAddLanguage("below this is the editing the html document");

// ! editing existing elements
//? first

const secondLang = document.querySelector("li:nth-child(2)"); //counting starts with 1 not 0
// secondLang.innerHTML = "nishank gangwar"; // but this is also a bad appproach

//? secondapproach
const newli = document.createElement("li");
newli.textContent = "mojo";
secondLang.replaceWith(newli); //we can use replace with to repplace the nth child
