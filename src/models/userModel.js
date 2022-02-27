const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: String,
    autherName: String,
   category: { type: String, enum: ["science", "maths", "hindi","english","history"]  },
     year :Number
    
}, { timestamps: true });

 module.exports = mongoose.model('User', bookSchema) //users