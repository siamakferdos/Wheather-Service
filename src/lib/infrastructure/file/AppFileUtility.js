
var path = require('path');
global.appRoot = path.resolve(__dirname);
class AppFileAppFileUtility{
    getAppRoot() {
        return global.appRoot;
    }
}

module.exports = AppFileAppFileUtility
