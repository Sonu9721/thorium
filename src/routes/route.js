const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const WetherController= require("../controllers/wethercontroller")
const memeController= require("../controllers/memeController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)

router.post("/cowin/getOtp", CowinController.getOtp)

router.get("/cowin/findByDistrict", CowinController.getDistrictsByDate)

//weather api
router.get("/getAllCountry/weather",WetherController.getAllCountry)
router.get("/getwether/weather",WetherController.getWether)

//memes api
router.get("/listOfMemes", memeController.getMemeList)
router.post("/memes/capton_image",memeController.createMeme)


// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date



module.exports = router;