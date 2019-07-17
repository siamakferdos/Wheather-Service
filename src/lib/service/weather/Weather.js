class Weather{
    constructor() {        
        this.weatherRepo = global.serviceLocator.getInstance("WeatherRepo");        
    }

    getWeatherOfCity(cityId) {
        return this.weatherRepo.getWeaherOfCity(cityId);
    }
}