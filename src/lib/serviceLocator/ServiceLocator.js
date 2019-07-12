
class ServiceLocator {
    constructor() {
        this.services = {}; 
        this.services.COORDINATEUTILITY = { type: "singleton", constructor: require("../infrastructure/geographic/CoordinateUtility") }
        this.services.CITYREPO = { constructor: require("../service/city/repository/CityRepo") }
        this.services.CITY = { constructor: require("../service/city/City") }
        this.services.APPFILEUTILITY = { type: "singleton", constructor: require("../infrastructure/file/AppFileUtility") }
    }

    getInstance(service, args) {
        service = service.toUpperCase()
        if (this.services[service].type === "singleton") {
            if (this.services[service].instance === null || this.services[service].instance === undefined)
                this.services[service].instance = new this.services[service].constructor(args);
            return this.services[service].instance;
        }
        else return new this.services[service].constructor(args);
    }
}

exports.ServcieLocator = new ServiceLocator();