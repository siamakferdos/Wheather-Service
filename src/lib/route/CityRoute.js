class CityRoute {   
    citiesList(req, res, next) {        
        if (!req.params.lat || !req.params.lng) {
            return next("err")
        }
        let CoordinateModel = require("../model/Coordinate");
        let cityService = global.serviceLocator.getInstance("City");
        let cities = cityService.getCloseCitiesTo(new CoordinateModel(req.params.lat, req.params.lng))
        res.send(cities)
    }

    cityInfo(req, res, next) { 
        if (!req.params.cityId) {
            return next("err")
        }
        let cityService = global.serviceLocator.getInstance("City");
        let city = cityService.getCity(req.params.cityId)
        res.send(city)
    }
}
module.exports = CityRoute;