global.serviceLocator = require('./lib/serviceLocator/ServiceLocator').ServcieLocator;
var path = require('path');
global.appRoot = path.resolve(__dirname);


var c = serviceLocator.getInstance("CityRepo");
c.downloadCities() ;

