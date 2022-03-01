const express = require('express');
const router = express.Router();
const bookModels= require("../models/bookModel.js")
const bookController= require("../controllers/bookController.js")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createBook", bookController.createBook  )

router.get("/bookList", bookController.getBookList)

router.post("/booksInYear", bookController.booksYear)

router.get("/paticularBooks", bookController.getPaticularBooks)

router.get("/INRBooks",bookController.getInrBooks)

router.get("/randomBooks",bookController.getRandomBooks)


module.exports = router;