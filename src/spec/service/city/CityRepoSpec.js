var serviceLocator = require('../../../lib/serviceLocator/ServiceLocator').ServcieLocator;

describe("CityRepo", function () {
    beforeAll(function () {
        this.cityRepo = serviceLocator.getInstance("CityRepo");
        //this.appFileUtility = serviceLocator.getInstance("AppFileUtility");
        // spyOn(serviceLocator, 'getAppRoot').and.callFake(function () {            
        //     return '/';
        // });
    });

    it("should download a json file of cities list", function () {
        this.cityRepo.deleteCitiesFile();
        this.cityRepo.downloadCities()
            .then(() => expect(this.cityRepo.isCitiesFileExist()).toEqual(true))
            .catch(e => console.log(e));        
    })
});