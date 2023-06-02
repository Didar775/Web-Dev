let name1 = prompt("Who's there?", "");

if (name1 === "Admin") {
  let pass = prompt("Password?", "");

  if (pass === "TheMaster") {
    alert("Welcome!");
  } else if (pass === "" || pass === null) {
    alert("Canceled");
  } else {
    alert("Wrong password");
  }
} else if (name1 === "" || name1 === null) {
  alert("Canceled");
} else {
  alert("I don't know you");
}
