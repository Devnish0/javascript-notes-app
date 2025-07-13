// object in constructor form ~~~ forms singleton

/* example  */ let ConsObj = new Object();

const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.email = "google@gmail.com";
tinderUser.lambai = 6;

console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "hitesh",
      lastname: "chaudhary",
    },
  },
};

console.log(regularUser.fullname.userfullname.firstname);

// combining two objects

const obj1 = {
  1: "a",
  2: "b",
};

const obj2 = {
  3: "a",
  4: "b",
};

/*this will be the main one*/ console.log({ ...obj1, ...obj2 }); // spread operator

//or anothe r way

const obj3 = Object.assign({} /*target */, /* source*/ obj1, obj2);

console.log(obj3);

// when data comes from the database

//? comes from array

// how to call the data in this way

const userId123 = [
  {
    id: 1,
    email: " nishank@gmail.com",
  },
  {
    id: 2,
    email: "new@gmail",
  },
  {
    id: 3,
    email: "nishank",
  },
];

// imagine we want to call the third ids email

console.log(userId123[2].email); // this is the way

// we can also use the methods to get the keys / values
//!(will be in array )

let newUser = {
  id: 1,
  email: "devnish",
  isLoggedIn: true,
};

//? Some people overthink every move.
//? Some people just start.
//? Same goal.

// you want only keys

console.log(Object.keys(newUser)); //[ 'id', 'email', 'isLoggedIn' ]

//you want only values

console.log(Object.values(newUser)); //[ 1, 'nishank', true ]

//want to know if this key exists or not

console.log(newUser.hasOwnProperty("isLoggedIn")); //true

//----------------------------destructuring and json api ---------------//

const course = {
  courseName: "js in hindi",
  price: 999,
  courseInstructor: "hitesh sir",
};

// to make our life easy and not call the value via this method

console.log(course.courseInstructor);

// we can use this

const { courseInstructor: sir } = course;

console.log(sir);

//! apis

// apis code in json structure how does it looks

{
  "name" = "nishank";
  "gangwar" = true;
  "price" = "free";

}

//or

[
  {},
  {},
  {}

]
