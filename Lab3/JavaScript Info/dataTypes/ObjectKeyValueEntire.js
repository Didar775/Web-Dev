//sum salaties
alert(sumSalaries(salaries)); // 650
function sumSalaries(salaries) {
  let sum = 0;
  for (let salary of Object.values(salaries)) {
    sum += salary;
  }

  return sum; // 650
}

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};
//second way
// function sumSalaries(salaries) {
//   return Object.values(salaries).reduce((a, b) => a + b, 0); // 650
// }

//count properties
let user = {
  name: "John",
  age: 30,
};
function count(obj) {
  return Object.keys(obj).length;
}
alert(count(user)); // 2

//maximalSalary
let salaries2 = {
  John: 100,
  Pete: 300,
  Mary: 250,
};
function topSalary(salaries) {
  let maxSalary = 0;
  let maxName = null;

  for (const [name, salary] of Object.entries(salaries)) {
    if (maxSalary < salary) {
      maxSalary = salary;
      maxName = name;
    }
  }

  return maxName;
}
alert(topSalary(salaries2))
