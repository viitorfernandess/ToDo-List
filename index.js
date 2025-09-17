const button = document.querySelector(".button-add-task")
const input = document.querySelector(".input-task")

let listItems = []

function addNewTask() {
    listItems.push(input.value)

    showTask()
}

function showTask() {

}

button.addEventListener('click', addNewTask)