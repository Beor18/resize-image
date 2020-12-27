const mongoose = require('mongoose');
const config = require('../config/index')

mongoose.Promise = global.Promise;

if (!config.db) {
    console.log('Setee la variable de entorno MONGODB_URL')
    process.exit(1)
}

mongoose.connect(config.db, { useNewUrlParser: true })
    .then(function() {
        console.log('Conectado a la Base de Datos con éxito!');
    }).catch(function(err) {
        console.log('Ups! Hubo un error al conectar con la base de datos!');
        console.log(err.message);
    });

module.exports = mongoose.connection;