const btn = document.getElementById("btn");
const txt = document.getElementById("input-text");

btn.addEventListener("click", function () {

  function required(text) {
    if (text.value.length == 0) {
      alert("Write a task");
      newTask.remove();
      return false;
    }
  }

  required(txt);

    const boxList = document.getElementById("list");
    const container = document.createElement("div");
    container.className = "list-container";


     //List
      const newTask = document.createElement("p");
      newTask.className = "task";
      newTask.innerHTML = txt.value;
      //remove Button
      const deleteBtn = document.createElement("button");
      //icon
      const icon = document.createElement("i");
      icon.className = "fa-solid fa-trash trash-icon";
      deleteBtn.className = "btn-remove";

      deleteBtn.onclick = function () {
        newTask.remove();
        deleteBtn.remove();
        container.remove();
      };
      boxList.appendChild(container);
      container.appendChild(newTask);
      container.appendChild(deleteBtn);
      deleteBtn.appendChild(icon);


    txt.value = "";

});
