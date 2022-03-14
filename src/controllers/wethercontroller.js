const { default: axios } = require("axios")



const getWether = async function(req,res){
    const {city, api_key} =req.body
    const options={
        method: "get",
        url:`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
    }
    let result = await axios(options);
    let temp = result.data.main.temp
    res.status(200).send({data:temp})
}

let getAllCountry = async function (req, res) {

    try {
        let cities=["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"];
        let tempOfCities=[];
        for(let i=0;i<cities.length;i++)
        {
        let checkCity= {city:cities[i]};
        
       
        let result = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=1b8cbf61cf91c404345a72ea98a3c238`);
        console.log(result);
        let gettingTemp=result.data.main.temp;
        console.log(gettingTemp);
        checkCity.temp=gettingTemp;
        tempOfCities.push(checkCity);
    }
       let tempSortedCities=tempOfCities.sort(function(x,y){return x.temp-y.temp});

        res.status(200).send({ status: true ,data : tempSortedCities })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}




module.exports.getWether=getWether
module.exports.getAllCountry=getAllCountry