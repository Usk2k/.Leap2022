// let babySharkLyrics = "18094891113 12040pgjfd04";
// console.log(babySharkLyrics.charAt[1]);
// console.log(babySharkLyrics.length);
// console.log(babySharkLyrics[babySharkLyrics.length - 1]);
// console.log(str.toUpperCase());
// console.log(babySharkLyrics.substring(4, 5));

// let firstName = John;
// let fullName = firstName.concat(` `, Smith);
// console.log(fullName); //john smith
// console.log(firstName); // john

// let str = "this is string";
// console.log(str.indexOf("is"));

// let myString = "a this is substring is more not is";
// console.log(myString.indexOf("is"));
// let firstPart = myString.substring(0, myString.indexOf("is"));
// let lastPart = myString.substring(
//   myString.indexOf("is") + "is".length,
//   myString.length
// );
// console.log(lastPart);
// myString = firstPart.concat(lastPart);

// firstPart = myString.substring(0, myString.indexOf("is"));
// lastPart = myString.substring(
//     myString.indexOf("is") + "is" .length
//     myString.lengt)

// let number = 123.8124982149124;
// console.log(number.toFixed(3));

// console.log(Math.ceil(-3.101));

// console.log(Math.round(0.9));
// console.log(Math.round(5.9), Math.round(5.5), Math.round(5.2));
// console.log(Math.round(-5.9), Math.round(-5.5), Math.round(-5.2));
// console.log(Math.max(1, 2, 3));
// console.log(Math.pow(200, 9));
// let a = 1,
//   b = 6;
// console.log(Math.floor(Math.random() * Math.abs(a - b)) + Math.min(a, b));
// let x = 10;
// let count = 1;
// let output = "";

// let x = 10;
// let count = 1;
// while (x > 0) {
//   let y = 10;
//   while (y > 0) {
//     console.log(count);
//     y--;
//     count++;
//   }
//   x--;
// }

// let x = 10;
// let count = 1;
// let output = " ";

// while (x > 0) {
//   let y = 10;
//   while (y > 0) {
//     output = output + count + "\t";
//     if (count % 10 == 0) output += "\n";
//     y--;
//     count++;
//   }
//   x--;
// }
// console.log(output);
// let i = 0;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// for (let i = 1; i <= 10; i++) {
//   for (let j = 1; j < 10; j++) {
//     console.log(i, " ", j);
//   }
// }

// for (let i = 10; i > 0; i--){
//   for (count = 1; count++) {
//     let  output = " "
//   }

// let output = "";
// for (let row = 1; row < 10; row++) {
//   for (let col = 1; col < 10; col++) {
//     output += col + "";
//   }
//   output += "\n";
// }

// let output = "";
// let x = 5;
// for (let row = 1; row < x; row++) {
//   for (let col = 1; col < x; col++) {
//     if (row == 1 || row == x || col == 1 || col == x) {
//       output = output + "* ";
//     } else {
//       output = output + "* ";
//     }
//     // output += "* ";
//   }
//   process.stdout.write("\n");
//   debugger;
// }
// console.log(output);

// let output = " ";
// let n = 5;
// for (let row = 1; row <= n; row++) {
//   for (let col = 1; col <= n; col++) {
//     if (row == 1 || row == n || col == 1 || col == n) {
//       output = output + "*";
//     } else {
//       output = output + " ";
//     }
//     debugger;
//   }
//   output + output + "\n";
// }
// console.log(output);
// let password = 123;
// let input;
// while (password != input) {
//   input = prompt("Enter your password");
// }

// let number;
// while (true) {
//   number = prompt("enter a phone number");
//   let firstChar = number.charAt(0);
//   number = Number(number);
//   if (Number.isInteger(number) && (firstchar == "9" || firstchar == "8")) {
//     break;
//   }
// }

// let n = 2;
// let prime = true;
// for (let i = 2; i < n; i++) {
//   if (n % i == 0) {
//     prime = false;
//     break;
//   }
// }
// if (prime == true) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }
// =---------------table ____---------------
// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// const me = new Person("Tyrone", "Jones");

// console.table(me);

//  --------------&*****PIRAMID*****====---------------------

// let output = "";
// let count = 1;
// for (let row = 1; row <= 4; row++) {
//   for (let dash = 4 - row; dash > 0; dash--) {
//     output += count + " ";
//   }
//   for (let num = 1; num <= row; num++) {
//     output += count + " ";
//     count++;
//   }
//   output += "\n";
// }
// console.log(output);

// --------*****    ARRAY   *****--------//
// let studentAges = [10, 20, 30, 40];
// studentAges[0];
// studentAges[studentAges.length - 1];
// for (let x = 1; x <= studentAges; x++);
// console.log(studentAges);
