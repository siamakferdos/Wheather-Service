
class CityRepo {
    constructor() {
        this.httpUtility = global.serviceLocator.getInstance("HttpUtility");
        this.fileUtility = global.serviceLocator.getInstance("FileUtility");
        this.appRoot = global.appRoot;
        this.citiesFilePath = `${this.appRoot}\\asset\\cities.json`;
        this.citiesZipFilePath = `${this.appRoot}\\asset\\cities.json_zip`;
        this.citiesDownloadUrl = "http://bulk.openweathermap.org/sample/city.list.json.gz";
        this.cities = null;
    }

    syncCities() {
        var self = this;
        return new Promise(function (resolve, reject) {
            if (self.isCitiesFileExist()) {
                resolve();
                return;
            }
            try {
                self.httpUtility.downloadFile(self.citiesDownloadUrl, self.citiesFilePath + "_zip")
                    .then(() => {
                        self.fileUtility.gunzipFile(self.citiesFilePath + "_zip", self.citiesFilePath);
                        resolve();
                    })
                    .catch((err) => { throw err });
            } catch (e) {
                reject(e);
            }

        })
    }

    deleteCitiesFile() {
        if (this.isCitiesFileExist())
            this.fileUtility.deleteFile(this.citiesFilePath);
    }

    isCitiesFileExist() {
        return this.fileUtility.isFileExist(this.citiesFilePath);
    }

    getCities() {
        if (this.cities === null)
            this.cities = this.fileUtility.getJsonFileContent(this.citiesFilePath);
        return this.cities

    }

}

module.exports = CityRepo;