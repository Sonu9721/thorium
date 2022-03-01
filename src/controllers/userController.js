const UserModel= require("../models/userModel")

const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

module.exports.createUser= createUser
module.exports.getUsersData= getUsersData

const { count } = require("console")
const bookModel= require("../models/bookModel")

const createBook = async function(req, res){
    let bookData = req.body
    let save =  await bookModel.create(bookData);
    console.log('stored book data successfully');
    res.send({ "Book Data" : save});
}
const bookList = async function(req ,res){
    let booksName = await bookModel.find().select({bookName : 1, authorName : 1});
    console.log('Data sent successfully');
    res.send({"List of books and authors " : booksName})
}
const getBooksInYear = async function(req, res){
    let bookYearData = req.body.year
    let bookYear = await bookModel.find({year : bookYearData});
    console.log('Data sent successfully');
    res.send({ "Book Data according to the year" : bookYear});
}
 
module.exports.createBook = createBook;
module.exports.bookList = bookList;
module.exports.getBooksInYear = getBooksInYear;