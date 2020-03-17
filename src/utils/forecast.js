const request = require('request')

const forecast = (locationKey, apikey, callback) => {
    const url = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/' + locationKey

    request({ url, qs:{apikey: apikey}}, (error, { body }) => {
        const obj = JSON.parse(body);
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (obj.error) {
            callback('Unable to find location', undefined)
        } else {
            console.log(obj.DailyForecasts)
            callback(undefined, JSON.stringify(obj.DailyForecasts))
        }
    })
}

module.exports = forecast