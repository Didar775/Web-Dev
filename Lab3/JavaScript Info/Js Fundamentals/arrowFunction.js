function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  function () {
    alert("You agreed.");
  },
  function () {
    alert("You canceled the execution.");
  }
);

// to arrow
function ask2(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }
  
  ask2(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
  );
