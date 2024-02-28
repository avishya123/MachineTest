const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose')
const userRoute = require('./api/routes/users.js')

const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/authentication")
.then(res=>{
    console.log("connected db")
})

app.use('/api/users',userRoute);

app.listen(port,()=>console.log("server is running"))