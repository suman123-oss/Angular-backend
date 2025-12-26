const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT;

const cors= require('cors');

require('./config/dbConnection')

app.use(cors({
  // origin:'http://localhost:4200'
  // origin:'https://angular-frontend-fawn.vercel.app'
}));

app.get('/', (req, res) => {
  res.send('backend is working');
});


const users= require("./routes/users");

app.use('/api', users)


app.listen(PORT, (req, res) => {
  console.log('app is running in port 3000');
});
