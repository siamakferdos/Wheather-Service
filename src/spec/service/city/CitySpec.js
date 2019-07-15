var serviceLocator = require('../../../lib/serviceLocator/ServiceLocator').ServcieLocator;

describe("City service", function () {
    beforeAll(function () {
        global.serviceLocator = serviceLocator;
        global.appRoot = process.mainModule.paths[0].split('node_modules')[0].slice(0, -1);
        this.city = serviceLocator.getInstance("City");
    });

    it("should find close city to coordinate", function () {
        expect(this.city.getCloseCitiesTo({ lat: 28, lon: 85.4167 }, 10).length).toBe(5);
    })

    it("should get city info by id", function () {
        expect(this.city.getCity(2852163).name).toBe("Pretzetze");
    })
});