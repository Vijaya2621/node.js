const mongoose = require('mongoose');

//defining schema 
const userSchema =mongoose.Schema({
userName:{
    type : String,
    required : true,
    trim : true
},
email:{
    type : String,
    required : true,
    unique: true,
    trim : true
},
phone:{
    type: String,
    required : true,
},
password:{
    type : String,
    required : true,
},
role:{
    type:String,
    enum: ['admin', 'editor'],
    default: 'editor'
},
});
    
//exproting schema
const user = mongoose.model('user',userSchema);
module.exports = user;
