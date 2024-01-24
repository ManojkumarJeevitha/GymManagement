const express = require("express");
const server = express();
const bodyParser=require('body-parser');
var mongoose = require('mongoose');
server.use(bodyParser.json());
const cors = require('cors');
server.use(cors());
//locationdata

const memberRouter = require('../router/member');
const planRouter = require('../router/membership_plan');
const paymentRouter = require('../router/payment_transaction');

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

server.use("/member", memberRouter);
server.use("/plan", planRouter);
server.use("/payment", paymentRouter);


module.exports= server;