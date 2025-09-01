//!-----------------reduce is used to add the numbers inside the array--------------------//
//? basic syntax
/*
arr.reduce(function declaration (accumulator,currentvalue){
    anything
    }the initial value that you want to start with) 
 */
//? basic exalmple of reduce

const myNums = [1, 2, 3, 4];
const totalArr = myNums.reduce(function (accumulator, currentvalue) {
  return accumulator + currentvalue;
}, 0);
// console.log(totalArr);

//?writing same syntax in arrow function

const totalArr0 = myNums.reduce(
  (accumulator, currentvalue) => accumulator + currentvalue,
  0
);

console.log(totalArr0);

//? deaing with object in array
const shoppingCart = [
  {
    itemName: "Science Course",
    price: 299,
  },
  {
    itemName: "History Course",
    price: 199,
  },
  {
    itemName: "Math Course",
    price: 349,
  },
  {
    itemName: "English Course",
    price: 249,
  },
];

//*add the prices in the shopping cart

const totalPrice = shoppingCart.reduce((acc, curr) => acc + curr.price, 0);

console.log(totalPrice);
