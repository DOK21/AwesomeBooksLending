const mongoose = require("mongoose");
const BooksSchema = new mongoose.Schema({
    title: {
        type: [String],
        unique: true,
        required: true,
    }
    author: {
        type: String,
        unique: true,
        required: true,
    }
    publisher: {
        type: String,
        required: true,
    },
    nsfw:{
        type: Boolean,
        default: false,
    },




});
const BookModel = mongoose.model("books", BookSchema);
module.exports = BookModel;