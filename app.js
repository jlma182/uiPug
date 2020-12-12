const express = require('express');
const app = express();
const path = require("path");
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/empleados', function (req, res) {
  res.render("empleados")
});

app.get('/masas', function (req, res) {
  res.render("masas")
});

app.get('/tortas', function (req, res) {
  res.render("tortas")
});

app.listen(3000, function() {
  console.log('Aplicación ejemplo, escuchando el puerto 3000!');
});