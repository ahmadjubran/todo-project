"use strict";

// Phase 1 Requirements:

const personName = prompt("Please enter your name");

const personGender = prompt(`please enter your gender
  The input should be either (male or female)`);

const personAge = function () {
  const ageValue = prompt(`Please enter your age
  (The input should be number
  and the number should be greater than zero)
  ( ( ( TRY INVALID VALUE ) ) )`);

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
  if (personGender === "male") {
    genderValue = "Mr";
  } else if (personGender === "female") {
    genderValue = "Ms";
  } else {
    genderValue = "";
  }

  if (!confirm("Do you want to skip the welcoming message")) {
  }
  alert(`Hello ${genderValue} ${personName}`);
};
welcome();

// Phase 2 Requirements:

const arr = [];

const loveHTML = function () {
  const question1 = prompt("Q1: Do you love HTML (yes or no question)");

  if (question1 === "yes") {
    arr.push("love HTML");
  } else if (question1 === "no") {
    arr.push("doesn't love HTML");
  } else {
    arr.push("invalid");
  }
};
loveHTML();

const loveCSS = function () {
  const question2 = prompt("Q2: Do you love CSS (yes or no question)");

  if (question2 === "yes") {
    arr.push("love CSS");
  } else if (question2 === "no") {
    arr.push("doesn't love CSS");
  } else {
    arr.push("invalid");
  }
};
loveCSS();

const loveJS = function () {
  const question3 = prompt("Q3: Do you love JS (yes or no question)");

  if (question3 === "yes") {
    arr.push("love JS");
  } else if (question3 === "no") {
    arr.push("doesn't love JS");
  } else {
    arr.push("invalid");
  }
};
loveJS();

let i = 0;
const loveMansaf = function () {
  if (i === 2) {
    if (confirm("Do you want to skip this question")) {
      alert("WRONG ANSWER 🤣🤣");
      i++;
    } else {
      alert("WRONG ANSWER 🤣🤣");
      i++;
    }
  }
  if (i >= 3) {
    alert("Right answer is (mansaf is the best)");
  }
  const question4 = prompt(`*****This is an OPTIONAL question***** 
  Q4: Is mansaf good (yes or no question)`);

  if (question4 === "yes") {
    alert("WRONG ANSWER");
    i++;
    loveMansaf();
  } else if (question4 === "no") {
    alert("WRONG ANSWER");
    i++;
    loveMansaf();
  } else if (question4 === "mansaf is the best") {
    arr.push("mansaf is the best");
  } else {
    alert("WRONG ANSWER");
    i++;
    loveMansaf();
  }
};
loveMansaf();

console.log(
  `${personName} ${arr[0]}, ${arr[1]}, ${arr[2]} and he says ${arr[3]}.`
);
