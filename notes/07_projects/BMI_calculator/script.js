const form = document.querySelector("form"); //! calling the form
// const height = document.querySelector("#height"); //! calling the input field of hei
// const weight = document.querySelector("#weight"); //! calling the input field of weight
// const submit = document.querySelector("#submit"); //! calling the submit button
// const background = document.querySelector("#changeBackground"); //! calling the background color change button
console.log(form);

// added an even listener to the form that gets active when form gets submitted
//it makes an event "e" => prevent default (prevents the default thing ) ===which is to send the values and reload the page
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#results");
  const shame = document.querySelector("#shame");

  //!checking if the input is number or not
  if (height === String || height < 0 || height === "" || isNaN(height)) {
    result.innerHTML = "please give a valid height";
    result.style.color = "red";
    return; // stop execution here
  } else if (
    weight === String ||
    weight < 0 ||
    weight === "" ||
    isNaN(weight)
  ) {
    result.innerHTML = "please give a valid weight";
    result.style.color = "red";
    return;
  }
  //!making sure the inputs are valid
  if (height <= 65.24) {
    result.innerHTML =
      "aap to Chandra Bahadur Dangi se bhi chote ho <br> (please give a valid height)";
    result.style.color = "red";
    return;
  } else if (height >= 251) {
    result.innerHTML =
      "oh khali ke chacha batau abhi? <br> (please give a valid height)";
    result.style.color = "red";
    return;
  }
  if (weight <= 10) {
    result.innerHTML = "aap murgi to nahi?? <br> (please give a valid weight)";
    result.style.color = "red";
    return;
  } else if (weight >= 635) {
    result.innerHTML =
      "bhai teri gaadi ka BMI nikalna hai? {please give a valid weight}";
    return;
  }

  //! calculation
  const output = weight / ((height * height) / 10000);

  result.innerHTML = `Your BMI is <b>${output.toFixed(1)}</b>`; // deleted the whole div
  result.style.color = "white";

  //? personal quotes
  if (output < 18.6) {
    shame.innerHTML = "Bhai thoda khana peena shru krde <br> (under-weight)";
  } else if (output >= 18.6 && output <= 24.9) {
    shame.innerHTML =
      "waah! ye body aapki asteroid se hai? <br> (normal-weight)";
  } else if (output > 24.9) {
    shame.innerHTML = "Bhai thoda kam khaya karo <br> (obese)";
  }

  // Personal quotes
});
// const shame = document.querySelector("#shame");
// shame.innerHTML = "nishank";
