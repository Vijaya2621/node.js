const mongoose = require('mongoose')
const postsSchema = mongoose.Schema({
    title:{
        type : String
    },
    subtitle:{
        type: String
    },
    author:{
        type: String
    },
    content :{
        type : String 
    },    
    createdAt: {
        type: Date,
        default: Date.now,
      },
      updatedAt: {
        type: Date,
        default: Date.now,
      },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: true
      },
    slug:{
        type: String,
        unique: true
    }

}) 
const posts = mongoose.model('posts',postsSchema);
module.exports = posts;