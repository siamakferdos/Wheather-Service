
class CityRepo{
    constructor() {
        this.serviceLocator = require('../../../serviceLocator/ServiceLocator').ServcieLocator;
        this.httpUtility = serviceLocator.getInstance("HttpUtility");
        this.fileUtility = serviceLocator.getInstance("FileUtility");
        this.appRoot = global.appRoot;
        this.citiesFilePath = `${this.appRoot}\\asset\\cities.json`;
        this.citiesZipFilePath = `${this.appRoot}\\asset\\cities.json_zip`;
        this.citiesDownloadUrl = "http://bulk.openweathermap.org/sample/city.list.json.gz";
    }
    downloadCities() {   
        
        var self = this;
        
        return new Promise(function (resolve, reject) {
            if (self.isCitiesFileExist()) {
                resolve();
                return;
            }
            try {                
                self.httpUtility.downloadFile(self.citiesDownloadUrl, self.citiesFilePath + "_zip")
                    .then(() => { 
                        self.fileUtility.GunzipFile(self.citiesFilePath + "_zip", self.citiesFilePath);
                    })
                    .catch((err) => {throw err});

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
   
}

module.exports = CityRepo;