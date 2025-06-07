
const todos = [
  {
    objective: "Make REST API",
    assignee: "Christian O'Rarden",
    id: "123",
    summary: "Create a REST API for the ToDo app",
    isDone: false,
    isArchived: false,
  },
];

//CRUD Operations
const createTodo = (todo) => {
    todos.push(todo);
};

const readAllTodos = () => {
    return todos;
};

const readAllArchived = () => {
    return todos.filter(todo => todo.isArchived);
};

const readToDo = (id) => {
    return todos.find(todo => todo.id === id);
};

const updatetoDone = (id) => {
    const todo = todos.find(todo => todo.id === id);
    if (todo) {
        todo.isDone = true;
    }
};

const replaceTodo = (todoToReplace) => {
    const todoIndex = todos.findIndex(todo => todo.id === todoToReplace.id);
    if (todoIndex < 0) throw new Error("Todo not found");
    todos.splice(todoIndex, 1, todoToReplace);
};

const deleteTodo = (id) => {
    const todoIndex = todos.findIndex(todo => todo.id === id);
    if (todoIndex < 0) throw new Error("Todo not found");
    todos.splice(todoIndex, 1);
};

module.exports = {
    createTodo,
    readAllTodos,
    readAllArchived,
    readToDo,
    updatetoDone,
    replaceTodo,
    deleteTodo
};
// Exporting the CRUD operations for use in other modules