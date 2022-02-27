const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")

router.post("/createUser", async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
})
router.get("/getUserData", async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
  //users
})
module.exports = router;