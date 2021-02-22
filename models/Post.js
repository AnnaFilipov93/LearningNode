const mongoose = require('mongoose');

//Require how the data lookes
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
//Empty 
/*
const PostSchema = mongoose.Schema({
    title: String,
    description: String,
    date: Date.now
})

*/

//User schema
mongoose.Schema({
    username: String,
    password: String
});

//Export schema ('give it a name', schema it should use)
module.exports = mongoose.model('Posts', PostSchema);