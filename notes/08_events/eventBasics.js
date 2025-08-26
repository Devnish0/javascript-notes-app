// the better way for the onclick event apple would be
//*  still onclicks should not be used
//!  document.getElementById("owl").onclick(alert("this is via the third method")) //? wrong method
// document.getElementById("owl").onclick((e)=>{alert("this is via the third method")}) //? another wrong method
// document.getElementById("owl").onclick = (e)=>{alert("this is the third method")} //? the right method
// * if we really want to use this method we should use event listeners
// ! some of the events that are available and can be used
//     Mouse Events

// "click" → when you click (mousedown + mouseup on the same element)

// "dblclick" → double click

// "mousedown", "mouseup" → button press & release

// "mousemove" → moving the mouse

// "mouseover", "mouseout" → hover in / hover out

// "contextmenu" → right-click

// Keyboard Events

// "keydown" → when a key is pressed down

// "keyup" → when it’s released

// "keypress" → (deprecated, don’t use — use keydown/keyup instead)

// Form Events

// "submit" → when a form is submitted

// "change" → when input value changes

// "input" → when typing into input

// "focus", "blur" → element gets/loses focus

// Window Events

// "load" → page fully loaded

// "resize" → window size changes

// "scroll" → scrolling happens

// "beforeunload" → leaving page

// Touch Events (on mobile)

// "touchstart", "touchmove", "touchend"

// Other / Advanced

// "transitionend" / "animationend" → CSS animations

// "dragstart", "drop" → drag & drop

// "pointerdown", "pointerup" → newer unified mouse/touch events

document.querySelector("#owl").addEventListener("contextmenu", (e) => {
  alert("nishank ");
});

//? similiar to the addevent listener there is attachEvent() -- were used in early times
//* document.getElementById("owl").attachEvent("onclick", function(){alert("this is via attachEvent")})
//? similiar to this there was j query - on()

//! what is this event in .addEventListener("click", (e) => {};
// here what is this e
document.querySelector("#owl").addEventListener(
  "click",
  (e) => {
    // console.log(e);
    // gives us access to alot of information
  },
  false
);
document.getElementById("images").addEventListener(
  "click",
  (e) => {
    console.log("clicked inside ul");
  },
  false
);
document.getElementById("owl").addEventListener(
  "click",
  (e) => {
    console.log("clicked on owl");
  },
  false
);
//* event propogation (bubbleing from small to larger)
//? the element clicked will be shown from smaller to larger
//? example when the owl was clicked first owl was shown then the ul

//* it is false doesnt matter if we type it or not
//* need to learn about
// type, timestamp , defaultPreveted
// target , toElement , srcElement, currentTarget
// clientX , clientY , screenX , screenY
// altkey , ctrlkey , shiftkey , keyCode
