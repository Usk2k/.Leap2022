let name = usk2k;
console.log(name);

let myAge = 16;

if (myAge < 11) {
  console.log(" you are in your baby state");
} else if (myAge < 18) {
  console.log("you are in your teens state");
} else if (myAge < 40) {
  console.log("you are in your adult state");
} else {
  console.log("you are in your old state");
}

let day = 8;

if (day == 1) {
  console.log("davaa");
} else if (day == 2) {
  console.log("mygmar");
} else if (day == 3) {
  console.log("lkhagva");
} else if (day == 4) {
  console.log(" purev");
} else if (day == 5) {
  console.log("baasan");
} else if (day == 6) {
  console.log("byamba");
} else if (day == 7) {
  console.log("nyam");
} else if (day < 1 || day > 7) {
  console.log("error");
}

let weekday = 10;
let weekname;

if (weekday == 1) {
  weekname = "monday";
} else if (weekday == 2) {
  weekname = "tuesday";
} else if (weekday == 3) {
  weekname = "wednesday";
}

switch (weekday) {
  case 1:
    console.log("monday");
    break;
  case 2:
    console.log("tuesday");
    break;
  default:
    console.log("Not a day");
}

if (
  weekday == 1 ||
  weekday == 2 ||
  weekday == 3 ||
  weekday == 4 ||
  weekday == 5
) {
  console.log("working day");
}

let x = 10;
y = 20;
z = 30;

if (x > y) {
  if (x > y) {
    comsole.log(x, "n hamgin ih");
  } else {
    comsole.log(z, "n hamgin");
  }
} else {
  console.log(y, "");
}

if (x > y && x > z) {
  console.log(x, "n hamgin ih");
} else if (y > z) {
  console.log(y, "n hamgin ih");
} else {
  console.log(z, "n hamgin ih");
}

let age = 15;

if (age < 21) {
  console.log("you are not allowed to drink alchohol");
} else {
  console.log("you are allowed to drink alchohol");
}

age < 21
  ? console.log("you are not allowed to drink alchohol")
  : console.log("you are allowed to drink alchohol");

condition ? true : false;
const myStage = age >= 10 && age <= 18 ? "teenage" : "adult";
