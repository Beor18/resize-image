const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const server = express();
const connect = require('./config/db');

const resizeRoutes = require("./route/resizeRoutes");


server.use(express.static(path.join(__dirname, 'public')));
server.use(bodyParser.urlencoded({extended: true}));
server.use('/api', resizeRoutes)

server.listen(4001, async () => {
    console.log('Server iniciado!')
})