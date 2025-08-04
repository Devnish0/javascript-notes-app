const body = document.querySelector("body");
const redbtn = document.querySelector("#red");
const buttons = document.querySelectorAll(".color-container");
buttons.forEach((button) => {
  console.log(button);
  button.addEventListener("click", (event) => {
    console.log(event); //even hua
    console.log(event.target); //event kaha se hua
    //! first (my method)
    // if (event.target.id === "grey") {
    //   body.setAttribute("style", "background-color: rgba(137, 137, 137, 1);");
    // }
    // if (event.target.id === "red") {
    //   body.setAttribute("style", "background-color: rgba(205, 28, 24, 1);");
    // }
    // if (event.target.id === "yellow") {
    //   body.setAttribute("style", "background-color: yellow;");
    // }
    // if (event.target.id === "green") {
    //   body.setAttribute("style", "background-color: green;");
    // }

    //! second (sirs method)
    if (event.target.id === "grey") {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === "red") {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === "yellow") {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === "green") {
      body.style.backgroundColor = event.target.id;
    }
  });
});

// div1.setAttribute(attribute, value);
