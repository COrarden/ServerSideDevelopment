const express = require('express');
const todoRouter = express.Router();

todoRouter.get("/sanity", (req, res) => {
    res.send("This is the ToDo API sanity check!");
}
);





module.exports = todoRouter;
