const mongoose = require("mongoose")

mongoose.model("Order", {
    CustomerId: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
    },
    BookId: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
    },
    dateBorrowed: {
        type: Date,
        required: true,
    },
    dateReturned: {
        type: Date,
        required: false,
    }
})