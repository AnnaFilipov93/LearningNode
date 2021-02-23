const mongoose = require('mongoose');

//Give post object a structure 
const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now

    }
});


//Export schema 
module.exports = mongoose.model('Posts', PostSchema);