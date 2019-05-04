//Load Express
const express = require('express')
const app = express();
//Load Mongoose
const mongoose = require('mongoose')
mongoose.connect("mongodb://testuser:pass1234\$@ds149596.mlab.com:49596/nodejs_microservices", {useNewUrlParser: true}).then(() => {
    console.log("Database is connected")
},
err => {
    console.log("There was an error connecting to mLab", err)
})


app.get('/', (req, res) => {
    res.send('Books endpoint!')
})

app.listen(4545, () => {
    console.log("Up and running! -- This is our Books service");
})
