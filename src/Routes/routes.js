const express = require('express');
const router = express.Router();

const AuthorController = require("../Controllers/AuthorController")
const BlogController = require("../Controllers/BlogController")
const authorAuth = require('../middlewares/auth')



router.post("/CreateUser", AuthorController.createAuthor )

router.post('/login', AuthorController.loginAuthor);

router.post("/CreateBlog", authorAuth.authorAuth,BlogController.createBlog )

 router.get("/getAuthorsData",authorAuth.authorAuth,BlogController.getlistBlog)

router.put("/blogs/:blogId",authorAuth.authorAuth, BlogController.updateBlog)

router.delete("/blogs/:blogId",authorAuth.jwtauth2, BlogController.deleteBlogByID)

router.delete("/blogs",authorAuth.authorAuth, BlogController.deleteBlogByParams)



module.exports = router;










