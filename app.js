// This is a simple Express.js application that serves static files and provides an API endpoint for pies.
// It uses the Express framework to handle HTTP requests and responses.
// It also includes a model for managing pies, which can be extended as needed.

const express = require('express')
const app = express()
const port = 3000
const piesModel = require('./piesModel');
const PIE_API_URL = '/api/pies';

app.use(express.static('public')) // Serve static files from the "public" directory
app.use(express.json()); // Middleware to parse JSON bodies

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.post("/", (req, res) => {
    res.json({ posted: True });
});

app.get(PIE_API_URL, (req, res) => {
    const pies = piesModel.readPies();
    res.json({ pies: pies });
});

app.post(PIE_API_URL, (req, res) => {
    const flavor = req.body;
    piesModel.createPie(flavor);
    const pies = piesModel.readPies();
    res.status(201)
    res.json({ pies: pies });
});

app.put(PIE_API_URL, (req, res) => {
    const { flavor, newFlavor } = req.body;
    piesModel.updatePie(flavor, newFlavor);
    constpies = piesModel.readPies();
    res.status(202);
    res.json({ pies: pies });
}
);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
// To run this app, save it as app.js and run `node app.js` in your terminal.
