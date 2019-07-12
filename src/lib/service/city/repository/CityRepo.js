const fs = require('fs');

class CityRepo{
    constructor() {
        this.serviceLocator = require('../../../serviceLocator/ServiceLocator').ServcieLocator;
        this.appRoot = this.serviceLocator.getInstance("AppFileUtility").getAppRoot();
        this.citiesFilePath = "./../asset/cities.json";
    }
    downloadCities() {   
        const http = require('http');
        var self = this;
        
        return new Promise(function (resolve, reject) {
            if (self.isCitiesFileExist()) {
                resolve();
                return;
            }
            try{
                const file = fs.createWriteStream(self.citiesFilePath);
                console.log(self.citiesFilePath)
                http.get("http://bulk.openweathermap.org/sample/city.list.json.gz", function (response) {
                    response.pipe(file);
                    resolve();
                });
            } catch (e) {
                reject(e);
            }
            
        })
    }
    deleteCitiesFile() {
        if(this.isCitiesFileExist())
            fs.unlinkSync(this.citiesFilePath)
    }
    isCitiesFileExist() {
        return fs.existsSync(`${appRoot}/asset/cities.json`);
    }
    getAllCities() {
        
    }

}

module.exports = CityRepo;