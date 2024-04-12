const express = require('express');
const app = express();

const consign = require('consign');
const bodyParser = require('body-parser');

app.set("view engine", "ejs");
app.set("./app/views");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("./app/public"));

consign()
    .include("./app/routes")
    .then("./app/models")
    .then("./app/controllers")
    .into(app);

module.exports = app;