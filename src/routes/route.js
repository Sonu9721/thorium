const express = require('express');
const router = express.Router();

router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})



// // 1.This API will fetch all movied from array

router.get('/movies', function (req,res) {
    res.send('["Ashique-2","Chennai Express","Suryavanshi","KGF","Pushpa"]')
});

// //2. This API will fetch all movie by indexId from array
router.get('/movies/:movieId', function(req,res){
    //console.log(req)
    mov=["Ashique-2","Chennai Express","Suryavanshi","KGF","Pushpa"]
    let value = req.params.movieId;
    if(value>mov.length-1){
        res.send('"doesnt exist"')
    }else {
        res.send(mov[value])
    }
});

//3.This API will fetch all movies from array all objects
router.get('moviez', function (req,res){
    res.send([{"id":1, "name": "The Shining"},{"id":2, "name":"Incendies"},{"id":3,"name":"Rang de Basanti"},{"id":4,"name":"Finding Demo"}]);

});

//4. This API will fetch all movies from array of objects by indexId
router.get('/films/:filmId', function(req,res){
    let movi = [{"id":1, "name": "The Shining"},{"id":2, "name":"Incendies"},{"id":3,"name":"Rang de Basanti"},{"id":4,"name":"Finding Demo"}];
    let value = req.params.filmId;
    //console.log(typeof value)
    let found = false;
    for(i=0;i<movi.length;i++){
        //console.log (typeof movi[i].id)
        //console.log(movi[i])
        if(movi[i].id==value){
            found=true
            res.send(movi[i])
            break
        }
    }
    if(found==false){
        //console.log(found)
        res.send('"NO movie exists with this id"')
    }
    //console.log(found)
    //if(movi.id==value){
        //res.send(movi[value-1])}
        //else if(movi.id!==value) {res.send('"No movie exists with this id"')}
    });

module.exports = router;

