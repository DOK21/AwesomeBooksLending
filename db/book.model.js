const mongoose = require("mongoose");
const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: true,
  },
  author: {
    type: [String],
    required: true,
  },
  publisher: {
    type: String,
    required: true,
  },
  //nsfw(not safe for words): {
  // type: Boolean,
  //default: false,
  //},
  description: {
    type: String,
  },
  year: {
    type: Number,
  },
  summary: {
    type: String,
    // we can add a "default" value to avoid screwing the page design
  },
});
const BookModel = mongoose.model("books", BookSchema);
module.exports = BookModel;
