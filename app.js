const express = require('express');
const app = express();
const morgan = require('morgan'); // Import Morgan for logging HTTP requests
const PORT = 3000;
const todoRouter = require('./router/todo_api'); // Import the todo router

//Middleware
app.use(express.urlencoded()); // Parse URL-encoded bodies (form submissions)
app.use(morgan("tiny")); // Use Morgan for logging HTTP requests
//Middleware End

//Routes
app.use("/api/todo", todoRouter); // Use the todo router for /api/todo routes


app.get("/sanity", (req, res) => {
    res.send("Sanity Check: App is running!");
}
);

app.get("/hello", (req, res) => {
    res.status(200).send("Hello");
});

//Anything with a * should be the last route
app.get("/*splat", (req, res) => {
    const splat = req.params.splat;
    res
        .status(404)
        .end(`Unexpected Route Wildcard Route Caught: ${splat}`);
});
//Routes End



app.listen(PORT, () => {
    console.log(`App is listening on http://localhost:${PORT}`);
});