const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = mongoose.connect(process.env.CON_STR)
  .then(() => console.log('DataBase Connected!'))
  .catch((e)=>{
    console.log("database is not connected",e);    
  })

module.exports= connectDB;