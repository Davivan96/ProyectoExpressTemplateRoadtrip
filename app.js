require('dotenv').config();
const express = require('express');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT;

// HANDLEBARS
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//Server Assets
app.use(express.static('public'));


//Routing
app.get('/', (req, res) => {
  res.render('home', {
    title: 'Routing Express practica',
    description: 'by Iván Monroy'
  });
});

app.get('/generic', (req, res) => {
  res.render('generic', {
    title: 'Routing Express practica',
    description: 'by Iván Monroy'
  });
});

app.get('/elements', (req, res) => {
  res.render('elements', {
    title: 'Routing Express practica',
    description: 'by Iván Monroy'
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});