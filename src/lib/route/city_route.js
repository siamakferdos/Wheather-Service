const errs = require('restify-errors');

module.exports.citiesList = function(req, res, next) {        
    if (!req.params.lat || !req.params.lng) {
        return next(new errs.BadRequestError("lat/lng required")
        )
    }
    let CoordinateModel = require("../model/Coordinate");
    let cityService = global.serviceLocator.getInstance("City");
    let cities = cityService.getCloseCitiesTo(new CoordinateModel(req.params.lat, req.params.lng))
    res.send(cities.map(city => { return {"id":city.id,"name":city.name}}))
}

module.exports.cityInfo = function(req, res, next) {     
    let cityService = global.serviceLocator.getInstance("City");
    let city = cityService.getCity(req.params.cityId)
    if(!city){
        return next(new errs.NotFoundError("not found!")
        )  
    }
    res.send({"id":city.id, "name":city.name, "lat":city.coord.lat, "lng":city.coord.lon})
}   