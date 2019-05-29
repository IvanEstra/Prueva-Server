const mongoose = require('mongoose'); /* Mongoose es un conector para insertar*/
module.exports=(app) => {
    mongoose.connect('mongodb://localhost:27017/usuarios');

};

/* Configuraion a la base de datos a Mongo*/

/*Mongoose--> Intermediario entre node y Mongo. libreria de insertar libreria */
/*  */