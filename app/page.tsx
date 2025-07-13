"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  BookOpen,
  Code2,
  FileText,
  Hash,
  Type,
  Calculator,
  GitCompare,
  Braces,
  Database,
} from "lucide-react";

const topics = [
  {
    id: "variables",
    title: "Variables & Constants",
    description: "Learn about const, let, var and their differences",
    icon: <Hash className="w-5 h-5" />,
    color: "bg-blue-500",
    content: `// Variables and Constants in JavaScript

const accountId = 123312; // always use const as a constant
let accountEmail = "kachua@gmail.com"; // always use let as a variable  
var accountcity = "banglore"; // do not use var as it has scope problems
accountname = "kachua"; // bad way to declare variables

// Key Points:
// • const - cannot be reassigned, use for constants
// • let - block-scoped, preferred for variables
// • var - function-scoped, avoid using (scope issues)
// • Never declare without keyword (creates global variable)

console.table([accountId, accountEmail, accountcity, accountname]);`,
  },
  {
    id: "datatypes",
    title: "Data Types",
    description: "Primitive vs Non-primitive types and typeof operator",
    icon: <Type className="w-5 h-5" />,
    color: "bg-green-500",
    content: `// JavaScript Data Types

// Primitive Types (7 types) - stored in Stack memory
const name = "kachua";           // String
const score = 6969;              // Number  
const isLoggedIn = false;        // Boolean
const tempOutside = null;        // Null (typeof shows "object" - JS quirk)
let value;                       // Undefined
const id = Symbol("123");        // Symbol (for unique identifiers)
const bigNumber = 1029830129n;   // BigInt (for large numbers)

// Non-primitive Types - stored in Heap memory
const myArray = ["Devnish", "twitter", "zero followers"];  // Array
const myObject = { name: "devnish", age: 17 };             // Object
const myFunction = function() { console.log("hello"); };   // Function

// Memory Management:
// Stack (Primitive) - gets copy of value
// Heap (Non-primitive) - gets reference to original object`,
  },
  {
    id: "conversion",
    title: "Type Conversion",
    description: "Converting between different data types",
    icon: <GitCompare className="w-5 h-5" />,
    color: "bg-purple-500",
    content: `// Type Conversion in JavaScript

// String to Number
let score = "31";
let valueInNumber = Number(score);  // 31
let invalidNumber = Number("31abc"); // NaN

// Conversion Rules:
// "33" => 33
// "33abc" => NaN
// true => 1, false => 0
// null => 0, undefined => NaN

// Number to Boolean
let num1 = 1;     // Boolean(num1) => true
let num2 = 0;     // Boolean(num2) => false
let num3 = -5;    // Boolean(num3) => true

// String to Boolean  
let str1 = "";        // Boolean(str1) => false (empty string)
let str2 = "hello";   // Boolean(str2) => true (non-empty string)

// Tricky Operations:
console.log("1" + 2);      // "12" (string concatenation)
console.log(1 + "2");      // "12" (string concatenation)  
console.log("1" + 2 + 2);  // "122" (left to right)
console.log(1 + 2 + "2");  // "32" (math first, then string)

// Unary + operator converts to number:
console.log(+true);   // 1
console.log(+"");     // 0`,
  },
  {
    id: "comparison",
    title: "Comparison Operators",
    description: "Understanding ==, ===, and comparison quirks",
    icon: <Calculator className="w-5 h-5" />,
    color: "bg-orange-500",
    content: `// Comparison Operators in JavaScript

// Basic Comparisons
console.log(2 > 1);   // true
console.log(2 == 1);  // false  
console.log(2 >= 1);  // true (greater than OR equal to)
console.log(2 != 1);  // true (not equal)

// String to Number Comparison
console.log("2" > 1);   // true (string converted to number)
console.log("02" > 1);  // true

// Null Comparison Quirks
console.log(null > 0);   // false
console.log(null == 0);  // false  
console.log(null >= 0);  // true

// Why? Equality (==) and comparisons (>, <, >=, <=) work differently:
// • Comparisons convert null to 0
// • Equality check doesn't convert null

// String Comparison (lexicographic)
console.log("C" > "B");  // true (Unicode comparison)

// == vs === (Equality vs Strict Equality)
console.log("9" == 9);   // true (type conversion happens)
console.log("9" === 9);  // false (no type conversion)
console.log("" == false); // true (both convert to falsy)
console.log("" === false); // false (different types)`,
  },
  {
    id: "strings",
    title: "Strings & Methods",
    description: "String manipulation and useful methods",
    icon: <FileText className="w-5 h-5" />,
    color: "bg-pink-500",
    content: `// Strings in JavaScript

// String Declaration
const name = "kachua";
const repoCount = 50;

// String Interpolation (Template Literals)
console.log(\`Hello my name is \${name} and my repo count is \${repoCount}\`);

// String Object vs Primitive
const primitiveStr = "hello";        // primitive (stack)
const objectStr = new String("hello"); // object (heap)

// String Methods - Searching
let text = "Devnish is great";
console.log(text.indexOf("i"));        // 4 (first occurrence)
console.log(text.lastIndexOf("t"));    // 15 (last occurrence)  
console.log(text.includes("is"));      // true
console.log(text.startsWith("Devnish")); // true
console.log(text.endsWith("great"));   // true

// String Methods - Modifying
console.log(text.replace("is", "was")); // "Devnwash was great"
console.log(text.slice(0, 6));         // "Devnis"
console.log(text.toLowerCase());       // "devnish is great"
console.log(text.toUpperCase());       // "DEVNISH IS GREAT"
console.log(text.trim());              // removes whitespace
console.log(text.split(" "));          // ["Devnish", "is", "great"]

// Useful Methods
console.log("5".padStart(3, "0"));     // "005"
console.log("5".padEnd(3, "0"));       // "500"
console.log(text.repeat(2));           // repeats string twice`,
  },
  {
    id: "numbers",
    title: "Numbers & Math",
    description: "Working with numbers and Math object methods",
    icon: <Calculator className="w-5 h-5" />,
    color: "bg-indigo-500",
    content: `// Numbers and Math in JavaScript

// Number Declaration
let score = 300;                    // primitive number
let newScore = new Number(32297);   // Number object

// Number Methods
let num = 12345.6789;
console.log(num.toString());        // "12345.6789"
console.log(num.toFixed(2));        // "12345.68" (2 decimal places)
console.log(num.toPrecision(6));    // "12345.7" (6 total digits)
console.log(num.toExponential(2));  // "1.23e+4"

// Number Properties
console.log(Number.MAX_VALUE);      // 1.7976931348623157e+308
console.log(Number.MIN_VALUE);      // 5e-324
console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(Number.NaN);            // NaN

// Number Validation
console.log(Number.isNaN(num));     // false
console.log(Number.isFinite(num));  // true  
console.log(Number.isInteger(num)); // false
console.log(Number.parseInt("42px")); // 42
console.log(Number.parseFloat("42.42px")); // 42.42

// Math Object Methods
console.log(Math.abs(-7));          // 7 (absolute value)
console.log(Math.round(4.6));       // 5 (round to nearest)
console.log(Math.ceil(4.2));        // 5 (round up)
console.log(Math.floor(4.8));       // 4 (round down)
console.log(Math.min(1, 2, 3));     // 1
console.log(Math.max(1, 2, 3));     // 3
console.log(Math.random());         // random 0-1
console.log(Math.pow(2, 3));        // 8 (2^3)
console.log(Math.sqrt(16));         // 4`,
  },
  {
    id: "arrays-basics",
    title: "Arrays - Basics",
    description: "Array creation, indexing, and basic methods",
    icon: <Braces className="w-5 h-5" />,
    color: "bg-emerald-500",
    content: `// Arrays in JavaScript

// Array Creation Methods
const myArr = ["Devnish", "04T18", "gangwar", 1, 2];  // Array literal
const myArr1 = new Array();                           // Array constructor

// Array Copy Operations (Important!)
// Arrays make SHALLOW copies (share same reference)
// NOT deep copies (independent copies)

// Accessing Elements
console.log(myArr[0]);  // "Devnish"
console.log(myArr[3]);  // 1

// Modifying Elements
myArr[0] = "samirande";  // Changes original array

// Basic Array Methods
myArr.push("nishank is the goat");    // Add to end
myArr.unshift("nishank is better");   // Add to beginning
myArr.pop();                          // Remove from end  
myArr.shift();                        // Remove from beginning

// Searching in Arrays
console.log(myArr.includes("gangwar"));  // true (element exists?)
console.log(myArr.indexOf("gangwar"));   // 2 (element position)

// Slice vs Splice (IMPORTANT DIFFERENCE!)
const ogArr = [0, 1, 2, 3, 4, 5, 6];

// SLICE - doesn't modify original array
const slArr = ogArr.slice(1, 3);  // [1, 2] - extracts elements
console.log(ogArr);  // [0, 1, 2, 3, 4, 5, 6] - unchanged

// SPLICE - modifies original array  
const spArr = ogArr.splice(1, 3);  // [1, 2, 3] - removes elements
console.log(ogArr);  // [0, 4, 5, 6] - modified!`,
  },
  {
    id: "arrays-advanced",
    title: "Arrays - Advanced",
    description: "Combining arrays, flattening, and array creation methods",
    icon: <Braces className="w-5 h-5" />,
    color: "bg-cyan-500",
    content: `// Advanced Array Operations

const mvHeroes = ["thor", "ironman", "hulk"];
const dcHeroes = ["superman", "Batman"];

// Problem: Adding array as element (nested array)
mvHeroes.push(dcHeroes);  
// Result: ["thor", "ironman", "hulk", ["superman", "Batman"]]
// Access: mvHeroes[3][0] to get "superman"

// Solution 1: concat() - combines arrays (limitation: only 2 arrays)
const allHeroes = mvHeroes.concat(dcHeroes);
// Result: ["thor", "ironman", "hulk", "superman", "Batman"]

// Solution 2: Spread Operator (...) - can combine multiple arrays
const allNewHeroes = [...dcHeroes, ...mvHeroes, ...allHeroes];

// Flattening Nested Arrays
let nestedArray = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
let flatArray = nestedArray.flat(4);  // Specify depth level
// Result: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Array Checking and Creation
console.log(Array.isArray("Chatpati chaat"));  // false

// Create array from string
console.log(Array.from("Chatpati chaat"));  
// Result: ['C','h','a','t','p','a','t','i',' ','c','h','a','a','t']

// Create array from object (returns empty array if not iterable)
console.log(Array.from({name: "Chatpati chaat", age: 17}));  // []

// Create array from variables
let score1 = 100, score2 = 200, score3 = 300;
console.log(Array.of(score1, score2, score3));  // [100, 200, 300]`,
  },
  {
    id: "objects-basics",
    title: "Objects - Basics",
    description: "Object creation, properties, and symbols",
    icon: <Database className="w-5 h-5" />,
    color: "bg-violet-500",
    content: `// Objects in JavaScript

// Object Creation Methods
let user0 = new Object();  // Constructor syntax (creates singleton)
let user = {};             // Literal syntax (doesn't create singleton)

// Using Symbols as Object Keys
let mySym = Symbol("Mysymbol");

let user = {
  name: "nishank",
  age: 18,
  location: "jaipur", 
  email: "nishank@gmail.com",
  isLoggedIn: true,
  mySym: "nishank",      // String key "mySym"
  [mySym]: "nishank"     // Symbol key (actual symbol)
};

// Accessing Object Properties
console.log(user.name);        // Dot notation
console.log(user["email"]);    // Bracket notation
console.log(user[mySym]);      // Symbol access

// Modifying Object Properties
user.name = "devnish";
console.log(user);

// Freezing Objects (prevents modifications)
Object.freeze(user);
user.name = "won't change";  // This won't work after freeze

// Adding Functions to Objects
user.greeting = function() {
  console.log(\`Hello, JS User your age is \${this.age}\`);
};

console.log(user.greeting());  // Call the function

// Key Points:
// • Objects store key-value pairs
// • Use symbols for unique keys
// • this keyword refers to the object
// • Object.freeze() prevents modifications`,
  },
  {
    id: "objects-advanced",
    title: "Objects - Advanced",
    description: "Nested objects, combining, destructuring, and APIs",
    icon: <Database className="w-5 h-5" />,
    color: "bg-rose-500",
    content: `// Advanced Object Operations

// Object Constructor vs Literal
let consObj = new Object();  // Constructor (singleton)
const tinderUser = {};       // Literal

// Adding Properties
tinderUser.id = "123abc";
tinderUser.email = "google@gmail.com";
tinderUser.lambai = 6;

// Nested Objects
const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "hitesh",
      lastname: "chaudhary"
    }
  }
};

// Accessing Nested Properties
console.log(regularUser.fullname.userfullname.firstname);  // "hitesh"

// Combining Objects
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

// Method 1: Spread Operator (Recommended)
const combined = { ...obj1, ...obj2 };

// Method 2: Object.assign()
const obj3 = Object.assign({}, obj1, obj2);

// Working with Array of Objects (Database-like)
const users = [
  { id: 1, email: "nishank@gmail.com" },
  { id: 2, email: "new@gmail.com" },
  { id: 3, email: "nishank" }
];

console.log(users[2].email);  // Access third user's email

// Object Methods
let newUser = { id: 1, email: "devnish", isLoggedIn: true };

console.log(Object.keys(newUser));    // ["id", "email", "isLoggedIn"]
console.log(Object.values(newUser));  // [1, "devnish", true]
console.log(newUser.hasOwnProperty("isLoggedIn"));  // true

// Object Destructuring
const course = {
  courseName: "js in hindi",
  price: 999,
  courseInstructor: "hitesh sir"
};

// Instead of: course.courseInstructor
const { courseInstructor } = course;
console.log(courseInstructor);  // "hitesh sir"

// JSON API Structure
// Objects: { "name": "nishank", "price": "free" }
// Arrays: [ {}, {}, {} ]`,
  },
  {
    id: "memory",
    title: "Memory Management",
    description: "Stack vs Heap memory and how data is stored",
    icon: <Database className="w-5 h-5" />,
    color: "bg-teal-500",
    content: `// Memory Management in JavaScript

// Stack Memory (Primitive Types)
// - Stores actual values
// - Creates copies when assigned
let userEmail = "user@gmail.com";
let anotherUserEmail = userEmail;  // Gets a COPY
anotherUserEmail = "another@gmail.com";

console.log(userEmail);        // "user@gmail.com" (unchanged)
console.log(anotherUserEmail); // "another@gmail.com"

// Heap Memory (Non-primitive Types)  
// - Stores references to objects
// - Multiple variables can reference same object
let user = {
  email: "pawan@gmail.com",
  age: 34
};

let user2 = user;  // Gets REFERENCE to same object
user2.email = "rahul@gmail.com";  // Modifies the original object

console.log(user.email);   // "rahul@gmail.com" (changed!)
console.log(user2.email);  // "rahul@gmail.com" (same reference)

// Key Takeaway:
// • Primitives: Pass by VALUE (copy)
// • Objects: Pass by REFERENCE (shared)`,
  },
  {
    id: "function1",
    title: "function-basics",
    description: "how function is declared and called, parameters , arguments",
    icon: <Database className="w-5 h-5" />,
    color: "bg-teal-500",
    content: `/function declaredname(parameters) {
  // inside of function
}

// calling a function
declaredname(arguments);

function sayMyName() {
  // this is a function declaration
  console.log("H");
  console.log("I");
  console.log("T");
  console.log("e");
  console.log("S");
  console.log("H");
}

sayMyName; // nothing happens as this only tells us where the function is

sayMyName(); // actually calling the function happens here

function addTwoNumber(number1, number2) {
  Number(number1);
  Number(number2);
  console.log(number1 + number2);
}

const result2 = addTwoNumber(1, null);

console.log(result2); // undefined - here result in itself doesn't hold any value;

//! to make them store any value we have to do

function addThreeNumber(N1, N2, N3) {
  return N1 + N2 + N3;
  console.log("hitesh"); // nothing is printed after return
}

const result = addThreeNumber(1, 7, 3);

console.log("result : " + result);

//

function loginUserMessage(username /*this is parameter */) {
  return username + " just logged in"; /*this is now traditional string concatenation */
}

const user9 = loginUserMessage("sharma ji" /*this is argument */);

console.log(user9);
// if the username is converted into empty then it returns //! undefined instead of null so

// a simple if statement introduced

function username1(username) {
  if (username != undefined) {
    console.log(username + " just logged in");
  } else {
    console.log("username is not defined");
  }
}

console.log(username1("rahuaji"));

// new way of writing this function

function username2(username) {
  if (!username) {
    // username nahi doge to mai ye bolunga,,
    console.log("username is not defined");
  }
  return username + " just logged out";
}

console.log(username2());

//!Default parameter

function username3(username = "hello sir") {
  return username + " just logged inside you";
}

console.log(username3("rahuaji ")); // if no argument is passed then it takes the default value

// anonymous function
//! this shit is cool you can just declare a without any name function and directly run it

// these functions are called function //?expressions
// normal functions are called function //?declarations

(function () {
  console.log("hello");
})();

//------------------------------------------------------------------video number 20-----------------------------------------------------------------------//

function addCartPrize(...num1) {
  return console.log(num1); //?[ 1, 2, 3, 4, 5 ]
}
addCartPrize(1, 2, 3, 4, 5); // returns [in array]

/*...num1 here this operator is too known as //?rest operator*/

// another type

function addCartPrize2(val1, val2, ...val3) {
  return console.log(val3, val1, val2); //? [ 3, 4, 5, 6, 7 ] 1 2
}
addCartPrize2(1, 2, 3, 4, 5, 6, 7);

// here val1 = 1, val2 = 2, rest of the value is in array [3, 4, 5, 6, 7]

//! handling object in function

let user = {
  name: "rahuaji",
  age: 17,
  phoneNumber: 9233343823498,
  college: "why would I tell you",
  class: "12d",
  fathersname: "sharma ji sahab",
  timing: "38pm",
};

let newUser = {
  name: "chotesharma ji",
  age: 13,
  phoneNumber: 9233343823498,
  college: "chandigarh university",
  class: "10d",
  fathersname: "sharma ji sahab",
  timings: "12pm",
};

function handleObject(anyobject) {
  return console.log(
    "Mr " + anyobject.name +
    " son of Mr " + anyobject.fathersname +
    " of age " + anyobject.age +
    " from class " + anyobject.class +
    "\nis required to get back to work at your time " + anyobject.timings
  );
}

handleObject(user);
// or
handleObject({
  fathersname: "nanhe khan",
  age: 12,
  class: "3rd",
  price: 399,
});

//! handling array in function

const myArr = [200, 300, 350, 400];

function handleArray(anyArr = [2000, 1231, 123, 3212]) {
  return console.log(
    "the pencil costs " + anyArr[0] + "\n" +
    "the pen costs " + anyArr[1] + "\n" +
    "the eraser costs " + anyArr[2] + "\n" +
    "the ruler costs " + anyArr[3]
  );
}

handleArray(); // this will run the function with default value
handleArray(myArr); // this will run the function with actual value (from the array)
handleArray([100, 200, 300, 400]);


// 🔑 Key Takeaways:

// • Function Declaration: 
//   Can be called before it's defined in code (hoisted).

// • Function Expression: 
//   Stored in a variable; not hoisted.

// • Anonymous Functions: 
//   Functions without a name, often used in expressions.

// • IIFE (Immediately Invoked Function Expression): 
//   Runs immediately after it's defined.
//   (function() { ... })();

// • return vs console.log:
//   - return gives back a value to be used later.
//   - console.log just prints to the console.
//   - Code after return is ignored.

// • Parameter vs Argument:
//   - Parameter is the placeholder (in function definition).
//   - Argument is the real value (during function call).

// • Default Parameters:
//   Provide fallback values when arguments are missing.
//   function greet(name = "Guest") { ... }

// • Checking undefined parameters:
//   Use (!param) or param === undefined for safety.

// • Rest Operator (...):
//   Collects multiple arguments into an array.
//   function sum(...numbers) { ... }

// • Handling Objects in Functions:
//   Pass objects to functions for grouped data.
//   Access properties via obj.key

// • Handling Arrays in Functions:
//   Pass arrays as arguments.
//   Access values with index: arr[0], arr[1], ...

// • Primitives: Pass by VALUE (copy)
//   e.g., let x = 5; let y = x; y++ doesn't affect x

// • Objects/Arrays: Pass by REFERENCE (shared)
//   Changing the object inside a function affects the original

// • Template Literals vs Concatenation:
//   - {username} just logged in → modern & cleaner
//   - "username just logged in" + username → old-school

// • Always call a function with () to execute it.
//   Just writing the name won't do anything.
`,
  },
];

export default function JavaScriptNotes() {
  const [activeTopicId, setActiveTopicId] = useState("variables");
  const activeTopic =
    topics.find((topic) => topic.id === activeTopicId) || topics[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm dark:bg-slate-900/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                JavaScript Learning Notes
              </h1>
              <p className="text-sm text-muted-foreground">
                Comprehensive guide to JavaScript fundamentals
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="text-lg">Topics</CardTitle>
                <CardDescription>
                  Click on any topic to view detailed notes
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <ScrollArea className="h-[calc(100vh-200px)]">
                  <div className="space-y-2 p-4">
                    {topics.map((topic) => (
                      <Button
                        key={topic.id}
                        variant={
                          activeTopicId === topic.id ? "default" : "ghost"
                        }
                        className="w-full justify-start gap-3 h-auto p-3"
                        onClick={() => setActiveTopicId(topic.id)}
                      >
                        <div
                          className={`p-1.5 rounded ${topic.color} text-white`}
                        >
                          {topic.icon}
                        </div>
                        <div className="text-left">
                          <div className="font-medium">{topic.title}</div>
                          <div className="text-xs text-muted-foreground">
                            {topic.description}
                          </div>
                        </div>
                      </Button>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2 rounded-lg ${activeTopic.color} text-white`}
                  >
                    {activeTopic.icon}
                  </div>
                  <div>
                    <CardTitle className="text-2xl">
                      {activeTopic.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {activeTopic.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Code Block */}
                  <div className="relative">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="secondary" className="gap-1">
                        <Code2 className="w-3 h-3" />
                        JavaScript
                      </Badge>
                    </div>
                    <div className="bg-slate-900 rounded-lg p-6 overflow-x-auto">
                      <pre className="text-sm text-slate-100">
                        <code>{activeTopic.content}</code>
                      </pre>
                    </div>
                  </div>

                  {/* Key Points Section */}
                  <div className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
                    <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-3 flex items-center gap-2">
                      <Braces className="w-4 h-4" />
                      Key Takeaways
                    </h3>
                    <div className="text-sm text-blue-800 dark:text-blue-200">
                      {getKeyTakeaways(activeTopic.id)}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t bg-white/80 backdrop-blur-sm dark:bg-slate-900/80 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-muted-foreground">
            <p>
              JavaScript Learning Notes • Built with Next.js and Tailwind CSS
            </p>
            <p className="text-sm mt-2">Keep learning and coding! 🚀</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function getKeyTakeaways(topicId: string) {
  const takeaways = {
    variables: (
      <ul className="space-y-2">
        <li>
          • Always use{" "}
          <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">
            const
          </code>{" "}
          for values that won't change
        </li>
        <li>
          • Use{" "}
          <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">let</code>{" "}
          for variables that will change
        </li>
        <li>
          • Avoid{" "}
          <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">var</code>{" "}
          due to scope issues
        </li>
        <li>• Never declare variables without keywords (creates globals)</li>
      </ul>
    ),
    datatypes: (
      <ul className="space-y-2">
        <li>
          • 7 primitive types: String, Number, Boolean, null, undefined, Symbol,
          BigInt
        </li>
        <li>• 3 non-primitive types: Array, Object, Function</li>
        <li>• Primitives stored in Stack (copy by value)</li>
        <li>• Non-primitives stored in Heap (copy by reference)</li>
      </ul>
    ),
    conversion: (
      <ul className="space-y-2">
        <li>
          • Use{" "}
          <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">
            Number()
          </code>
          ,{" "}
          <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">
            String()
          </code>
          ,{" "}
          <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">
            Boolean()
          </code>{" "}
          for explicit conversion
        </li>
        <li>• String + Number = String concatenation</li>
        <li>• Empty string and 0 are falsy values</li>
        <li>• Unary + operator converts to number</li>
      </ul>
    ),
    comparison: (
      <ul className="space-y-2">
        <li>
          • Use{" "}
          <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">===</code>{" "}
          for strict equality (no type conversion)
        </li>
        <li>
          • Use{" "}
          <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">==</code>{" "}
          allows type conversion (can be tricky)
        </li>
        <li>• Comparison operators convert null to 0</li>
        <li>• String comparison is lexicographic (Unicode based)</li>
      </ul>
    ),
    strings: (
      <ul className="space-y-2">
        <li>
          • Use template literals{" "}
          <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">
            `${}`
          </code>{" "}
          for string interpolation
        </li>
        <li>• Strings are immutable - methods return new strings</li>
        <li>
          •{" "}
          <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">
            slice()
          </code>
          ,{" "}
          <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">
            split()
          </code>
          ,{" "}
          <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">
            replace()
          </code>{" "}
          are commonly used
        </li>
        <li>
          • Use{" "}
          <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">
            trim()
          </code>{" "}
          to remove whitespace
        </li>
      </ul>
    ),
    numbers: (
      <ul className="space-y-2">
        <li>
          • Use{" "}
          <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">
            toFixed()
          </code>{" "}
          for decimal places
        </li>
        <li>
          •{" "}
          <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">
            Math.random()
          </code>{" "}
          generates 0-1 random numbers
        </li>
        <li>
          •{" "}
          <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">
            parseInt()
          </code>{" "}
          and{" "}
          <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">
            parseFloat()
          </code>{" "}
          for string to number
        </li>
        <li>
          • Always validate numbers with{" "}
          <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">
            isNaN()
          </code>
        </li>
      </ul>
    ),
    "arrays-basics": (
      <ul className="space-y-2">
        <li>• Arrays make shallow copies (share references)</li>
        <li>
          •{" "}
          <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">
            slice()
          </code>{" "}
          doesn't modify original,{" "}
          <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">
            splice()
          </code>{" "}
          does
        </li>
        <li>
          • Use{" "}
          <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">
            push()
          </code>
          /
          <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">
            pop()
          </code>{" "}
          for end,{" "}
          <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">
            unshift()
          </code>
          /
          <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">
            shift()
          </code>{" "}
          for beginning
        </li>
        <li>
          •{" "}
          <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">
            includes()
          </code>{" "}
          and{" "}
          <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">
            indexOf()
          </code>{" "}
          for searching
        </li>
      </ul>
    ),
    "arrays-advanced": (
      <ul className="space-y-2">
        <li>
          • Use spread operator{" "}
          <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">...</code>{" "}
          to combine multiple arrays
        </li>
        <li>
          •{" "}
          <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">
            flat()
          </code>{" "}
          method flattens nested arrays
        </li>
        <li>
          •{" "}
          <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">
            Array.from()
          </code>{" "}
          creates arrays from iterables
        </li>
        <li>
          •{" "}
          <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">
            Array.of()
          </code>{" "}
          creates arrays from arguments
        </li>
      </ul>
    ),
    "objects-basics": (
      <ul className="space-y-2">
        <li>
          • Use symbols{" "}
          <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">
            [Symbol()]
          </code>{" "}
          for unique object keys
        </li>
        <li>
          •{" "}
          <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">
            Object.freeze()
          </code>{" "}
          prevents object modifications
        </li>
        <li>
          •{" "}
          <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">
            this
          </code>{" "}
          keyword refers to the current object
        </li>
        <li>• Objects can contain functions as properties (methods)</li>
      </ul>
    ),
    "objects-advanced": (
      <ul className="space-y-2">
        <li>
          • Use spread operator{" "}
          <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">...</code>{" "}
          to combine objects
        </li>
        <li>
          •{" "}
          <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">
            Object.keys()
          </code>
          ,{" "}
          <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">
            Object.values()
          </code>{" "}
          return arrays
        </li>
        <li>• Destructuring extracts properties</li>
        <li>• JSON format is used for APIs and data exchange</li>
      </ul>
    ),
    memory: (
      <ul className="space-y-2">
        <li>• Primitives: stored in Stack, passed by value</li>
        <li>• Objects: stored in Heap, passed by reference</li>
        <li>• Modifying object properties affects all references</li>
        <li>
          • Use spread operator{" "}
          <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">...</code>{" "}
          to create copies
        </li>
      </ul>
    ),
  };

  return (
    takeaways[topicId as keyof typeof takeaways] || (
      <p>Key concepts for this topic.</p>
    )
  );
}
