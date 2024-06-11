const buttonAddTask = document.getElementById("addTaskButton");
const container = document.getElementById("container");
let card;
let taskCounter = 0;

function addTask() {
    let newCard = document.createElement("div");
    card=newCard;
    newCard.classList.add("cards");
    let textarea = document.createElement("textarea");
    let icon = document.createElement("i");
    icon.classList.add("fa-solid");
    icon.classList.add("fa-trash");
    icon.setAttribute('id', 'trashcan');
    textarea.value = "New Task . . .";
    newCard.appendChild(textarea);
    newCard.appendChild(icon);
    icon.addEventListener("click",()=>{
        icon.parentNode.remove();
    })
    container.appendChild(newCard);
}

buttonAddTask.addEventListener("click", addTask);
