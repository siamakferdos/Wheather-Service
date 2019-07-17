class AppConfig{
    get closeDistance() { return 10 }

    get citiesFileUrl(){ return "http://bulk.openweathermap.org/sample/city.list.json.gz"}

    get weatherByCityIdUrl(){ return "https://samples.openweathermap.org/data/2.5/weather" }

    get weatherDotOrgApiKey() { return "d07dfb4e7ecdb22629ebe36deb7a8af6"}


}

module.exports = AppConfig