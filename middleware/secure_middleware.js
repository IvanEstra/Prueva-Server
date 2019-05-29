const helmet = require("helmet"); /* Importar*/

module.exports = (app) => { /* App es un parametro y eso hace referencia a un servidor*/
    app.set('trust proxy', 1); /*Proxi analiza las peticiones y determina si son confiables */ 
    app.use(helmet());  /* ()ejecuta la funcion */ 
};

/*Helmet--> Sector de seguridad  Proxi-->Analaiza las peticiones y analiza si son confiables o no*/