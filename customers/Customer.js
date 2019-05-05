const mongoose = require("mongoose")

mongoose.model('Customer', {
    //name, age, address
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: false,
    },
})