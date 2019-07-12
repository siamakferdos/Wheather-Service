class City{
    constructor() {
        var coordinateUtility = global.serviceLocator.getInstance("CoordinateUtility");
        var cityRepo = global.serviceLocator.getInstance("CityRepo");
    }
    syncCitiesList() {
        cityRepo.downloadCities();
    }
    getCloseCitiesTo(coordinate, distance) {
        
    }
}

module.exports = City