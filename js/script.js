const buttonAddTask = document.getElementById("addTaskButton");
const container = document.getElementById("container");


function miseAJourCounter() {
    let taskCounter = document.getElementsByClassName("cards").length;
    const counterTasks= document.getElementById("counter");
    console.log(taskCounter);
    counterTasks.innerHTML = taskCounter + ` Tâche${taskCounter>1 ? "s":""} restante${taskCounter>1 ? "s":""}`;
}

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
        miseAJourCounter();
    })
    container.appendChild(newCard);
    miseAJourCounter();
}

miseAJourCounter();
buttonAddTask.addEventListener("click", addTask);
