// Requirements
const express = require('express');
const app = express();
const ejs = require('ejs');
const path = require('path');

// Template Engine
app.set('view engine', 'ejs');

// Middlewares
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.render('index');
});
app.get('/about', (req, res) => {
  res.render('about');
});
app.get('/add', (req, res) => {
  res.render('add');
});

// Port 
const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu port ${port}'de çalışmaya başladı...`);
});
