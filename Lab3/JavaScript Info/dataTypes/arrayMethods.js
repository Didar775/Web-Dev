//sorting dec order
let arr = [5, 2, 1, -10, 8];
arr.sort((a, b) => b - a);
alert(arr);

// copy and run
function copySorted(arr2) {
  return arr2.slice().sort();
}

let arr2 = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert(sorted);
alert(arr2);

//usernames in one array
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];

let names = users.map((item) => item.name);

alert(names);

//sort by age
function sortByAge(arr) {
  arr.sort((a, b) => a.age - b.age);
}

let john2 = { name: "John", age: 25 };
let pete2 = { name: "Pete", age: 30 };
let mary2 = { name: "Mary", age: 28 };

let arr3 = [pete2, john2, mary2];

sortByAge(arr3);

// now sorted is: [john, mary, pete]
alert(arr3[0].name); // John
alert(arr3[1].name); // Mary
alert(arr3[2].name); // Pete

//average age
function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

let john3 = { name: "John", age: 25 };
let pete3 = { name: "Pete", age: 30 };
let mary3 = { name: "Mary", age: 29 };

let arr4 = [john, pete, mary];

alert(getAverageAge(arr4)); // 28

//unique elements array
function unique(arr) {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
}

let strings = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

alert(unique(strings));
