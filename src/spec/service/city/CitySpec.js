var serviceLocator = require('../../../lib/serviceLocator/ServiceLocator').ServcieLocator;
var city = null;

describe("City service", function () {
    beforeAll(function () {
        global.serviceLocator = serviceLocator;
        global.appConfig = {};
        appConfig = serviceLocator.getInstance("AppConfig");
        global.appRoot = process.mainModule.paths[0].split('node_modules')[0].slice(0, -1);       
        global.appConfig.getCloseDistance = appConfig.closeDistance;
        city = serviceLocator.getInstance("City");
    });

    it("should find close city to coordinate", function () {
        var coordinate = new (require('../../../lib/model/Coordinate'))(49.48, 8.46);
        var cities = city.getCloseCitiesTo(coordinate);
        expect(cities.length).toBe(22);
    })

    it("should get city info by id", function () {
        expect(city.getCity(2852163).name).toBe("Pretzetze");
    })
});