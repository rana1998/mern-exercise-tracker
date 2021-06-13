const express = require('express');
const cors    = require('cors');
const mongoose  = require('mongoose');

// require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// const uri = process.env.ATLAS_URI;
const uri = `mongodb+srv://kshitij_crud14:kshitij_crud14@cluster0.bhmq3.mongodb.net/test?authSource=admin&replicaSet=atlas-gax1xc-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true`;

mongoose.connect(uri,{ useNewUrlParser:true, useCreateIndex: true, useUnifiedTopology:true});

const connection = mongoose.connection;

connection.once('open',()=>
{
  console.log("MongoDB database connection established")
})

app.use(cors());
app.use(express.json());

const exerciseRouter = require('./routes/exercise');
const usersRouter = require('./routes/user');



app.use('/exercises',exerciseRouter);
app.use('/user',usersRouter);

app.listen(port,() => {
    console.log(`Server is running on port ${port}`);
})
