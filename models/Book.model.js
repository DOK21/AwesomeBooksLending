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
  //emum is a schema validator . We can use an emum to save creating genre model.
  publisher: {
    type: String,
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
  genre: {
    type: [String],
    enum: ["history", "comedy", "romance", "adventure", "psychology"],
    required: true,
    //If somehow we forget to send the value this will prevent the backend from crashing.
    //Because it will send an "undefined"  in javascript and as it is not in the array, the backend will crash.
    // MongoDb will say "undefined is not a valid value"
  },
  language: {
    type: [String],
    enum: ["English", "French", "Russian", "Arabic", "Japanese"],
    required: true,
  },
});

//just like in the recipe lab the skill level is the genre here

const BookModel = mongoose.model("books", BookSchema);
module.exports = BookModel;
