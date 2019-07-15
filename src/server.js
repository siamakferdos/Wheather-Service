global.serviceLocator = require('./lib/serviceLocator/ServiceLocator').ServcieLocator;
var path = require('path');
global.appRoot = path.resolve(__dirname);
global.appConfig = global.serviceLocator.getInstance("AppConfig");


var c = global.serviceLocator.getInstance("City");
c.syncCitiesList().then(() => {
   
}).catch(err => console.log(err));

var restify = require('restify');
var config = require('./config/config');
const restifyPlugins = require('restify-plugins');
var cityRoute = global.serviceLocator.getInstance('CityRoute', restify);
var restify_err = require('restify-errors');

const server = restify.createServer(
    {
        name: config.name,
        version: config.version,
    }
);

server.use(restifyPlugins.jsonBodyParser({ mapParams: true }));
server.use(restifyPlugins.acceptParser(server.acceptable));
server.use(restifyPlugins.queryParser({ mapParams: true }));
server.use(restifyPlugins.fullResponse());

server.get('/cities/:cityId', cityRoute.cityInfo);
server.get('/cities', cityRoute.citiesList);
server.on('restifyError', function (req, res, err, cb) {
    // this listener will fire after both events above!
    // `err` here is the same as the error that was passed to the above
    // error handlers.
    return cb();
});
server.listen(config.port, function () {
    console.log('%s listening at %s', server.name, config.base_url);
});


