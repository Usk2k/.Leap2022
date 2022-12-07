string_parameterize = function (str1) {
  return str1
    .trim()
    .toLowerCase()
    .replace(/[^a-z A-Z 0-9 -]/, "")
    .replace(/\s/g, "    __ __   ");
};
console.log(string_parameterize("This Is Where I Begin"));
