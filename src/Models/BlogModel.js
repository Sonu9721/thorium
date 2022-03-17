const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required:true
    },
    authorId: {type:ObjectId,  ref:"authors" },
    tags: [String],
    category: {
        type: String,
        required: true
    },
    subcategory: {
        type : String,
        required:true
    },
    isDeleted: { type: Boolean, default: false },
    isPublished: { type: Boolean, default: false },
    deletedAt: { type: Date , default:null },
    publishedAt: { type: Date, default: null }
},
    {timestamps:true})

     


    module.exports = mongoose.model('BlogData', BlogSchema)