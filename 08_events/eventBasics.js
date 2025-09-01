// the better way for the onclick event apple would be
//*  still onclicks should not be used
//!  document.getElementById("owl").onclick(alert("this is via the third method")) //? wrong method
// document.getElementById("owl").onclick((e)=>{alert("this is via the third method")}) //? another wrong method
// document.getElementById("owl").onclick = (e)=>{alert("this is the third method")} //? the right method
// * if we really want to use this method we should use event listeners

//! Event Types Overview
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

//! Context Menu Event Example

document.querySelector("#owl").addEventListener("contextmenu", (e) => {
  //   alert("nishank ");
});

//? similiar to the addevent listener there is attachEvent() -- were used in early times
//* document.getElementById("owl").attachEvent("onclick", function(){alert("this is via attachEvent")})
//? similiar to this there was j query - on()

//! Event Object Explanation
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

//! Stop Propagation Example

document.getElementById("owl").addEventListener("click", (e) => {
  //   e.stopPropagation(); //! stops the propogation or only clicked on owl get consoled not the clicked inside ul
  //   console.log("clicked on owl");
});

//! Event Bubbling and Capturing Example

document.getElementById("images").addEventListener(
  "click",
  (e) => {
    // console.log("clicked inside ul");
  }
  // default is false already
);

//* event propogation
// (bubbleing - from small to larger  (defalut/false))
// (capturing - from large to small (true))

//? the element clicked will be shown from smaller to larger
//? example when the owl was clicked first owl was shown then the ul

//* when both are converted to true it get reversed

//* it is false doesnt matter if we type it or not

//! prevent default

document.getElementById("google").addEventListener(
  "click",
  (e) => {
    e.preventDefault(); //? prevents the default behaviour such as opening the link
    // e.stopPropagation(); //? prevents the propogation
  },
  false
);

//
//
//
//
//
//
//
//

//

//! task - when any of these lists get clicked they should get dissappeared
//
//
//
//

let list = document.querySelector("#images");
list.addEventListener(
  "click",
  (e) => {
    console.log(e.target.parentNode);
    console.log(e.target.tagName)
    let removeIt = e.target.parentNode;
    //? e = event
    //? target = which id or event
    //? parentNode = target's parent

    //?1st way to remove -
    //* removeIt.remove(); //* removes the complete elementparentNode

    //? 2nd way to remove -
    //* removeIt.parentNode.removeChild(removeIt);

    //! here when clicked on the list item it removes the entire ul(its parent)
      // ! to deal with it we can add some checks
      console.log(e.target.parentNode)
      if (e.target.tagName === 'IMG' || e.target.tagName === 'A' ){
          let removeChild = e.target.parentNode
          removeChild.parentNode.removeChild(removeChild)
      }
      //? here if the tagName is IMG or A then remove the child else dont




  },
  false
);
//! some of the useful events
//? e.preventDefault
//? e.target - gives the target item
//? e.parentNode - give the parent of the clicked
//? e.childNode - give the child of the clicked
//? e.target.tagName - IMG, UL
//? e.target.id - give the id of
// * need to learn about
// type, timestamp , defaultPreveted
// target , toElement , srcElement, currentTarget
// clientX , clientY , screenX , screenY
// altkey , ctrlkey , shiftkey , keyCode
