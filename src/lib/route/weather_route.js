const errs = require('restify-errors');

module.exports.cityWeather = function(req, res, next) {     
    let cityService = global.serviceLocator.getInstance("Weather");
    let city = cityService.getWeatherOfCity(req.params.cityId)
    if(!city){
        return next(new errs.NotFoundError("not found!")
        )  
    }
    res.send({"id":city.id, "name":city.name, "lat":city.coord.lat, "lng":city.coord.lon})
}   