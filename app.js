const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const bodyParser=require('body-parser')
const cors = require('cors')
const app = express();


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'));
app.use(express.json());

// ROutes
const Route = require('./routes/routes');

app.use('https://testbfhl.herokuapp.com/', Route);



//PORT: 2000
app.listen(2000, ()=> console.log("Server connected") );