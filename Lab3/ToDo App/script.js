let inputMassage = document.querySelector(".inp"),
  addButtnon = document.querySelector(".add"),
  Input = document.querySelector(".ull");

let listAll = [];

addButtnon.addEventListener("click", function () {
  if (!inputMassage.value) alert("Task is empty, please enter a task!");
  else {
    let tempInput = {
      Input: inputMassage.value,
    };
    listAll.push(tempInput);
    showMessages();
    inputMassage.value = "";
  }
});

function showMessages() {
  let temp = "";
  listAll.forEach(function (item, i) {
    temp += `
        <li class=class_${i}>
            <input type='checkbox' id=item_${i}>
            <label for=item_${i}>${item.Input}</label>
            <button class="delButton buttons"><img src="img/urn.png" alt="urn"></button>
        </li>
        `;
    Input.innerHTML = temp;
    var current_tasks = document.querySelectorAll(".delButton");
    for (var i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        this.parentNode.remove();
      };
    }
  });
}
