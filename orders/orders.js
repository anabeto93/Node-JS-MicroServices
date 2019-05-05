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
app.post('/orders', (req, res) => {
    console.log('About creating a new order', req.body)

    let newOrder = {
        CustomerId: req.body.customer_id,
        BookId: req.body.book_id,
        dateBorrowed: req.body.date_borrowed,
        dateReturned: req.body.return_date
    }

    console.log('new order object', newOrder)

    let order = new Order(newOrder)

    order.save().then(() => {
        console.log("New order created!")

        data = {
            status: 'created',
            code: 201,
            data: newCustomer
        }
    
        res.status(201).send(data)
    }).catch((err) => {
        if (err) {
            res.send(err)
            throw err
        }
        
    })
})

//Get all orders
app.get('/orders', (req, res) => {
    console.log('Getting all orders')

    Order.find().then( (orders) => {
        res.json(orders)
    } ).catch(err => {
        if (err) {
            res.send(err)
            throw err
        }
    })
})

app.listen(8003, () => {
    console.log('Up and running - Orders service')
})