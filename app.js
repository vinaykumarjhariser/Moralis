const express = require('express');
const bodyParser = require('body-parser');
const filelUpload = require('express-fileupload');
const ipfs = require("ipfs-http-client");
// const mongoose = require('mongoose');
// const moralisdb = require('./model/db')
const fs = require("fs")
const path = require('path');
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(filelUpload());
const port =8000;
//middleware
app.use(express.static('public'))
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.listen(port,()=>{
    console.log(`${port} is listinging`)
})