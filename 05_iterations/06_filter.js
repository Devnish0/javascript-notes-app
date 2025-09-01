//!for each

//?Updating DOM elements
//?Logging data
//?Making API calls
//?Side effects

//!filter:

//? Filtering out unwanted elements
//? Creating subset of data
//? Data transformation with conditions
//? Search functionality

let coding = [`js`, `java`, `ruby`, `python `, `cpp`];

/* coding.forEach((i) => {
  console.log(i);
}); */

//! if we try to store the for eac loop in the variable we get to know about

const log = coding.forEach((i) => {
  console.log(i);
});

console.log(log); //------------------------------------------------//?undefined

//!-------------filter operation---------------------//

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNumd = myNum.filter((num) => num <= 6); //!implicit return (no return keyword is required )

console.log(newNumd); //-------------------------------------------//?[ 1, 2, 3, 4, 5, 6 ]

const newNum2 = myNum.filter((i) => {
  //!explicit return example
  return i <= 7;
});

console.log(newNum2);

//!-------------imagine we want to use for each method for returning values like this

//?myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const modifiedArr = [];

myNum.forEach((num) => {
  if (num <= 6) {
    modifiedArr.push(num);
  }
});

console.log(modifiedArr); //-----------------------------------------//?[ 1, 2, 3, 4, 5, 6 ]

//!-----------------------filters usage-------------------------------------//

const book = [
  {
    title: "book1",
    genre: "history",
    publish: 1289,
    edition: 2020,
  },
  {
    title: "book2",
    genre: "science",
    publish: 1999,
    edition: 2010,
  },
  {
    title: "book3",
    genre: "fantasy",
    publish: 2005,
    edition: 2015,
  },
  {
    title: "book4",
    genre: "maths",
    publish: 2012,
    edition: 2018,
  },
  {
    title: "book5",
    genre: "history",
    publish: 1987,
    edition: 2001,
  },
  {
    title: "book6",
    genre: "biography",
    publish: 1975,
    edition: 1990,
  },
  {
    title: "book7",
    genre: "science",
    publish: 2017,
    edition: 2022,
  },
  {
    title: "book8",
    genre: "romance",
    publish: 2010,
    edition: 2016,
  },
];

const userAsk = book.filter((bk) => bk.genre == "history"); //?return me the obj that has genre as history

console.log(userAsk);

const book2000 = book.filter(
  (bk) => bk.publish >= 2000 && bk.genre == "history"
); //?return me the obj that is published after 2000
console.log(book2000);

/* let result = book.find(function (item, index, array) {
  return item.genre == "history"; //? this find is used it doesent return all the values just the first one
  // if true is returned, item is returned and iteration is stopped  
  // for falsy scenario returns undefined
});

console.log(result); */
