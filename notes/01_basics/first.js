// randome s

const quotes = [
  "Honesty is the best policy",
  "Growth begins where comfort ends",
  "Time is the most expensive currency",
  "You can't pour from an empty cup",
  "Failure is feedback, not defeat",
  "Comparison is the thief of joy",
  "Discipline outlasts motivation",
  "Protect your peace like your password",
  "You attract what you tolerate",
  "Let go, or be dragged",
  "Don't chase, attract",
  "Clarity comes from action, not thought",
  "Be someone your future self will thank",
  "Small steps every day matter more than big intentions",
  "Your vibe attracts your tribe",
  "Energy flows where attention goes",
  "You are one decision away from a different life",
  "Make peace with your past so it doesn’t ruin your present",
];
// we are making a motivation quote project

//? generates random number from 1 to 18

const min = 0;
const max = 17;

let RanGenNum = `${Math.floor(Math.random() * (max - min) + min)}`;

let Name = "Devnish";

console.log(`Dear ${Name}, ${quotes[RanGenNum]}`);
