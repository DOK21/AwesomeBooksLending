const MONGO_URI =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/AwesomeBooksLending";
//if it doesn't exist we are giving it the second value, which is our local database (which is a string)
module.exports = MONGO_URI;
