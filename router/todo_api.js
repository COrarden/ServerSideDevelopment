const express = require("express");
const todoRouter = express.Router();
const todoModel = require("../model");

function generateID() {
    return Math.random().toString(36).substr(2, 8); // Generate a random ID
}

todoRouter.get("/sanity", (req, res) => {
    res.send("This is the ToDo API sanity check!");
}
);

todoRouter.get("/", (req, res) => {
    res.status(200).json(todoModel.readAllTodos());
}
);

todoRouter.get("/:id", (req, res) => {
    res.status(200).json(todoModel.readToDo(req.params.id));
}
);

todoRouter.post("/", (req, res) => {
    todoModel.createTodo({
    ...req.body,
    id: generateID(), //utilize a random ID generator
    isDone: false,
    isArchived: false,
    });
    res.status(201).json(todoModel.readAllTodos());
});

todoRouter.patch("/:id", (req, res) => {
    const { id } = req.params;
    todoModel.updateToDone(id);
    res.sendStatus(204);
});

todoRouter.put("/:id", (req, res) => {
    todoModel.replaceTodo(req.body);
    res.sendStatus(204);
}
);


module.exports = todoRouter;