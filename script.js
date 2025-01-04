const todoList = [
    // "work one",
    // "work two"
];

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
    
    todoList.push(name);
    console.log(todoList);
    
    inputElement.value = '';
}