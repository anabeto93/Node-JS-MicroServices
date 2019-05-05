const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.json())

const mongoose = require('mongoose')
//define the Customer
require('./Order')
const Order = mongoose.model('Order')

mongoose.connect("mongodb://testuser:pass1234\$@ds149606.mlab.com:49606/nodejs_microservices_orders", {useNewUrlParser: true}).then(() => {
    console.log("Orders Database is connected")
},
err => {
    console.log("There was an error connecting to mLab", err)
})

//Base route
app.get('/', (req, res) => {
    console.log('Orders service')

    res.send('Orders Service endpoint!')
})

//create a new order
app.post('/books', (req, res) => {
    console.log('About creating a new order', req.body)


})

app.listen(8003, () => {
    console.log('Up and running - Orders service')
})