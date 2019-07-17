class City {
    constructor() {
        this.coordinateUtility = global.serviceLocator.getInstance("CoordinateUtility");
        this.cityRepo = global.serviceLocator.getInstance("CityRepo");        
    }
    syncCitiesList() {
        return this.cityRepo.syncCities();
    }

    getCloseCitiesTo(coordinate) {
        var closeCities;
        closeCities = this.cityRepo.getCities().filter(city =>
            this.coordinateUtility.getCoordinatesDistance(
                coordinate.lat,
                coordinate.lon,
                city.coord.lat,
                city.coord.lon) < global.appConfig.closeDistance
        );
        return closeCities;
    }

    getCity(cityId) {
        var city = this.cityRepo.getCities().find(city => {
            if (city.id == cityId)
                return city;
        });
        return city;
    }
}

module.exports = City