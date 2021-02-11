

const express = require ('express');
const app = express ();
const path = require ('path');
const port = 80;

app.use (express.static (path.resolve (__dirname, 'public')))

app.get ('/', (req, res) => {
    return res.sendFile (path.resolve (__dirname, 'templates', 'index.html'));
})

app.listen (port, () => {
    console.log (`http://localhost:${port}`);
})