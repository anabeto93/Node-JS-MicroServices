const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.json())

const mongoose = require('mongoose')
//define the Customer
require('./Customer')
const Customer = mongoose.model('Customer')

mongoose.connect("mongodb://testuser:pass1234\$@ds149676.mlab.com:49676/nodejs_microservices_customers", {useNewUrlParser: true}).then(() => {
    console.log("Database is connected")
},
err => {
    console.log("There was an error connecting to mLab", err)
})

app.get('/', (req, res) => {
    console.log('Customers service')

    res.send('Customers Service endpoint!')
})

app.listen(8002, () => {
    console.log('Up and running - Customers service')
})