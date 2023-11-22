// import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.js';

// import { TTFLoader } from 'three/addons/loaders/TTFLoader.js';
// import { Font } from 'three/addons/loaders/FontLoader.js';
// import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';


const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/main.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'main.js'));
  });

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

