const express = require('express');
const app = express();
//Connection to the mongoose library that connact you to DB
const mongoose = require('mongoose');
//Import Body parser
const bodyParser = require('body-parser')
//Import cors
const cors = require('cors');
//Require package to get the .env file
require('dotenv/config');

app.use(cors());

//Every time we hit any request we want to transform it to json
app.use(bodyParser.json());

//Import Routes
const postRoute = require('./routes/posts');

//Run the posts from the posts file(use key word)
app.use('/posts', postRoute);



//Roudes
app.get('/', (req, res) => {
    res.send('We are on home');
} );


//Conect to DB
mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true,
      useUnifiedTopology: true 
    },
    () => console.log("Conected to DB!"));


//How to start listening to the server
app.listen(3000);

