//Load Express
const express = require('express')
const app = express();
//Load Body Parser
const bodyParser = require('body-parser')
app.use(bodyParser.json())

//Load Mongoose
const mongoose = require('mongoose')

//Load Book Model
require("./Book")
const Book = mongoose.model("Book")

mongoose.connect("mongodb://testuser:pass1234\$@ds149596.mlab.com:49596/nodejs_microservices", {useNewUrlParser: true}).then(() => {
    console.log("Database is connected")
},
err => {
    console.log("There was an error connecting to mLab", err)
})


app.get('/', (req, res) => {
    res.send('Books endpoint!')
})

//Create a book
app.post('/books', (req, res) => {
    console.log('The request body received', req.body)
    let newBook = {
        title: req.body.title,
        author: req.body.author,
        numberPages: req.body.numberPages,
        publisher: req.body.publisher,
    }

    let book = new Book(newBook);

    book.save().then(() => {
        console.log("New book created!")
    }).catch((err) => {
        throw err;
    })

    data = {
        status: 'created',
        code: 201,
        data: newBook
    }

    res.status(201).send(data)
})

//Get books
app.get('/books', (req, res) => {
    Book.find().then( (books) => {
        console.log(books)

        res.send(books)
    } ).catch(err => {
        if (err) {
            throw err
        }
    })

    //res.send(books)
})

app.get('/book/:id', (req, res) => {
    let id = req.params.id
    console.log('Request to get specific book by id ',id)

    Book.findById(id).then( (book) => {
        if(!book) {
            res.status(404).send('Book not found.')
        }

        res.send(book)
    } ).catch( (err) => {
        if (err) throw err
    } )
})

app.delete('/book/:id', (req, res) => {
    let id = req.params.id
    console.log('Request to delete book by id ',id)

    Book.findOneAndRemove(id).then( () => {
        res.send('Book deleted')
    } ).catch( (err) => {
        if (err) throw err
    } )
})

app.listen(8001, () => {
    console.log("Up and running! -- This is our Books service");
})
