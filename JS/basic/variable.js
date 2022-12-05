// let name = usk2k;
// console.log(name);

// let myAge = 16;

// if (myAge < 11) {
//   console.log(" you are in your baby state");
// } else if (myAge < 18) {
//   console.log("you are in your teens state");
// } else if (myAge < 40) {
//   console.log("you are in your adult state");
// } else {
//   console.log("you are in your old state");
// }

// let day = 8;

// if (day == 1) {
//   console.log("davaa");
// } else if (day == 2) {
//   console.log("mygmar");
// } else if (day == 3) {
//   console.log("lkhagva");
// } else if (day == 4) {
//   console.log(" purev");
// } else if (day == 5) {
//   console.log("baasan");
// } else if (day == 6) {
//   console.log("byamba");
// } else if (day == 7) {
//   console.log("nyam");
// } else if (day < 1 || day > 7) {
//   console.log("error");
// }

// let weekday = 10;
// let weekname;

// if (weekday == 1) {
//   weekname = "monday";
// } else if (weekday == 2) {
//   weekname = "tuesday";
// } else if (weekday == 3) {
//   weekname = "wednesday";
// }

// switch (weekday) {
//   case 1:
//     console.log("monday");
//     break;
//   case 2:
//     console.log("tuesday");
//     break;
//   default:
//     console.log("Not a day");
// }

// if (
//   weekday == 1 ||
//   weekday == 2 ||
//   weekday == 3 ||
//   weekday == 4 ||
//   weekday == 5
// ) {
//   console.log("working day");
// }

// let x = 10;
// y = 20;
// z = 30;

// if (x > y) {
//   if (x > y) {
//     comsole.log(x, "n hamgin ih");
//   } else {
//     comsole.log(z, "n hamgin");
//   }
// } else {
//   console.log(y, "");
// }

// if (x > y && x > z) {
//   console.log(x, "n hamgin ih");
// } else if (y > z) {
//   console.log(y, "n hamgin ih");
// } else {
//   console.log(z, "n hamgin ih");
// }

// let age = 15;

// if (age < 21) {
//   console.log("you are not allowed to drink alchohol");
// } else {
//   console.log("you are allowed to drink alchohol");
// }

// age < 21
//   ? console.log("you are not allowed to drink alchohol")
//   : console.log("you are allowed to drink alchohol");

// condition ? true : false;
// const myStage = age >= 10 && age <= 18 ? "teenage" : "adult";

// let number = 20000;
// let strNum = number.toString();
// console.log(typeof strNum);
// console.log(typeof number);

// let count = 1;
// while (count <= 10) {
//   console.log(count);
//   count = count + 1;
// }

// let countB = 0;
// let count = 0;
// let text =
//   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
// while (count < text.length) {
//   if (text[count] == "b" || text[count == "B"]) {
//     countB = countB + 1;
//   }
//   count = count + 1;
// }
// console.log(countB);

// let countC = 0;
// let countc = 0;
// let lorem =
//   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
// while (countc < text.length) {
//   if (lorem[countc] == "c" || lorem[countc == "C"]) {
//     countC = countC + 1;
//   }
//   countc = countc + 1;
// }
// console.log(countC);

// let number = 100;
// number++;
// console.log(number);

// let num = 100;
// let count = 0;
// while (num > 0) {
//   if (num % 3 == 0) {
//     count++;
//   }
// }
// console.log();

let number = 123456789987;

console.log(number.charAt(number.length - 3));
console.log(number.substring(1, 3));
Number =
  number.substring(0, number.length - 3) +
  "+" +
  number.substring(number.length - 3, number / length);
console.log(number);
