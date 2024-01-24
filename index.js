const express = require("express");
require("dotenv").config();
const port = 8001 || process.env.PORT;
const cors = require("cors");
const app = express();
const proxy = require("express-http-proxy");
const fs = require('fs');
const axios = require('axios');
const { config } = require("dotenv");
const admin = require('firebase-admin');
var serviceAccount = require("./admin.json");
const querystring = require('querystring');


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://letschat-f9f77.firebaseio.com",
});

var storage = admin.storage();

const bucket = storage.bucket('gs://letschat-f9f77.appspot.com');




let jsonData;
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false }));


const middleware = require('./middleware/middleware');
const { Console } = require("console");
const { forEach } = require("async");
app.use(middleware);


app.get("/get", async (req, res) => {
  res.json({ state: "sucesss" })
});



app.listen(port, () => console.log(`App listening on port ${port}!`));
