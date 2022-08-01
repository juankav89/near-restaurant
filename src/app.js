const bodyParser = require('body-parser');
const express = require("express");
var session = require('express-session');
const app = express();

//define base express js setup
app.use(session({resave: true, saveUninitialized: true, secret: process.env.SESSION_SECRET, cookie: { maxAge: 60000 }}));
// use library to parse json all responses
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// define a route files to decouple functionalities
var indexRouter = require('./routes/index');
app.use('/', indexRouter);

app.listen(3000, () => {
 console.log("Server deploy port 3000");
});