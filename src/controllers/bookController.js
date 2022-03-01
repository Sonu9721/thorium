const BookModel = require("../models/bookModel")

const createBook = async function(req, res){
    let data= req.body

    let saveData = await BookModel.create(data)
    res.send({msg:saveData})
}

const getBookList = async function (req,res){
    let allUsers = await BookModel.find().select({bookName:1,authorName:1,_id:0})
    res.send({msg:allUsers})

}

const booksYear= async function (req,res){
    let yer= req.query.yer
    let allUsers= await BookModel.find({year:{$eq:yer}})
    res.send({msg:allUsers})
}

const getPaticularBooks = async function (req,res){
    let name = req.query.name
    let year = req.query.year
    let aname = req.query.aname
    let totalpage = req.query.totalpage

    let allUsers = await BookModel.find({
        $or:[{authorName:{$eq:aname}},{year:{$eq:year}},{bookName:{$eq:name}},{totalpage:{$eq:totalpage}}]

    }).select()
    res.send({msg:allUsers})
}

const getInrBooks = async function (req,res){
    let yer=req.query.year
    let allUsers = await BookModel.find({
        $or:[
            {"prices.indianPrice":"100"},
            {"prices.indianPrice":"200"},
            {"prices.indianPrice":"500"},
        ]
    })
    res.send({msg:allUsers})
}

const getRandomBooks = async function(req,res){
    let allUsers = await BookModel.find({stockAvailable:true,totalpages:{$gt:500}})
    res.send({msg:allUsers})
}


module.exports.createBook=createBook
module.exports.getBookList=getBookList
module.exports.booksYear=booksYear
module.exports.getPaticularBooks=getPaticularBooks
module.exports.getInrBooks=getInrBooks
module.exports.getRandomBooks=getRandomBooks 