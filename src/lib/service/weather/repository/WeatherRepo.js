class WeatherRepo{
    constructor() {
        this.httpUtility = global.serviceLocator.getInstance("HttpUtility");       
    }

    getWeaherOfCity(cityId) {
        var self = this;
        return new Promise(function (resolve, reject) {            
            try {
                self.httpUtility.callGetMethodApi(
                        `${global.appConfig.weatherByCityIdUrl}?id=${cityId}&appid=${global.appConfig.weatherDotOrgApiKey}`
                    )
                    .then(() => {                        
                        resolve();
                    })
                    .catch((err) => { throw err });
            } catch (e) {
                reject(e);
            }

        })
    }
}