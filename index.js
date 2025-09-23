const button = document.querySelector(".button-add-task")
const input = document.querySelector(".input-task")
const completeList = document.querySelector(".list-tasks")

let listItems = []

function addNewTask() {
    listItems.push({
        task: input.value,
        finish: false
    })

    input.value = ''

    showTasks()
}

function showTasks() {

    let newLi = ''

    listItems.forEach((item, index) => {

        newLi = newLi +
            `
            <li class="task ${item.finish && "done"}">
                <img src="./img/checked.png" alt="check-task" onclick="finishTask(${index})">
                <p>${item.task}</p>
                <img src="./img/trash.png" alt="delete-task" onclick="deleteItem(${index})">
            </li>
        `
    })

    completeList.innerHTML = newLi

    localStorage.setItem('list', JSON.stringify(listItems))

}

function finishTask(index) {
    listItems[index].finish = !listItems[index].finish

    showTasks()
}

function deleteItem(index) {
    listItems.splice(index, 1)

    showTasks()
}

function reloadTask() {
    const tasksLocalStorage = localStorage.getItem('list')

    if (tasksLocalStorage) {
        listItems = JSON.parse(tasksLocalStorage)
    }
    showTasks()


}

reloadTask()
button.addEventListener('click', addNewTask)