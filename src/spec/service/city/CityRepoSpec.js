var serviceLocator = require('../../../lib/serviceLocator/ServiceLocator').ServcieLocator;
var appConfig = null;
var cityRepo = null;
describe("CityRepo", function () {
    beforeAll(function () {
        global.serviceLocator = serviceLocator;
        global.appConfig = {};
        appConfig = serviceLocator.getInstance("AppConfig");
        global.appRoot = process.mainModule.paths[0].split('node_modules')[0].slice(0, -1);
        global.appConfig.citiesFileUrl = appConfig.citiesFileUrl;
        global.appConfig.getCloseDistance = appConfig.closeDistance;
        cityRepo = serviceLocator.getInstance("CityRepo");
    });

    it("should download a json file of cities list", function () {        
        cityRepo.syncCities()
            .then(() => expect(cityRepo.isCitiesFileExist()).toEqual(true))
            .catch(e => console.log(e));
    })

    it("should get citeis list", function () {
        expect(cityRepo.getCities().length).toBeGreaterThan(0)
    })
});