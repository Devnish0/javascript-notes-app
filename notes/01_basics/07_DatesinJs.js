//----------------------------------------- Dates-----------------------------------------//

let NewDate = new Date();
console.log(NewDate); //2025-07-04T17:36:37.535Z
console.log(NewDate.toString()); //Fri Jul 04 2025 23:06:37 GMT+0530 (India Standard Time)
console.log(NewDate.getDate()); //gives date
console.log(NewDate.getFullYear());
console.log(NewDate.getTime()); ///1751650781118 this time is compared to the january 1 1970;
console.log(NewDate.toDateString()); ///1751650781118 this time is compared to the january 1 1970; in milisecond
console.log(NewDate.getFullYear());
console.log(NewDate.toLocaleString()); //7/4/2025, 11:54:08 PM

let x = Math.abs(NewDate.getHours() - 24);

console.log(
  `you mother fucker you only have ${x} hours of time to do your shit`
);

//! dates can also be created on your own

let my_created_date = new Date(2023, 11, 30, 12, 2, 11);
console.log(my_created_date.toLocaleString());

// now coming to the another thing comparision of time for quiz apps and hotel booking apps

const OgTimeStamp = Date.now();
console.log(OgTimeStamp); // this is the time from 1 jan 1970 in miliseconds

const BookingTimeStamp = my_created_date.getTime();
console.log(BookingTimeStamp); // this gives the time in milisecond from 1 jan 1970 to the required date

//comparision of the two

const ogTime = Math.ceil(OgTimeStamp / 1000);
const myTime = Math.ceil(my_created_date / 1000);
console.log(ogTime - myTime); // we can created multiple things iwth this\\

// we can make it in better form

console.log(NewDate);
console.log(
  NewDate.toLocaleString("default", {
    minute: "2-digit",
    second: "numeric",
    hour: "2-digit",
    hourCycle: "h12",
    timeZoneName: "longOffset",
  })
);

// Ai notes
//----------------------------------------- Dates-----------------------------------------//

// console.log(NewDate);
// // 2025-07-04T18:30:00.000Z (Date object)
// // Current date and time (Date object)

// console.log(NewDate.toString());
// // "Fri Jul 04 2025 18:30:00 GMT+0000 (Coordinated Universal Time)"
// // Human-readable string of date and time

// console.log(NewDate.getDate());
// // 4
// // Day of the month (1-31)

// console.log(NewDate.getFullYear());
// // 2025nishank-gangwar@nishank-gangwar-ThinkPad-T14-Gen-1
// // Full year (e.g., 2025)

// console.log(NewDate.getMonth());
// // 6
// // Month (0-11, 0 = January; 6 = July)

// console.log(NewDate.getDay());
// // 5
// // Day of the week (0-6, 0 = Sunday; 5 = Friday)

// console.log(NewDate.getHours());
// // 18
// // Hours (0-23)

// console.log(NewDate.getMinutes());
// // 30
// // Minutes (0-59)

// console.log(NewDate.getSeconds());
// // 0
// // Seconds (0-59)

// console.log(NewDate.getMilliseconds());
// // 0
// // Milliseconds (0-999)

// console.log(NewDate.getTime());
// // 1751653800000
// // Milliseconds since Jan 1, 1970 (Unix Epoch)

// console.log(NewDate.getTimezoneOffset());
// // 0
// // Difference from UTC in minutes

// console.log(NewDate.toDateString());
// // "Fri Jul 04 2025"
// // Date as a readable string

// console.log(NewDate.toISOString());
// // "2025-07-04T18:30:00.000Z"
// // ISO format string

// console.log(NewDate.toLocaleDateString());
// // "7/4/2025"
// // Date in local format

// console.log(NewDate.toLocaleTimeString());
// // "6:30:00 PM"
// // Time in local format

// console.log(NewDate.toLocaleString());
// // "7/4/2025, 6:30:00 PM"
// // Date and time in local format

// // Setters (examples)
// // NewDate.setFullYear(2030); // Set year to 2030
// // NewDate.setMonth(0); // Set month to January (0)
// // NewDate.setDate(15); // Set day of the month to 15
// // NewDate.setHours(10); // Set hours to 10
// // NewDate.setMinutes(30); // Set minutes to 30
// // NewDate.setSeconds(45); // Set seconds to 45
