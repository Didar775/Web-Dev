//object user
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

// sum salaries
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}

alert(sum); // 390

//Multiple property
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};
menu = multiplyNumeric(menu);
function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == 'number') {
      obj[key] *= 2;
    }
  }
}