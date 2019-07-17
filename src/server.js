global.serviceLocator = require('./lib/serviceLocator/ServiceLocator').ServcieLocator;
var path = require('path');
global.appRoot = path.resolve(__dirname);
global.appConfig = global.serviceLocator.getInstance("AppConfig");

var city = global.serviceLocator.getInstance("City");
city.syncCitiesList().then(() => {
}).catch(err => console.log(err));

var server = require('./lib/route/route')

server.on('NotFound', function (req, res, err, cb) {    
    return cb();
})

server.on('BadRequest', function (req, res, err, cb) {    
    return cb();
})




