const publisherModel=require("../models/publisher")

const publisherData=async function(req,res){
    let publisher=req.body
    let publisherCreate=await publisherModel.create(publisher)
    res.send({msg:publisherCreate})
}


const dataPublisher=async function(req,res){
    let data=await dataPublisher.find(publisherModel)
}
module.exports.publisherData=publisherData
module.exports.dataPublisher=dataPublisher