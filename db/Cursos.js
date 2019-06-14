const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {type: String, required:true},
    description: {type:String, required:true},
    inicio: {type:Date, required:true},
    Fin: {type:Date, required:true},
    Horario: {type:Time, required:true},
    Area: {type:String, required:true},
    Ponente: {type:String, required:true},
    Capacidad: {type:Int, required:true},
    Tipo: {type:String, required:true}
}); 
module.exports = mongoose.model('users', UserSchema);
