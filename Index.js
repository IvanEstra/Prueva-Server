"use stric";

const port = 8110;   /*En que puerto va a funcionar */
const express = require('express'); /*exporta express */
const app = express(); /*app va hacer va a ejecutar express */
/* Express es el servidor*/

require("./middleware")(app);
require("./private")(app);

app.listen(port, () => {
    console.log('Usuarios app listening on port', port, '!');
    
});