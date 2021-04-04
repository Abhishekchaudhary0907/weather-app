const request = require('postman-request');

const forecast =(latitude,longitude,callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=721b844d8ed758156006731e8a315700&query='+latitude+','+longitude+'&units=m'

    request({url: url, json:true},(error,response) => {
        if(error){
            callback('unable to connect to the weather services',undefined);
        }else if(response.body.error){
            callback('unable to fine location',undefined);
        }else{
            callback(undefined,
                response.body.current.weather_descriptions[0]+" It is currentely "+" current temparature is "
                +response.body.current.temperature + " feels like temparature is "+
                response.body.current.feelslike
            )
        }
    })
}

module.exports = forecast;