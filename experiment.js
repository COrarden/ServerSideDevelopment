const express = require('express');
const app = express();
const port = 3000;

app.get('/fast', (req, res) => {
    res.send('This is a fast response!');
}
);

app.get('/slow', (req, res) => {
    setTimeout(() => {
        res.send('This is a slow response!');
    }, 5000); // Simulate a slow response with a 5-second delay
}
);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
}
);
// To run this app, save it as experiment.js and run `node experiment.js` in your terminal.
// This code sets up a simple Express.js server with two endpoints: one that responds quickly and another that simulates a slow response.
// You can test the endpoints by navigating to http://localhost:3000/fast and http://localhost:3000/slow in your web browser or using a tool like Postman.