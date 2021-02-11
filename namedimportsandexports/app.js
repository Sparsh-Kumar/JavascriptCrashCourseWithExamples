
// importing all the dependencies
const express = require ('express');
const path = require ('path');
const app = express ();
const port = 80;

// setting the static folder
app.use (express.static (path.resolve (__dirname, 'public')));

// handling the home route
app.get ('/', (req, res) => {
    return res.sendFile (path.resolve (__dirname, 'templates', 'index.html'));
})

// listening on a specific port
app.listen (port, () => {
    console.log (`http://localhost:${port}`);
})