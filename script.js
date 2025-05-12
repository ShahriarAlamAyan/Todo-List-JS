const todoList = [
    {
    name: 'make dinner',
    dueDate: '2025-04-28'
},{
    name: 'wash dishes',
    dueDate: '2025-04-28'
}
];


function randerTodoList() {
    let todoListHTML = '';

    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        // const name = todoObject.name;
        // const dueDate = todoObject.dueDate;

        // _________ shortcut of an object (distructuring) __________

        const { name, dueDate } = todoObject


        const html = `
            <div>${name}</div> 
            <div>${dueDate}</div>
            <button class="delete-todo-button" onclick = "todoList.splice(${i}, 1);
            randerTodoList()">Delete </button>
            `;
        todoListHTML += html;
    }

    // console.log(todoListHTML);

    document.querySelector('.js-todo-list').innerHTML = todoListHTML
}




function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
    const inputDueDate = document.querySelector('.js-dueDate-input')
    const dueDate = inputDueDate.value

    todoList.push({
        // name: name,
        // dueDate: dueDate,

        // _____ shorthand _____
        
        name,dueDate});
    console.log(todoList);

    inputElement.value = '';

    randerTodoList()
}
randerTodoList()

//9:06:00 delete & due date update