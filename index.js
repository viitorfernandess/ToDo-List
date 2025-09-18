const button = document.querySelector(".button-add-task")
const input = document.querySelector(".input-task")
const completeList = document.querySelector(".list-tasks")

let listItems = []

function addNewTask() {
    listItems.push(input.value)

    input.value = ''

    showTasks()
}

function showTasks() {

    let newLi = ''

    listItems.forEach((task, index) => {

        newLi = newLi +
            `
            <li class="task">
                <img src="./img/checked.png" alt="check-task">
                <p>${task}</p>
                <img src="./img/trash.png" alt="delete-task" onclick="deleteItem(${index})">
            </li>
        `
    })

    completeList.innerHTML = newLi

}

function deleteItem(index) {
    listItems.splice(index, 1)

    showTasks()
}

button.addEventListener('click', addNewTask)