const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
//Import routes
const authRoute = require('./routes/auth');

dotenv.config();

//Connect to DB
mongoose.connect(
      process.env.DB_CONNECT,
    { useUnifiedTopology: true,
      useNewUrlParser: true },
      () => console.log('Connected to DB!')
);



//Middlewar
app.use(express.json());


//Route Middlewares
//It means thst we have to get to /api/user/register
app.use('/api/user', authRoute);


app.listen(3000,() => console.log('The server up and runing'));


