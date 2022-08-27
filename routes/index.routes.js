const BookModel = require("../models/Book.model");

const router = require("express").Router();

/* GET home page */

router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/about", (req, res, next) => {
  res.render("about");
});
router.get("/ListOfBooks", (req, res, next) => {
  res.render("ListOfBooks");
});

router.get("/BookCreationForum", (req, res, next) => {
  res.render("BookCreationForum");
});

router.get("/success", (req, res, next) => {
  res.render("success");
});

router.post("/BookCreationForum", (req, res, next) => {
  const { title, author } = req.body;

  BookModel.create({ title, author }).then((createdBook) => {
    console.log(createdBook);

    // For now, we are going to redirect the user to the homepage
    // After the book gets successfully created. Ideally, we would show a
    // "Book successfully created" message to the user.
    res.redirect("/success");
  });
});
//This will allow us to enter the created book in Mongo Db database. We will be able to see the newly
//created object through mongoDb compass.
// controller!
// "/contact-us" is called slash contact-us end point.
// a controller (ex: get, post, delete etc) is a way to handle requests.
router.get("/contact-us", (req, res, next) => {
  res.render("contact-us");
});

module.exports = router;

// HTTP VERBS
// GET
// POST
// DELETE
// PATCH
