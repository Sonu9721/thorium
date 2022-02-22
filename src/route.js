const express = require('express');

const router = express.Router();

router.get('/test-me', function(req,res) {
    res.send('My first ever api!')
});

router.get('/test-hi', function(req,res){
    res.send('My first hello')
    console.log(obj.endpoint)
});

module.exports = router;

router.get('/hello', function(req,res){

})