const express = require("express");
const server = express();
const bodyParser=require('body-parser');
var mongoose = require('mongoose');
server.use(bodyParser.json());
const cors = require('cors');
server.use(cors());
//locationdata

const businessRouter = require('../router/member');
const merchantRouter = require('../router/membership_plan');
const serviceRouter = require('../router/payment_transaction');

 let db= process.env.MONGODB_URL ||`mongodb+srv://admin:1234@gym.g29osw3.mongodb.net/?retryWrites=true&w=majority`;

console.log('connected to the database',db);

mongoose.connect(db, {
    useUnifiedTopology: true,
    useNewUrlParser: true
    },function(error){
        if(error)
        {
        console.log(error);
  }
        else
        {
        console.log('connected to the database',db);
        }
	});

server.use("/business", businessRouter);
server.use("/merchant", merchantRouter);
server.use("/service", serviceRouter);


module.exports= server;