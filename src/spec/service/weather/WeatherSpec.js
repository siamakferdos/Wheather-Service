var serviceLocator = require('../../../lib/serviceLocator/ServiceLocator').ServcieLocator;

describe("WeatherRepo", function () {
    beforeAll(function () {
        var AppConfig = require('../../../config/AppConfig')
        var appConfig = new AppConfig();
        global.serviceLocator = serviceLocator;
        
        global.appConfig.weatherByCityIdUrl = appConfig.weatherByCityIdUrl;
        global.appConfig.weatherDotOrgApiKey = appConfig.weatherDotOrgApiKey;
        this.weatherRepo = serviceLocator.getInstance("WeatherRepo");
    });

    it("should return weather of a city by cityId", function () {        
        this.weatherRepo.getWeaherOfCity(2873891)
            .then((city) => expect(city.coord).toBe({"lon":145.77,"lat":-16.92}))
            .catch(e => console.log(e));
    })
});