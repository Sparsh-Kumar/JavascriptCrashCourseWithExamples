

// importing all the modules
const express = require ('express');
const path = require ('path');
const app = express ();
const port = 80;

// setting up the static folder
app.use (express.static (path.resolve (__dirname, 'templates', 'index.html')));

// handling the home route
app.get ('/', (req, res) => {
    return res.status (200).sendFile (path.resolve (__dirname, 'templates', 'index.html'));
});

// listening on a specific port
app.listen (port, () => {
    console.log (`http://localhost:${port}`);
})