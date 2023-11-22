const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/main.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'main.js'));
});

app.get('/cubes.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'cubes.js'));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
