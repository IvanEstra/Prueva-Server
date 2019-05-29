const express = require('express'); 

module.exports = (app) => {     /* Funcion de JavaScrip*/
    app.use("/", express.static('public'));
};

/*Este archivo configura la carpeta Public */