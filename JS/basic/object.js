// let person = {
//   firstName: "Өсөхбаяр",
//   lastName: "Өргөжих",
//   age: 18,
// };

// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.age);

// let employee = {
//   firstName: "Peter",
//   lastName: "Doe",
//   employeeId: 1,
// };

// console.log("ssn" in employee);
// console.log("employeeId" in employee);
// 88**88**************//
// let object = {
//   key: "value",
// };
// console.log(object.key);

// let func = () ==> {
// console.log("person");
// };
// function getPerson() {
//   console.log("person");
// }

// // nested - dotor dotro//
// fullName: () => {
//   return firstName + " " + this.lastName;
// };
// console.log("return");
// //kkkkkkkkk//
// let person1 = {
//   firstName: "Usk2k",
// };
// let person2 = person1;
// person2.name = "Gotov";
// console.log(person1.name);

// person2 = { ...person1 };
// person2.firstName = "erdene";
// console.log(person1.firstName);
// console.log(person2.firstName);

// let person1 = [10, 20, 30];
// let person2 = [...person1];
// person2[0] = 100;
// console.log(person1);

// console.log(Object.keys(person1));

let athlets = [
  {
    name: "Davaa",
    age: 18,
    record: [40, 60, 65],
  },
  {
    name: "gonchigo",
    age: 19,
    record: [70, 75, 90],
  },
  {
    name: "garid",
    age: 17,
    record: [40, 70, 80],
  },
  {
    name: "ganaa",
    age: 18,
    record: [50, 60, 85],
  },
  {
    name: "dorj",
    age: 19,
    record: [70, 60, 75],
  },
];

console.log(athlets[0].name);
function getAllNames(hha) {
  for (i = 0; i < hha.length; i++) {
    console.log(athlets[i].name);
  }
}
getAllNames(athlets);

//sss//

// function getAvgSpeed(qwerty) {
//   let count = 0;
//   let qwerty;
//   for (x = 0; x < hhe.length; x++) {
//     count += athlets[x].record;
//     qwerty = count / athlets.length;
//   }
//   console.log(Math.round(qwerty));
//   return Math.round(count / qwerty.length);
// }
// getAvgSpeed(athlets);
getAllInfo(athlets);
function getAvgSec(list) {
  let avgList = [];
  for (i = 0; i < list.length; i++) {
    let sum = 0;
    for (j = 0; j < list[i].record.length; j++) {
      sum += list[i].record[j];
    }
    let personNewObj = {
      name: list[i].name,
      avg: sum / list[i].record.length,
    };
    avgList.push(personNewObj);
  }
  return avgList;
}
function getAvgAge(list) {
  let sum = 0;
  for (i = 0; i < list.length; i++) {
    sum += list[i].age;
  }
  return Math.round(sum / list.length);
}
function getAllInfo(list) {
  let names = getAllNames(list);
  let avgAge = getAvgAge(list);
  let AvgSec = getAvgSec(list);
  let sum = 0;
  for (i = 0; i < AvgSec.length; i++) {
    sum += AvgSec[i].avg;
  }
  console.log("Avarage Speed:\t", sum / AvgSec.length);
  console.log("Avarage Age:\t", avgAge);
  console.log("All Names: \t", names);
}
