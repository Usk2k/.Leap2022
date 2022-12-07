const alphabet = [
  "Б",
  "В",
  "Г",
  "Д",
  "Е",
  "Ж",
  "З",
  "И",
  "Й",
  "К",
  "Л",
  "М",
  "Н",
  "О",
  "П",
  "Р",
  "С",
  "Т",
  "Ф",
  "Х",
  "У",
  "Ц",
];
const register = "ОЮ04250731";
function isCorrectreg(reg) {
  if (
    alphabet.includes(reg[0]) &&
    alphabet.includes(reg[1]) &&
    Number.isInteger(Number(reg.slice(2, 10))) &&
    reg.length == 10
  ) {
    getRegisterInfo(reg);
  } else {
    console.log("РД buru bn");
  }
}

isCorrectreg(register);
//birthday//
function getRegisterInfo(reg) {
  const huis = getGender(reg[8]);
  const birthDay = getBirthDay();
  const birthRegion = getBirthRegion();

  console.log(`huis: ${huis}`);
}
//gender//
function getGender(number) {
  if (number % 2 == 0) {
    return "emegtei";
  } else {
    return "eregtei";
  }
}

function getBirthDay() {
  return "";
}

function getBirthRegion() {
  return "";
}
