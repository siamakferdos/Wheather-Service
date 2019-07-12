global.serviceLocator = require('./lib/serviceLocator/ServiceLocator').ServcieLocator;


var c = serviceLocator.getInstance("CityRepo");
c.downloadCities();