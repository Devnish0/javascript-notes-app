const MvHeroes = ["thor", "ironman", "hulk"];
const DcHeroes = ["superman", "Batman"];

// MvHeroes.unshift(DcHeroes); // ads the dc heroes array in the mv heroes array

console.log(MvHeroes); //[ 'thor', 'ironman', 'hulk', [ 'superman', 'Batman' ] ]

//suppose we want to access the superman element

// console.log(MvHeroes[3][0]); //superman

//? to solve this problem we can do concat

const allHeroes = MvHeroes.concat(DcHeroes); //! limitation of two arrays only

console.log("B", allHeroes); //B [ 'thor', 'ironman', 'hulk', 'superman', 'Batman' ]

const allNewHeroes = [...DcHeroes, ...MvHeroes, ...allHeroes]; // can join multiple arrays

console.log(allNewHeroes);

// now get to a new problem statement

let newArray = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]; // there are so many arrays inside another arrays

let usableArray = newArray.flat(4); //[12345678910]
console.log(usableArray);

// askings can also be done on arrays

console.log(Array.isArray("Chatpati chaat")); // false

// make array from the strings

console.log(Array.from("Chatpati chaat"));

// make array from a object

console.log(
  Array.from({
    name: "Chatpati chaat",
    age: 17,
  })
);

// make an array from the variables

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
