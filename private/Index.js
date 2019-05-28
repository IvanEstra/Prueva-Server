const User = require("../db/User");

module .exports = (app) => {
    //Obtener Usuarios
    app.get('/getUsers', async (request, response)=> {
        const user = await User.find().sort({date: 'desc'});
        return response.json(user);
    });

    //Agregar Usuarios
    app.post('/users/signup', async(request, response) =>{
        const newUser = new User ({...request.body}); //... Copia de request.body
        await newUser.save(); //Para que haga a su tiempo
        return response.send({success:"ok"});
    });


};