const express = require('express');
const bodyParser = require('body-parser');

const proRoutes = require('./routes/professional');

const app = express();

app.use(bodyParser.json()); //application/json

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); //fixes CORS error
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE'); //tells which methods to allow
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use(proRoutes);

app.listen(8080);