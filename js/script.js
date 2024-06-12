const buttonAddTask = document.getElementById("addTaskButton");
const container = document.getElementById("container");

/**
 * On recupère le nombre de cards il y a et le modifie le contenue du compteur en HTML
 */
function miseAJourCounter() {
    let taskCounter = document.getElementsByClassName("cards").length;
    const counterTasks= document.getElementById("counter");
    console.log(taskCounter);
    counterTasks.innerHTML = taskCounter + ` Tâche${taskCounter>1 ? "s":""} restante${taskCounter>1 ? "s":""}`;
}

/**
 * Creer une card qui va contenir un textarea et une icon (Recupérer sur Awesome font) ajoutant un event listener
 * L'event listener sur l'icon qui se déclenche sur le clique va supprimer la card parent.
 * A chaque modification qui peut influer sur le nombre de tache on met a jour le nombre compteur de taches
 */
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
