const coding = ["coding", "js", "java", "javascript"];

//!------------ for each loop for arrays

//?----normal declaration----//

coding.forEach(function (i) {
    console.log(i);
});

//?----arrow function declaration--//

coding.forEach((i) => {
  //   console.log(i);
});

//?----better usage of foreach----//

function printMe(item) {
  console.log(item);
}
// coding.forEach(printMe);

//?----parameters can contain value,index,and entire array---//

coding.forEach((val, ind, arr) => {
    console.log(val, ind, arr);
});

//?----basic use of for each loop in the arrays--//

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "rust",
    languageFileName: "ry",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

myCoding.forEach((element, ind) => {
  console.log(element.languageFileName); //? we can acces whtever we want
});
