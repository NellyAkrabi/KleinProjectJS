const btn = document.getElementById("btn");
const txt = document.getElementById("input-text");

btn.addEventListener("click", function () {
  function required(text) {
    if (text.value.length == 0) {
      alert("Write a task");
      return false;
    }

    const boxList = document.getElementById("list");
    const container = document.createElement("div");

    for (let i = 0; i <= 0; i++) {
      container.className = "list-container";
      const list = document.createElement("p");
      list.className = "task";
      list.innerHTML = txt.value;

      const deleteBtn = document.createElement("button");
      const icon = document.createElement("i");
      icon.className = "fa-solid fa-trash trash-icon";
      deleteBtn.className = "btn-remove";
      deleteBtn.onclick = function () {
        list.remove();
        deleteBtn.remove();
        container.remove();
      };
      boxList.appendChild(container);
      container.appendChild(list);
      container.appendChild(deleteBtn);
      deleteBtn.appendChild(icon);
    }

    txt.value = "";
  }
  required(txt);
});
