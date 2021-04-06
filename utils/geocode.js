const request = require('postman-request');

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?proximity=-74.70850,40.78375&access_token=pk.eyJ1IjoiYWJoaXNoZWtjaGF1ZGhhcnkwOTA3IiwiYSI6ImNrbXl4aWdnbjA4OGgydm5uNzQ5Zjg3YmIifQ.Aa5crpoMPMJ981gaUhER7w&limit=1';

    request({url,json: true },(error, {body}) => {
        if(error){
            callback('Unale to connect to the geocoding services', undefined);
        }else if(body.features.length === 0){
            callback('Unable to fine location', undefined);

        }else {
            callback(undefined,{
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location : body.features[0].place_name
            })
        }
    })
}

module.exports = geocode;