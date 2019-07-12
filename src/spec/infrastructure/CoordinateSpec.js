var serviceLocator = require('../../lib/serviceLocator/ServiceLocator').ServcieLocator;

describe("CoordinateUtility", function () {
    var coordinateUtility;
    beforeAll(function () {
        this.coordinateUtility = serviceLocator.getInstance("CoordinateUtility");
        console.log(this.coordinateUtility);
    });
   
    it("should determine if a point is close than 10 KM", function () {
        expect(this.coordinateUtility.getCoordinatesDistance(
            49.48, 8.46, 49.488331, 8.46472))
            .toEqual(0.9871221973610342);
    })
});