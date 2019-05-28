const mongoose = require('mongoose'); /* Mongoose es un conector para insertar*/
module.exports=(app) => {
    mongoose.connect('mongodb://localhost:27017/usuarios');

};