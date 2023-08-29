const express = require('express');
const app = express();
const valueRoute = require('../routes/valueRoute')

// Import routes


//Router Middlewares
app.use(express.json());

app.use("/value",valueRoute);
  
module.exports = app;
