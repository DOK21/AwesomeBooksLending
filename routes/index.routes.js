const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/about",(req,res,next)=>{
  res.render("about")
})
router.get("/ListOfBooks",(req,res,next)=>{
  res.render("ListOfBooks")
})

// controller! 
// "/contact-us" is called slash contact-us end point. 
// a controller (ex: get, post, delete etc) is a way to handle requests. 
router.get("/contact-us", (req,res,next)=>{
  res.render("contact-us")
})

module.exports = router;
