const request = require('request')

const geocode = (address, apikey, callback) => {
    const url = 'http://dataservice.accuweather.com/locations/v1/cities/search'
    request({ url, qs: {q: address, apikey: apikey} }, (error, response, body) => {
        const arr = JSON.parse(body)
        
        if (error) {
            callback('Unable to connect to location services!', {})
        } else if (arr.length === 0) {
            callback('Unable to find location. Try another search.', {})
        } else {
            console.log(arr)
            callback(undefined, {
                locationKey: arr[0].Key
            })
        }
    })
}

module.exports = geocode