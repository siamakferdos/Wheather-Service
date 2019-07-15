var serviceLocator = require('../../../lib/serviceLocator/ServiceLocator').ServcieLocator;

describe("CityRepo", function () {
    beforeAll(function () {
        global.serviceLocator = serviceLocator;
        global.appRoot = process.mainModule.paths[0].split('node_modules')[0].slice(0, -1);
        this.cityRepo = serviceLocator.getInstance("CityRepo");
    });

    it("should download a json file of cities list", function () {        
        this.cityRepo.syncCities()
            .then(() => expect(this.cityRepo.isCitiesFileExist()).toEqual(true))
            .catch(e => console.log(e));
    })

    it("should get citeis list", function () {
        expect(this.cityRepo.getCities().length).toBeGreaterThan(0)
    })
});