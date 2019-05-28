const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const json2xls = require('json2xls');
const fileUpload = require("express-fileupload");

const  AllowAccessProvitional = (req,res, next) => { /* REQ= conjunto para que guarde al servidor RES=respuesta  NET=siguinte*/
    res.header("Access-Control-Allow-Origin", "*"); /* todos van hacer peticiones*/
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE'); /* Son los metodos para usar peticiones*/
    res.header('Access-Control-Allow-Headers', 'Content-Type'); /* Variedad de archivos que se mandan */
    next();
};

module .export = (app) => {
    app.use(AllowAccessProvitional);
    app.use(bodyParser.urlencoded({extended:true, limit : '50nm'}));
    app.use(bodyParser.json({limit: '50mb'}));
    app.use(cookieParser());
    app.use(json2xls.middleware);
    app.use(fileUpload({
        limit: {fileSize: 50 * 1024 *1024},
    }));
};

/* Este es el Servidor*/