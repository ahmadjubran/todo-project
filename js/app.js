"use strict";

// Phase 1 Requirements:

const personName = prompt("Please enter your name");

const personGender = prompt(
  `please enter your gender
  The input should be either (male or female)`
);

const personAge = function () {
  const ageValue = prompt(
    `Please enter your age
  (The input should be number
  and the number should be greater than zero)
  ( ( ( TRY INVALID VALUE ) ) )`
  );

  if (ageValue > 0) {
    return ageValue;
  } else {
    alert("Invalid value");
    personAge();
  }
};
personAge();

const welcome = function () {
  let genderValue;
  if (personGender.toLowerCase() === "male") {
    genderValue = "Mr";
  } else if (personGender.toLowerCase() === "female") {
    genderValue = "Ms";
  } else {
    genderValue = "";
  }

  if (!confirm("Do you want to skip the welcoming message")) {
    alert(`Hello ${genderValue} ${personName}`);
  }
};
welcome();

// Phase 2 Requirements:

const arr = [];

function askQuestion(question, output) {
  let answer = prompt(question);

  if (answer.toLowerCase() === "yes") {
    arr.push(`love ${output}`);
  } else if (answer.toLowerCase() === "no") {
    arr.push(`doesn't love ${output}`);
  } else {
    arr.push("invalid");
  }
}

const answer1 = askQuestion(
  "Q1: Do you love HTML (yes or no question)",
  "HTML"
);
const answer2 = askQuestion("Q2: Do you love CSS (yes or no question)", "CSS");
const answer3 = askQuestion("Q3: Do you love JS (yes or no question)", "JS");

traverse(arr);
function traverse(array) {
  for (let i = 0; i < arr.length; i++) {
    console.log(array[i]);
  }

}

// Mansaf
// const loveMansaf = function () {
//   let i = 0;
//   if (i === 2) {
//     if (confirm("Do you want to skip this question")) {
//       alert("WRONG ANSWER 🤣🤣");
//       i++;
//     } else {
//       alert("WRONG ANSWER 🤣🤣");
//       i++;
//     }
//   }
//   if (i >= 3) {
//     alert("Right answer is (mansaf is the best)");
//   }
//   const mansaf = prompt(`*****This is an OPTIONAL question*****
//   Q4: Is mansaf good (yes or no question)`);

//   if (mansaf.toLowerCase() === "mansaf is the best") {
//     return;
//   } else {
//     alert("WRONG ANSWER");
//     i++;
//     loveMansaf();
//   }
// };
// loveMansaf();