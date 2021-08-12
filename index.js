const express = require('express');
const app = express();

const PORT = 5000;

app.listen(PORT);

app.get('/server/images/:name', (req, res) => {
   const name = req.params.name;
   const path = '/images/' + name + '.svg';
   res.sendFile(path, {root: __dirname});
});

app.get('/server/tests/:category', (req, res) => {
   const testCategory = req.params.category;
   const path = '/testFiles/' + testCategory + '.json';
   res.sendFile(path, {root: __dirname});
});

