const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
// appcd.use(bodyParser.urlencoded({ extended: true }));


app.use(function (req, res, next){
    console.log('Request URL:', req.originalUrl)
   


   console.log('Request Type:', req.method) // use to check method
 const date = new Date().toLocaleString()
    console.log(date,req.ip,req.url)
    next()
})




mongoose.connect("mongodb+srv://taabish:lkmgsyjhwbQYgkvX@cluster0.cp3ka.mongodb.net/sonu639?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
