const myObj = {
  js: "javascript",
  cpp: "C++",
  rb: "ruby",
  swift: "swift by apple",
};

console.log(myObj);

for (const element in myObj) {
  console.log(`${element} shortcut is the symbol for ${myObj[element]}`);
}

const programming = ["js", ""];
