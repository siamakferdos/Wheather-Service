
const {cityInfo, citiesList} = require("./city_route")
const {cityWeather} = require("./weather_route")

var restify = require('restify');
var config = require('../../config/config');
const restifyPlugins = require('restify-plugins');

const server = restify.createServer(
    {
        name: config.name,
        version: config.version,
    }
);


server.use(restifyPlugins.jsonBodyParser({ mapParams: true }));
server.use(restifyPlugins.queryParser({ mapParams: true }));
server.use(restifyPlugins.fullResponse());

server.listen(config.port, function () {
    console.log('%s listening at %s', restify.name, config.base_url);
});


server.get('/cities/:cityId', cityInfo);
server.get('/cities/:cityId/weather', cityWeather);
server.get('/cities', citiesList);

module.exports = server