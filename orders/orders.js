const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.json())

const mongoose = require('mongoose')
//define the Customer
require('./Order')
//const Customer = mongoose.model('Order')

mongoose.connect("mongodb://testuser:pass1234\$@ds149606.mlab.com:49606/nodejs_microservices_orders", {useNewUrlParser: true}).then(() => {
    console.log("Orders Database is connected")
},
err => {
    console.log("There was an error connecting to mLab", err)
})