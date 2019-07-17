const errs = require('restify-errors');

module.exports.cityWeather = function(req, res, next) {     
    let cityService = global.serviceLocator.getInstance("Weather");
    cityService.getWeatherOfCity(req.params.cityId)
        .then((city) => {
            if(!city){
                return next(new errs.NotFoundError("not found!")
                )  
            }
            res.send({"type": city.weather[0].main,
            "type_description": city.weather[0].description,
            "sunrise": city.sys.sunrise,
            "sunset": city.sys.sunset,
            "temp": city.main.temp,
            "temp_min": city.main.temp_min,
            "temp_max": city.main.temp_max,
            "pressure": city.main.pressure,
            "humidity": city.main.humidity,
            "clouds_percent": city.clouds.all,
            "wind_speed": city.wind.speed})
        })
        .catch((e) => {
            return next(new errs.InternalServerError(e.message))
        })
}   