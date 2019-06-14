const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {type: String, required:true},
    num_product: {type:Number, required:true},
    

     

}); 
module.exports = mongoose.model('Products', UserSchema);