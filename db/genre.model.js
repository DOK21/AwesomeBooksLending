const mongoose = require("mongoose");
const mongoose = require("mongoose");
const GenreSchema = new mongoose.Schema({
  title: {
    type: [String],
    required: true,
  },
});
const GenreModel = mongoose.model("genre", GenreSchema);
module.exports = GenreModel;
