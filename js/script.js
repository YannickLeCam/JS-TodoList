const buttonAddTask = document.getElementById("addTaskButton");
const container = document.getElementById("container");

function addTask() {
    let newCard = document.createElement("div");
    newCard.classList.add("cards");
    let textarea = document.createElement("textarea");
    let icon = document.createElement("i");
    icon.classList.add("fa-solid");
    icon.classList.add("fa-trash");
    icon.setAttribute('id', 'trashcan');
    textarea.value = "New Task . . .";
    newCard.appendChild(textarea);
    newCard.appendChild(icon);
    container.appendChild(newCard);
}

buttonAddTask.addEventListener("click", addTask);
